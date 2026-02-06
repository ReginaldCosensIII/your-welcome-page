import { EmailHeader, getEmailHeaderHTML } from "../EmailHeader";
import { EmailHero, getEmailHeroHTML } from "../EmailHero";
import { EmailBodyText, getEmailBodyTextHTML } from "../EmailBodyText";
import { EmailCTAButton, getEmailCTAButtonHTML } from "../EmailCTAButton";
import { EmailFooter, getEmailFooterHTML } from "../EmailFooter";

interface EmailTemplateProps {
  theme: 'light' | 'dark';
}

export function EmailVerificationTemplate({ theme }: EmailTemplateProps) {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const codeBg = theme === 'dark' ? '#1e293b' : '#e2e8f0';
  const codeColor = theme === 'dark' ? '#f1f5f9' : '#0f172a';
  
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
                headline="Verify Your Email"
                subheadline="One quick step to secure your spot in the Forge."
              />
              <EmailBodyText theme={theme}>
                <p style={{ margin: '0 0 16px 0' }}>
                  Hi <strong>{"{{user_name}}"}</strong>,
                </p>
                <p style={{ margin: '0 0 16px 0' }}>
                  Thanks for signing up for BlanketSmith! To complete your registration and secure your beta access, please verify your email address.
                </p>
                <p style={{ margin: '0 0 24px 0' }}>
                  Click the button below or use the verification code:
                </p>
                
                {/* Verification Code Box */}
                <div style={{ 
                  backgroundColor: codeBg,
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center',
                  marginBottom: '24px'
                }}>
                  <p style={{ 
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '32px',
                    fontWeight: 700,
                    letterSpacing: '8px',
                    color: codeColor,
                    margin: 0
                  }}>
                    {"{{verification_code}}"}
                  </p>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    color: theme === 'dark' ? '#94a3b8' : '#64748b',
                    margin: '12px 0 0 0'
                  }}>
                    This code expires in 24 hours
                  </p>
                </div>
                
                <p style={{ margin: 0, fontSize: '14px', color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                  If you didn't create a BlanketSmith account, you can safely ignore this email.
                </p>
              </EmailBodyText>
              <EmailCTAButton 
                theme={theme}
                text="Verify Email Address"
                href="{{verification_url}}"
              />
              <EmailFooter theme={theme} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function getEmailVerificationHTML(theme: 'light' | 'dark'): string {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const codeBg = theme === 'dark' ? '#1e293b' : '#e2e8f0';
  const codeColor = theme === 'dark' ? '#f1f5f9' : '#0f172a';
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

  const verificationCodeHTML = `
<div style="background-color: ${codeBg}; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
  <p style="font-family: 'Poppins', sans-serif; font-size: 32px; font-weight: 700; letter-spacing: 8px; color: ${codeColor}; margin: 0;">
    {{verification_code}}
  </p>
  <p style="font-family: 'Inter', sans-serif; font-size: 13px; color: ${mutedColor}; margin: 12px 0 0 0;">
    This code expires in 24 hours
  </p>
</div>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Verify Your Email - BlanketSmith</title>
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
          ${getEmailHeroHTML(theme, "Verify Your Email", "One quick step to secure your spot in the Forge.")}
          ${getEmailBodyTextHTML(theme, `
            <p style="margin: 0 0 16px 0;">Hi <strong>{{user_name}}</strong>,</p>
            <p style="margin: 0 0 16px 0;">Thanks for signing up for BlanketSmith! To complete your registration and secure your beta access, please verify your email address.</p>
            <p style="margin: 0 0 24px 0;">Click the button below or use the verification code:</p>
            ${verificationCodeHTML}
            <p style="margin: 0; font-size: 14px; color: ${mutedColor};">If you didn't create a BlanketSmith account, you can safely ignore this email.</p>
          `)}
          ${getEmailCTAButtonHTML(theme, 'Verify Email Address', '{{verification_url}}')}
          ${getEmailFooterHTML(theme, footerLogoUrl)}
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}
