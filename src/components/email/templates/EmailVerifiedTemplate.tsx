import { EmailHeader, getEmailHeaderHTML } from "../EmailHeader";
import { EmailHero, getEmailHeroHTML } from "../EmailHero";
import { EmailProgressRail, getEmailProgressRailHTML } from "../EmailProgressRail";
import { EmailBodyText, getEmailBodyTextHTML } from "../EmailBodyText";
import { EmailCTAButton, getEmailCTAButtonHTML } from "../EmailCTAButton";
import { EmailFooter, getEmailFooterHTML } from "../EmailFooter";

interface EmailTemplateProps {
  theme: 'light' | 'dark';
}

export function EmailVerifiedTemplate({ theme }: EmailTemplateProps) {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const successBg = theme === 'dark' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.1)';
  const successBorder = theme === 'dark' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(34, 197, 94, 0.3)';
  
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
                headline="Email Verified! ✓"
                subheadline="You're all set. Your email has been confirmed and your account is ready."
              />
              <EmailProgressRail theme={theme} currentStep={2} />
              <EmailBodyText theme={theme}>
                {/* Success Banner */}
                <div style={{
                  backgroundColor: successBg,
                  border: `1px solid ${successBorder}`,
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '24px',
                  textAlign: 'center'
                }}>
                  <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#22c55e',
                    margin: 0
                  }}>
                    ✓ Verification Complete
                  </p>
                </div>

                <p style={{ margin: '0 0 16px 0' }}>
                  Hi <strong>{"{{user_name}}"}</strong>,
                </p>
                <p style={{ margin: '0 0 16px 0' }}>
                  Great news! Your email address has been verified successfully. Your BlanketSmith account is now fully activated and you're one step closer to joining the beta.
                </p>
                <p style={{ margin: '0 0 16px 0' }}>
                  <strong>What's next?</strong>
                </p>
                <ul style={{ margin: '0 0 16px 0', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>You're now in our beta queue</li>
                  <li style={{ marginBottom: '8px' }}>We'll send you access credentials within 48 hours</li>
                  <li style={{ marginBottom: '8px' }}>Keep an eye on your inbox for your welcome email</li>
                </ul>
                <p style={{ margin: 0 }}>
                  In the meantime, join our Discord community to connect with other makers and stay updated on the latest BlanketSmith news.
                </p>
              </EmailBodyText>
              <EmailCTAButton 
                theme={theme}
                text="Join Our Discord"
                href="https://discord.gg/blanketsmith"
              />
              <EmailFooter theme={theme} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function getEmailVerifiedHTML(theme: 'light' | 'dark'): string {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const successBg = 'rgba(34, 197, 94, 0.1)';
  const successBorder = 'rgba(34, 197, 94, 0.3)';
  const shadow = theme === 'dark' 
    ? '0 25px 50px -12px rgba(0,0,0,0.5)' 
    : '0 25px 50px -12px rgba(0,0,0,0.15)';

  const logoUrl = theme === 'dark' 
    ? 'https://blanketsmith.com/vertical-logo-white.png' 
    : 'https://blanketsmith.com/vertical-logo.png';
  const footerLogoUrl = theme === 'dark' 
    ? 'https://blanketsmith.com/horizontal-logo-white.png' 
    : 'https://blanketsmith.com/horizontal-logo.png';

  const successBannerHTML = `
<div style="background-color: ${successBg}; border: 1px solid ${successBorder}; border-radius: 12px; padding: 20px; margin-bottom: 24px; text-align: center;">
  <p style="font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 600; color: #22c55e; margin: 0;">
    ✓ Verification Complete
  </p>
</div>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Email Verified - BlanketSmith</title>
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
          ${getEmailHeroHTML(theme, "Email Verified! ✓", "You're all set. Your email has been confirmed and your account is ready.")}
          ${getEmailProgressRailHTML(theme, 2)}
          ${getEmailBodyTextHTML(theme, `
            ${successBannerHTML}
            <p style="margin: 0 0 16px 0;">Hi <strong>{{user_name}}</strong>,</p>
            <p style="margin: 0 0 16px 0;">Great news! Your email address has been verified successfully. Your BlanketSmith account is now fully activated and you're one step closer to joining the beta.</p>
            <p style="margin: 0 0 16px 0;"><strong>What's next?</strong></p>
            <ul style="margin: 0 0 16px 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">You're now in our beta queue</li>
              <li style="margin-bottom: 8px;">We'll send you access credentials within 48 hours</li>
              <li style="margin-bottom: 8px;">Keep an eye on your inbox for your welcome email</li>
            </ul>
            <p style="margin: 0;">In the meantime, join our Discord community to connect with other makers and stay updated on the latest BlanketSmith news.</p>
          `)}
          ${getEmailCTAButtonHTML(theme, 'Join Our Discord', 'https://discord.gg/blanketsmith')}
          ${getEmailFooterHTML(theme, footerLogoUrl)}
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}
