import { EmailHeaderV2, getEmailHeaderV2HTML } from "../EmailHeaderV2";
import { EmailFooterV2, getEmailFooterV2HTML } from "../EmailFooterV2";
import { EmailHeroV2, getEmailHeroV2HTML } from "../EmailHeroV2";
import { EmailBodyV2, getEmailBodyV2HTML } from "../EmailBodyV2";
import { EmailCTAV2, getEmailCTAV2HTML } from "../EmailCTAV2";

interface PasswordResetV2Props {
  theme: 'light' | 'dark';
}

export function PasswordResetV2({ theme }: PasswordResetV2Props) {
  const containerBg = theme === 'dark' ? '#0a0e17' : '#f1f5f9';
  const emailBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const warningBg = theme === 'dark' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(251, 191, 36, 0.1)';
  const warningBorder = theme === 'dark' ? 'rgba(251, 191, 36, 0.3)' : 'rgba(251, 191, 36, 0.4)';
  const warningText = theme === 'dark' ? '#fbbf24' : '#d97706';
  
  return (
    <div style={{ 
      backgroundColor: containerBg,
      padding: '40px 20px',
      fontFamily: "'Inter', sans-serif"
    }}>
      <table 
        width="100%" 
        cellPadding="0" 
        cellSpacing="0" 
        role="presentation"
        style={{ 
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: emailBg,
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: theme === 'dark' 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
            : '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
        }}
      >
        <tbody>
          <tr>
            <td>
              <EmailHeaderV2 theme={theme} />
              
              <EmailHeroV2 
                theme={theme}
                headline="Reset Your Password"
                subheadline="Let's get you back into your account"
              />
              
              <EmailBodyV2 theme={theme}>
                <p style={{ margin: '0 0 20px 0' }}>
                  We received a request to reset the password for your BlanketSmith account. Click the button below to create a new password.
                </p>
                
                {/* Warning Box */}
                <div style={{
                  backgroundColor: warningBg,
                  borderRadius: '8px',
                  padding: '16px',
                  marginBottom: '20px',
                  borderLeft: `3px solid ${warningText}`
                }}>
                  <p style={{ 
                    margin: 0,
                    fontSize: '14px',
                    color: warningText,
                    fontWeight: 500
                  }}>
                    ⏱️ This link expires in 1 hour for security reasons.
                  </p>
                </div>
                
                <p style={{ 
                  margin: 0,
                  fontSize: '14px',
                  color: theme === 'dark' ? '#64748b' : '#94a3b8'
                }}>
                  If you didn't request this, you can safely ignore this email. Your password won't change.
                </p>
              </EmailBodyV2>
              
              <EmailCTAV2 
                theme={theme}
                text="Reset Password"
                href="https://blanketsmith.com/reset-password?token=xxx"
              />
              
              <EmailFooterV2 theme={theme} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function getPasswordResetV2HTML(theme: 'light' | 'dark'): string {
  const containerBg = theme === 'dark' ? '#0a0e17' : '#f1f5f9';
  const emailBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const logoUrl = theme === 'dark' 
    ? 'https://blanketsmith.com/assets/horizontal-logo-white.svg'
    : 'https://blanketsmith.com/assets/logo-horizontal.svg';
  const warningBg = theme === 'dark' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(251, 191, 36, 0.1)';
  const warningText = theme === 'dark' ? '#fbbf24' : '#d97706';
  const mutedColor = theme === 'dark' ? '#64748b' : '#94a3b8';
  const textColor = theme === 'dark' ? '#e2e8f0' : '#1e293b';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password - BlanketSmith</title>
</head>
<body style="margin: 0; padding: 0; background-color: ${containerBg}; font-family: 'Inter', Arial, sans-serif;">
  <div style="padding: 40px 20px;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 600px; margin: 0 auto; background-color: ${emailBg}; border-radius: 16px; overflow: hidden;">
      <tr>
        <td>
          ${getEmailHeaderV2HTML(theme, logoUrl)}
          ${getEmailHeroV2HTML(theme, "Reset Your Password", "Let's get you back into your account")}
          ${getEmailBodyV2HTML(theme, `
            <p style="margin: 0 0 20px 0; color: ${textColor};">
              We received a request to reset the password for your BlanketSmith account. Click the button below to create a new password.
            </p>
            <div style="background-color: ${warningBg}; border-radius: 8px; padding: 16px; margin-bottom: 20px; border-left: 3px solid ${warningText};">
              <p style="margin: 0; font-size: 14px; color: ${warningText}; font-weight: 500;">
                ⏱️ This link expires in 1 hour for security reasons.
              </p>
            </div>
            <p style="margin: 0; font-size: 14px; color: ${mutedColor};">
              If you didn't request this, you can safely ignore this email. Your password won't change.
            </p>
          `)}
          ${getEmailCTAV2HTML(theme, "Reset Password", "{{reset_url}}")}
          ${getEmailFooterV2HTML(theme, logoUrl)}
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}
