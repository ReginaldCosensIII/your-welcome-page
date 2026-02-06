import { EmailHeader, getEmailHeaderHTML } from "../EmailHeader";
import { EmailHero, getEmailHeroHTML } from "../EmailHero";
import { EmailBodyText, getEmailBodyTextHTML } from "../EmailBodyText";
import { EmailCTAButton, getEmailCTAButtonHTML } from "../EmailCTAButton";
import { EmailFooter, getEmailFooterHTML } from "../EmailFooter";

interface EmailTemplateProps {
  theme: 'light' | 'dark';
}

export function PasswordResetTemplate({ theme }: EmailTemplateProps) {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const warningBg = theme === 'dark' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(251, 191, 36, 0.1)';
  const warningBorder = theme === 'dark' ? 'rgba(251, 191, 36, 0.3)' : 'rgba(251, 191, 36, 0.3)';
  
  return (
    <div style={{ backgroundColor: outerBg, padding: '24px 0' }}>
      <table 
        width="100%" 
        cellPadding="0" 
        cellSpacing="0" 
        role="presentation"
        style={{ 
          maxWidth: '600px',
          margin: '0 auto',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: theme === 'dark' 
            ? '0 25px 50px -12px rgba(0,0,0,0.5)' 
            : '0 25px 50px -12px rgba(0,0,0,0.15)'
        }}
      >
        <tbody>
          <tr>
            <td>
              <EmailHeader theme={theme} />
              <EmailHero 
                theme={theme}
                headline="Reset Your Password"
                subheadline="We received a request to reset your BlanketSmith password."
              />
              <EmailBodyText theme={theme}>
                <p style={{ margin: '0 0 16px 0' }}>
                  Hi <strong>{"{{user_name}}"}</strong>,
                </p>
                <p style={{ margin: '0 0 16px 0' }}>
                  Someone requested a password reset for your BlanketSmith account. If this was you, click the button below to set a new password.
                </p>
                
                {/* Warning Banner */}
                <div style={{
                  backgroundColor: warningBg,
                  border: `1px solid ${warningBorder}`,
                  borderRadius: '12px',
                  padding: '16px',
                  marginBottom: '24px'
                }}>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14px',
                    color: '#fbbf24',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    ⚠️ This link expires in 1 hour
                  </p>
                </div>
                
                <p style={{ margin: '0 0 16px 0' }}>
                  For security reasons:
                </p>
                <ul style={{ margin: '0 0 16px 0', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>This link can only be used once</li>
                  <li style={{ marginBottom: '8px' }}>Request sent from IP: {"{{request_ip}}"}</li>
                  <li>Request time: {"{{request_time}}"}</li>
                </ul>
                <p style={{ margin: 0, fontSize: '14px', color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                  If you didn't request this password reset, please ignore this email or contact our support team if you have concerns.
                </p>
              </EmailBodyText>
              <EmailCTAButton 
                theme={theme}
                text="Reset Password"
                href="{{reset_url}}"
              />
              <EmailFooter theme={theme} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function getPasswordResetHTML(theme: 'light' | 'dark'): string {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const warningBg = 'rgba(251, 191, 36, 0.1)';
  const warningBorder = 'rgba(251, 191, 36, 0.3)';
  const mutedColor = theme === 'dark' ? '#94a3b8' : '#64748b';
  const shadow = theme === 'dark' 
    ? '0 25px 50px -12px rgba(0,0,0,0.5)' 
    : '0 25px 50px -12px rgba(0,0,0,0.15)';

  const logoUrl = theme === 'dark' 
    ? 'https://blanketsmith.com/vertical-logo-white.png' 
    : 'https://blanketsmith.com/vertical-logo.png';
  const footerLogoUrl = theme === 'dark' 
    ? 'https://blanketsmith.com/horizontal-logo-white.png' 
    : 'https://blanketsmith.com/horizontal-logo.png';

  const warningBannerHTML = `
<div style="background-color: ${warningBg}; border: 1px solid ${warningBorder}; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
  <p style="font-family: 'Inter', sans-serif; font-size: 14px; color: #fbbf24; margin: 0; text-align: center;">
    ⚠️ This link expires in 1 hour
  </p>
</div>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Reset Your Password - BlanketSmith</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap');
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: ${outerBg}; font-family: 'Inter', Arial, sans-serif;">
  <div style="background-color: ${outerBg}; padding: 24px 0;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 600px; margin: 0 auto; border-radius: 16px; overflow: hidden; box-shadow: ${shadow};">
      <tr>
        <td>
          ${getEmailHeaderHTML(theme, logoUrl)}
          ${getEmailHeroHTML(theme, "Reset Your Password", "We received a request to reset your BlanketSmith password.")}
          ${getEmailBodyTextHTML(theme, `
            <p style="margin: 0 0 16px 0;">Hi <strong>{{user_name}}</strong>,</p>
            <p style="margin: 0 0 16px 0;">Someone requested a password reset for your BlanketSmith account. If this was you, click the button below to set a new password.</p>
            ${warningBannerHTML}
            <p style="margin: 0 0 16px 0;">For security reasons:</p>
            <ul style="margin: 0 0 16px 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">This link can only be used once</li>
              <li style="margin-bottom: 8px;">Request sent from IP: {{request_ip}}</li>
              <li>Request time: {{request_time}}</li>
            </ul>
            <p style="margin: 0; font-size: 14px; color: ${mutedColor};">If you didn't request this password reset, please ignore this email or contact our support team if you have concerns.</p>
          `)}
          ${getEmailCTAButtonHTML(theme, 'Reset Password', '{{reset_url}}')}
          ${getEmailFooterHTML(theme, footerLogoUrl)}
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}
