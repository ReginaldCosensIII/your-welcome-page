import { EmailHeader, getEmailHeaderHTML } from "../EmailHeader";
import { EmailHero, getEmailHeroHTML } from "../EmailHero";
import { EmailBodyText, getEmailBodyTextHTML } from "../EmailBodyText";
import { EmailCTAButton, getEmailCTAButtonHTML } from "../EmailCTAButton";
import { EmailFooter, getEmailFooterHTML } from "../EmailFooter";

interface EmailTemplateProps {
  theme: 'light' | 'dark';
}

export function PartnershipInquiryTemplate({ theme }: EmailTemplateProps) {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  
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
                headline="Let's Build the Future of Craft"
                subheadline="Thank you for reaching out about a potential partnership."
              />
              <EmailBodyText theme={theme}>
                <p style={{ margin: '0 0 16px 0' }}>
                  Dear <strong>{"{{partner_name}}"}</strong>,
                </p>
                <p style={{ margin: '0 0 16px 0' }}>
                  Thank you for your interest in partnering with BlanketSmith. We sit at the intersection of craftsmanship and modern software, and we're always looking for partners who share our vision of empowering the maker community.
                </p>
                <p style={{ margin: '0 0 16px 0' }}>
                  We've received your inquiry and our partnerships team is reviewing it with great interest. You can expect to hear back from us within 3-5 business days.
                </p>
                <p style={{ margin: '0 0 16px 0' }}>
                  <strong>Your inquiry details:</strong>
                </p>
                <ul style={{ margin: '0 0 16px 0', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Organization: {"{{organization_name}}"}</li>
                  <li style={{ marginBottom: '8px' }}>Partnership Type: {"{{partnership_type}}"}</li>
                  <li>Submitted: {"{{submission_date}}"}</li>
                </ul>
                <p style={{ margin: 0 }}>
                  In the meantime, feel free to explore our platform and see what we're building for the crafting community.
                </p>
              </EmailBodyText>
              <EmailCTAButton 
                theme={theme}
                text="Explore BlanketSmith"
                href="https://blanketsmith.com"
              />
              <EmailFooter theme={theme} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function getPartnershipInquiryHTML(theme: 'light' | 'dark'): string {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const shadow = theme === 'dark' 
    ? '0 25px 50px -12px rgba(0,0,0,0.5)' 
    : '0 25px 50px -12px rgba(0,0,0,0.15)';

  const logoUrl = 'https://blanketsmith.com/logo-horizontal.png';
  const badgeUrl = 'https://blanketsmith.com/logo-badge.png';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Partnership Inquiry Received - BlanketSmith</title>
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
          ${getEmailHeroHTML(theme, "Let's Build the Future of Craft", "Thank you for reaching out about a potential partnership.")}
          ${getEmailBodyTextHTML(theme, `
            <p style="margin: 0 0 16px 0;">Dear <strong>{{partner_name}}</strong>,</p>
            <p style="margin: 0 0 16px 0;">Thank you for your interest in partnering with BlanketSmith. We sit at the intersection of craftsmanship and modern software, and we're always looking for partners who share our vision of empowering the maker community.</p>
            <p style="margin: 0 0 16px 0;">We've received your inquiry and our partnerships team is reviewing it with great interest. You can expect to hear back from us within 3-5 business days.</p>
            <p style="margin: 0 0 16px 0;"><strong>Your inquiry details:</strong></p>
            <ul style="margin: 0 0 16px 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Organization: {{organization_name}}</li>
              <li style="margin-bottom: 8px;">Partnership Type: {{partnership_type}}</li>
              <li>Submitted: {{submission_date}}</li>
            </ul>
            <p style="margin: 0;">In the meantime, feel free to explore our platform and see what we're building for the crafting community.</p>
          `)}
          ${getEmailCTAButtonHTML(theme, 'Explore BlanketSmith', 'https://blanketsmith.com')}
          ${getEmailFooterHTML(theme, badgeUrl)}
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}
