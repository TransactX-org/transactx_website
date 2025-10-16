# TransactX Email Templates

This directory contains all email templates for the TransactX platform. All templates are designed with consistent branding, clean design (no shadows), and responsive layouts.

## 📁 Directory Structure

```
email-templates/
├── base/
│   └── base-template.html          # Base template with common styling
├── transaction/
│   ├── transaction-confirmation.html
│   └── bill-payment-confirmation.html
├── auth/
│   ├── welcome-registration.html
│   ├── login-notification.html
│   └── password-reset.html
├── security/
│   └── security-alert.html
├── marketing/
│   └── newsletter.html
└── README.md
```

## 🎨 Design Features

- **Consistent Branding**: All templates use TransactX colors (#AB0B4B, #E91E63)
- **Clean Design**: No shadows, modern flat design
- **Responsive**: Mobile-first approach with responsive breakpoints
- **Accessible**: Proper contrast ratios and semantic HTML
- **Professional**: Clean typography and spacing

## 📧 Template Categories

### Transaction Templates
- **Transaction Confirmation**: For successful payments, transfers, deposits
- **Bill Payment Confirmation**: For utility bills, subscriptions, etc.

### Authentication Templates
- **Welcome Registration**: New user onboarding
- **Login Notification**: Security alerts for new logins
- **Password Reset**: Password reset requests and confirmations

### Security Templates
- **Security Alert**: Suspicious activity notifications

### Marketing Templates
- **Newsletter**: Weekly financial insights and tips

## 🔧 Template Variables

All templates use handlebars-style variables ({{variable_name}}) for dynamic content:

### Common Variables
- `{{customer_name}}` - Customer's full name
- `{{logo_url}}` - TransactX logo URL
- `{{current_year}}` - Current year for copyright

### Transaction Variables
- `{{transaction_id}}` - Unique transaction identifier
- `{{amount}}` - Transaction amount
- `{{transaction_type}}` - Type of transaction
- `{{transaction_date}}` - Date and time of transaction
- `{{available_balance}}` - Customer's current balance

### Authentication Variables
- `{{verification_code}}` - Email verification code
- `{{reset_code}}` - Password reset code
- `{{reset_link}}` - Password reset URL

### Security Variables
- `{{alert_type}}` - Type of security alert
- `{{ip_address}}` - IP address of suspicious activity
- `{{location}}` - Geographic location
- `{{device_info}}` - Device information

## 🚀 Usage

1. **Server-Side Rendering**: Use a templating engine like Handlebars, Mustache, or similar
2. **Email Service Integration**: Works with SendGrid, Mailgun, AWS SES, etc.
3. **Dynamic Content**: Replace variables with actual data from your database
4. **Testing**: Test templates with sample data before production use

## 📱 Responsive Design

All templates are optimized for:
- **Mobile**: 320px+ width
- **Tablet**: 768px+ width  
- **Desktop**: 1024px+ width

## 🎯 Best Practices

1. **Always test** templates with real data before sending
2. **Use HTTPS** for all links and images
3. **Include unsubscribe** links in marketing emails
4. **Test across** different email clients (Gmail, Outlook, etc.)
5. **Keep images** under 1MB for faster loading
6. **Use alt text** for all images

## 🔒 Security Considerations

- Never include sensitive data in email templates
- Use secure links for password resets
- Include security warnings for suspicious activity
- Always validate user input before rendering

## 📞 Support

For questions about email templates, contact:
- **Email**: support@mytransactx.com
- **Website**: https://www.mytransactx.com

---

© 2025 TransactX™. All Rights Reserved.
