import { EmailHeaderV2, getEmailHeaderV2HTML } from "../EmailHeaderV2";
import { EmailFooterV2, getEmailFooterV2HTML } from "../EmailFooterV2";
import { EmailHeroV2, getEmailHeroV2HTML } from "../EmailHeroV2";
import { EmailBodyV2, getEmailBodyV2HTML } from "../EmailBodyV2";
import { EmailCTAV2, getEmailCTAV2HTML } from "../EmailCTAV2";

interface EmailVerificationV2Props {
  theme: 'light' | 'dark';
}

export function EmailVerificationV2({ theme }: EmailVerificationV2Props) {
  const containerBg = theme === 'dark' ? '#0a0e17' : '#f1f5f9';
  const emailBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const codeBg = theme === 'dark' ? 'rgba(124, 42, 232, 0.15)' : 'rgba(124, 42, 232, 0.08)';
  const codeColor = theme === 'dark' ? '#a78bfa' : '#7C2AE8';
  
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
                headline="Verify Your Email"
                subheadline="One quick step to complete your registration"
              />
              
              <EmailBodyV2 theme={theme}>
                <p style={{ margin: '0 0 24px 0' }}>
                  Thanks for signing up! Please use the verification code below or click the button to confirm your email address.
                </p>
                
                {/* Verification Code Box */}
                <div style={{
                  backgroundColor: codeBg,
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center',
                  marginBottom: '24px',
                  border: `1px solid ${theme === 'dark' ? 'rgba(124, 42, 232, 0.3)' : 'rgba(124, 42, 232, 0.2)'}`
                }}>
                  <p style={{ 
                    margin: '0 0 8px 0',
                    fontSize: '13px',
                    color: theme === 'dark' ? '#94a3b8' : '#64748b',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Your Code
                  </p>
                  <p style={{
                    fontFamily: "'Poppins', monospace",
                    fontSize: '32px',
                    fontWeight: 700,
                    color: codeColor,
                    margin: 0,
                    letterSpacing: '6px'
                  }}>
                    847291
                  </p>
                </div>
                
                <p style={{ 
                  margin: 0,
                  fontSize: '14px',
                  color: theme === 'dark' ? '#64748b' : '#94a3b8'
                }}>
                  This code expires in 10 minutes. If you didn't create an account, you can safely ignore this email.
                </p>
              </EmailBodyV2>
              
              <EmailCTAV2 
                theme={theme}
                text="Verify Email Address"
                href="https://blanketsmith.com/verify?token=xxx"
              />
              
              <EmailFooterV2 theme={theme} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function getEmailVerificationV2HTML(theme: 'light' | 'dark'): string {
  const containerBg = theme === 'dark' ? '#0a0e17' : '#f1f5f9';
  const emailBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const logoUrl = theme === 'dark' 
    ? 'https://blanketsmith.com/assets/horizontal-logo-white.svg'
    : 'https://blanketsmith.com/assets/logo-horizontal.svg';
  const codeBg = theme === 'dark' ? 'rgba(124, 42, 232, 0.15)' : 'rgba(124, 42, 232, 0.08)';
  const codeColor = theme === 'dark' ? '#a78bfa' : '#7C2AE8';
  const codeBorder = theme === 'dark' ? 'rgba(124, 42, 232, 0.3)' : 'rgba(124, 42, 232, 0.2)';
  const mutedColor = theme === 'dark' ? '#64748b' : '#94a3b8';
  const textColor = theme === 'dark' ? '#e2e8f0' : '#1e293b';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email - BlanketSmith</title>
</head>
<body style="margin: 0; padding: 0; background-color: ${containerBg}; font-family: 'Inter', Arial, sans-serif;">
  <div style="padding: 40px 20px;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 600px; margin: 0 auto; background-color: ${emailBg}; border-radius: 16px; overflow: hidden;">
      <tr>
        <td>
          ${getEmailHeaderV2HTML(theme, logoUrl)}
          ${getEmailHeroV2HTML(theme, "Verify Your Email", "One quick step to complete your registration")}
          ${getEmailBodyV2HTML(theme, `
            <p style="margin: 0 0 24px 0; color: ${textColor};">
              Thanks for signing up! Please use the verification code below or click the button to confirm your email address.
            </p>
            <div style="background-color: ${codeBg}; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px; border: 1px solid ${codeBorder};">
              <p style="margin: 0 0 8px 0; font-size: 13px; color: ${mutedColor}; text-transform: uppercase; letter-spacing: 1px;">Your Code</p>
              <p style="font-family: 'Poppins', monospace; font-size: 32px; font-weight: 700; color: ${codeColor}; margin: 0; letter-spacing: 6px;">{{verification_code}}</p>
            </div>
            <p style="margin: 0; font-size: 14px; color: ${mutedColor};">
              This code expires in 10 minutes. If you didn't create an account, you can safely ignore this email.
            </p>
          `)}
          ${getEmailCTAV2HTML(theme, "Verify Email Address", "{{verification_url}}")}
          ${getEmailFooterV2HTML(theme, logoUrl)}
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}
