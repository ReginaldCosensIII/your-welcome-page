import { EmailHeader, getEmailHeaderHTML } from "../EmailHeader";
import { EmailHero, getEmailHeroHTML } from "../EmailHero";
import { EmailBodyText, getEmailBodyTextHTML } from "../EmailBodyText";
import { EmailCTAButton, getEmailCTAButtonHTML } from "../EmailCTAButton";
import { EmailFooter, getEmailFooterHTML } from "../EmailFooter";

interface EmailTemplateProps {
  theme: 'light' | 'dark';
}

export function FeedbackAcknowledgementTemplate({ theme }: EmailTemplateProps) {
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
                headline="Your Feedback is in the Forge"
                subheadline="Accuracy and craftsmanship matter deeply to us."
              />
              <EmailBodyText theme={theme}>
                <p style={{ margin: '0 0 16px 0' }}>
                  Hi <strong>{"{{user_name}}"}</strong>,
                </p>
                <p style={{ margin: '0 0 16px 0' }}>
                  Thank you for taking the time to share your thoughts with us. Your input is exactly how we evolve BlanketSmith into the tool that makers truly need.
                </p>
                <p style={{ margin: '0 0 16px 0' }}>
                  <strong>We received your feedback on:</strong> {"{{feedback_category}}"}
                </p>
                <div style={{ 
                  padding: '16px 20px',
                  backgroundColor: theme === 'dark' ? 'rgba(124, 42, 232, 0.1)' : 'rgba(124, 42, 232, 0.05)',
                  borderLeft: '4px solid #7C2AE8',
                  borderRadius: '0 8px 8px 0',
                  margin: '0 0 16px 0'
                }}>
                  <p style={{ margin: 0, fontStyle: 'italic' }}>
                    "{"{{feedback_excerpt}}"}..."
                  </p>
                </div>
                <p style={{ margin: '0 0 16px 0' }}>
                  Our team reviews every piece of feedback personally. If your suggestion requires follow-up, we'll be in touch within the next few days.
                </p>
                <p style={{ margin: 0 }}>
                  Thank you for being part of the BlanketSmith community and helping us forge a better future for pattern design.
                </p>
              </EmailBodyText>
              <EmailCTAButton 
                theme={theme}
                text="Continue Crafting"
                href="https://blanketsmith.com/dashboard"
              />
              <EmailFooter theme={theme} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function getFeedbackAcknowledgementHTML(theme: 'light' | 'dark'): string {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const shadow = theme === 'dark' 
    ? '0 25px 50px -12px rgba(0,0,0,0.5)' 
    : '0 25px 50px -12px rgba(0,0,0,0.15)';
  const quoteBg = theme === 'dark' ? 'rgba(124, 42, 232, 0.1)' : 'rgba(124, 42, 232, 0.05)';

  const logoUrl = 'https://blanketsmith.com/logo-horizontal.png';
  const badgeUrl = 'https://blanketsmith.com/logo-badge.png';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Feedback Received - BlanketSmith</title>
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
          ${getEmailHeroHTML(theme, "Your Feedback is in the Forge", "Accuracy and craftsmanship matter deeply to us.")}
          ${getEmailBodyTextHTML(theme, `
            <p style="margin: 0 0 16px 0;">Hi <strong>{{user_name}}</strong>,</p>
            <p style="margin: 0 0 16px 0;">Thank you for taking the time to share your thoughts with us. Your input is exactly how we evolve BlanketSmith into the tool that makers truly need.</p>
            <p style="margin: 0 0 16px 0;"><strong>We received your feedback on:</strong> {{feedback_category}}</p>
            <div style="padding: 16px 20px; background-color: ${quoteBg}; border-left: 4px solid #7C2AE8; border-radius: 0 8px 8px 0; margin: 0 0 16px 0;">
              <p style="margin: 0; font-style: italic;">"{{feedback_excerpt}}..."</p>
            </div>
            <p style="margin: 0 0 16px 0;">Our team reviews every piece of feedback personally. If your suggestion requires follow-up, we'll be in touch within the next few days.</p>
            <p style="margin: 0;">Thank you for being part of the BlanketSmith community and helping us forge a better future for pattern design.</p>
          `)}
          ${getEmailCTAButtonHTML(theme, 'Continue Crafting', 'https://blanketsmith.com/dashboard')}
          ${getEmailFooterHTML(theme, badgeUrl)}
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}
