import { EmailHeaderV2, getEmailHeaderV2HTML } from "../EmailHeaderV2";
import { EmailFooterV2, getEmailFooterV2HTML } from "../EmailFooterV2";
import { EmailHeroV2, getEmailHeroV2HTML } from "../EmailHeroV2";
import { EmailBodyV2, getEmailBodyV2HTML } from "../EmailBodyV2";
import { EmailCardV2, getEmailCardV2HTML } from "../EmailCardV2";
import { EmailCTAV2, getEmailCTAV2HTML } from "../EmailCTAV2";

interface BetaWelcomeV2Props {
  theme: 'light' | 'dark';
}

export function BetaWelcomeV2({ theme }: BetaWelcomeV2Props) {
  const containerBg = theme === 'dark' ? '#0a0e17' : '#f1f5f9';
  const emailBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  
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
                headline="Welcome to the Forge"
                subheadline="You've secured your spot in the future of pattern design"
              />
              
              <EmailBodyV2 theme={theme}>
                <p style={{ margin: '0 0 20px 0' }}>
                  <strong style={{ color: theme === 'dark' ? '#ffffff' : '#0f172a' }}>You're in.</strong> BlanketSmith is currently in limited Beta, and you've secured a front-row seat to the future of pattern design.
                </p>
                <p style={{ margin: 0 }}>
                  We're building something special for makers who demand precision and creators who appreciate elegant tools. Your early access means you'll shape what we become.
                </p>
              </EmailBodyV2>
              
              <EmailCardV2 theme={theme} title="What Happens Next" icon="🔮">
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Beta invites roll out in small batches</li>
                  <li style={{ marginBottom: '8px' }}>Priority access based on signup order</li>
                  <li>Exclusive community Discord channel</li>
                </ul>
              </EmailCardV2>
              
              <EmailCTAV2 
                theme={theme}
                text="Visit BlanketSmith"
                href="https://blanketsmith.com"
              />
              
              <EmailFooterV2 theme={theme} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function getBetaWelcomeV2HTML(theme: 'light' | 'dark'): string {
  const containerBg = theme === 'dark' ? '#0a0e17' : '#f1f5f9';
  const emailBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const logoUrl = theme === 'dark' 
    ? 'https://blanketsmith.com/assets/horizontal-logo-white.svg'
    : 'https://blanketsmith.com/assets/logo-horizontal.svg';
  const textColor = theme === 'dark' ? '#e2e8f0' : '#1e293b';
  const strongColor = theme === 'dark' ? '#ffffff' : '#0f172a';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to BlanketSmith Beta</title>
  <!--[if mso]>
  <style type="text/css">
    table { border-collapse: collapse; }
    .button { padding: 14px 36px !important; }
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: ${containerBg}; font-family: 'Inter', Arial, sans-serif;">
  <div style="padding: 40px 20px;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 600px; margin: 0 auto; background-color: ${emailBg}; border-radius: 16px; overflow: hidden;">
      <tr>
        <td>
          ${getEmailHeaderV2HTML(theme, logoUrl)}
          ${getEmailHeroV2HTML(theme, "Welcome to the Forge", "You've secured your spot in the future of pattern design")}
          ${getEmailBodyV2HTML(theme, `
            <p style="margin: 0 0 20px 0;">
              <strong style="color: ${strongColor};">You're in.</strong> BlanketSmith is currently in limited Beta, and you've secured a front-row seat to the future of pattern design.
            </p>
            <p style="margin: 0;">
              We're building something special for makers who demand precision and creators who appreciate elegant tools. Your early access means you'll shape what we become.
            </p>
          `)}
          ${getEmailCardV2HTML(theme, "What Happens Next", `
            <ul style="margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Beta invites roll out in small batches</li>
              <li style="margin-bottom: 8px;">Priority access based on signup order</li>
              <li>Exclusive community Discord channel</li>
            </ul>
          `, "🔮")}
          ${getEmailCTAV2HTML(theme, "Visit BlanketSmith", "https://blanketsmith.com")}
          ${getEmailFooterV2HTML(theme, logoUrl)}
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}
