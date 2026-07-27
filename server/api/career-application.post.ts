import nodemailer from 'nodemailer'

const APPLICATIONS_OPEN = false
const ALLOWED_RESUME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
])
const MAX_RESUME_SIZE = 5 * 1024 * 1024
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function stripLineBreaks(value: string) {
  return value.replace(/[\r\n]+/g, ' ').trim()
}

export default defineEventHandler(async (event) => {
  if (!APPLICATIONS_OPEN) {
    throw createError({ statusCode: 410, statusMessage: 'Applications for this role are closed' })
  }

  const parts = await readMultipartFormData(event)

  if (!parts) {
    throw createError({ statusCode: 400, statusMessage: 'No form data received' })
  }

  const fields: Record<string, string> = {}
  let resume: { filename: string, type: string, data: Buffer } | null = null

  for (const part of parts) {
    if (part.name === 'resume' && part.filename) {
      resume = {
        filename: part.filename,
        type: part.type || 'application/octet-stream',
        data: part.data,
      }
    }
    else if (part.name) {
      fields[part.name] = part.data.toString('utf-8')
    }
  }

  const fullName = fields.fullName?.trim()
  const email = fields.email?.trim()
  const phone = fields.phone?.trim()
  const linkedin = fields.linkedin?.trim()
  const message = fields.message?.trim()
  const role = fields.role?.trim() || 'Backend Developer'

  if (!fullName || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Full name, email, and message are required' })
  }

  if (!EMAIL_PATTERN.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Please provide a valid email address' })
  }

  if (!resume) {
    throw createError({ statusCode: 400, statusMessage: 'Resume file is required' })
  }

  if (!ALLOWED_RESUME_TYPES.has(resume.type)) {
    throw createError({ statusCode: 400, statusMessage: 'Resume must be a PDF or Word document' })
  }

  if (resume.data.length > MAX_RESUME_SIZE) {
    throw createError({ statusCode: 400, statusMessage: 'Resume must be under 5MB' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT) || 465,
    secure: (process.env.MAIL_ENCRYPTION || 'ssl').toLowerCase() === 'ssl',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  const to = process.env.CAREER_APPLICATION_TO

  if (!to) {
    throw createError({ statusCode: 500, statusMessage: 'Career application recipient is not configured' })
  }

  await transporter.sendMail({
    from: `"TransactX Careers" <${process.env.MAIL_USERNAME}>`,
    to,
    replyTo: email,
    subject: `Application: ${stripLineBreaks(role)} - ${stripLineBreaks(fullName)}`,
    text: [
      `Role: ${role}`,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || 'N/A'}`,
      `LinkedIn / Portfolio: ${linkedin || 'N/A'}`,
      '',
      'Why they are a good fit:',
      message,
    ].join('\n'),
    attachments: [
      {
        filename: resume.filename,
        content: resume.data,
        contentType: resume.type,
      },
    ],
  })

  return { success: true }
})
