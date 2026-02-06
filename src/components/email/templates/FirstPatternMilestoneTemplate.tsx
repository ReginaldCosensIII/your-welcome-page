import { EmailHeader, getEmailHeaderHTML } from "../EmailHeader";
import { EmailHero, getEmailHeroHTML } from "../EmailHero";
import { EmailBodyText, getEmailBodyTextHTML } from "../EmailBodyText";
import { EmailCTAButton, getEmailCTAButtonHTML } from "../EmailCTAButton";
import { EmailFooter, getEmailFooterHTML } from "../EmailFooter";

interface EmailTemplateProps {
  theme: 'light' | 'dark';
}

export function FirstPatternMilestoneTemplate({ theme }: EmailTemplateProps) {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const innerBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const celebrationBg = theme === 'dark' 
    ? 'linear-gradient(135deg, rgba(124, 42, 232, 0.15) 0%, rgba(20, 200, 245, 0.15) 100%)'
    : 'linear-gradient(135deg, rgba(124, 42, 232, 0.1) 0%, rgba(20, 200, 245, 0.1) 100%)';
  const badgeBg = 'linear-gradient(45deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%)';
  
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
                headline="🎉 Your First Pattern!"
                subheadline="Congratulations! You've just exported your very first pattern from the Forge."
              />
              
              {/* Celebration Section */}
              <table width="100%" cellPadding="0" cellSpacing="0" role="presentation" style={{ backgroundColor: innerBg }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '0 32px 24px' }}>
                      <div style={{
                        background: celebrationBg,
                        borderRadius: '16px',
                        padding: '32px',
                        textAlign: 'center',
                        border: theme === 'dark' 
                          ? '1px solid rgba(124, 42, 232, 0.3)' 
                          : '1px solid rgba(124, 42, 232, 0.2)'
                      }}>
                        {/* Achievement Badge */}
                        <div style={{
                          display: 'inline-block',
                          background: badgeBg,
                          borderRadius: '50%',
                          width: '80px',
                          height: '80px',
                          lineHeight: '80px',
                          fontSize: '36px',
                          marginBottom: '16px'
                        }}>
                          🏆
                        </div>
                        <p style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: '24px',
                          fontWeight: 700,
                          background: badgeBg,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          margin: '0 0 8px 0'
                        }}>
                          Pattern Pioneer
                        </p>
                        <p style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '14px',
                          color: theme === 'dark' ? '#94a3b8' : '#64748b',
                          margin: 0
                        }}>
                          Achievement Unlocked
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <EmailBodyText theme={theme}>
                <p style={{ margin: '0 0 16px 0' }}>
                  Hi <strong>{"{{user_name}}"}</strong>,
                </p>
                <p style={{ margin: '0 0 16px 0' }}>
                  This is a huge milestone! You've just created and exported your first pattern using BlanketSmith. You're officially a Pattern Pioneer.
                </p>
                <p style={{ margin: '0 0 16px 0' }}>
                  <strong>Pattern Details:</strong>
                </p>
                <ul style={{ margin: '0 0 16px 0', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Pattern Name: {"{{pattern_name}}"}</li>
                  <li style={{ marginBottom: '8px' }}>Type: {"{{pattern_type}}"}</li>
                  <li style={{ marginBottom: '8px' }}>Export Format: {"{{export_format}}"}</li>
                  <li>Created: {"{{creation_date}}"}</li>
                </ul>
                <p style={{ margin: 0 }}>
                  Keep exploring the Forge! Your next milestone awaits at 5 patterns. Happy crafting!
                </p>
              </EmailBodyText>
              <EmailCTAButton 
                theme={theme}
                text="Create Another Pattern"
                href="https://blanketsmith.com/forge"
              />
              <EmailFooter theme={theme} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function getFirstPatternMilestoneHTML(theme: 'light' | 'dark'): string {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const innerBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const celebrationBg = theme === 'dark' 
    ? 'linear-gradient(135deg, rgba(124, 42, 232, 0.15) 0%, rgba(20, 200, 245, 0.15) 100%)'
    : 'linear-gradient(135deg, rgba(124, 42, 232, 0.1) 0%, rgba(20, 200, 245, 0.1) 100%)';
  const celebrationBorder = theme === 'dark' 
    ? '1px solid rgba(124, 42, 232, 0.3)' 
    : '1px solid rgba(124, 42, 232, 0.2)';
  const badgeBg = 'linear-gradient(45deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%)';
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

  const celebrationHTML = `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${innerBg};">
  <tr>
    <td style="padding: 0 32px 24px;">
      <div style="background: ${celebrationBg}; border-radius: 16px; padding: 32px; text-align: center; border: ${celebrationBorder};">
        <div style="display: inline-block; background: ${badgeBg}; border-radius: 50%; width: 80px; height: 80px; line-height: 80px; font-size: 36px; margin-bottom: 16px;">
          🏆
        </div>
        <p style="font-family: 'Poppins', sans-serif; font-size: 24px; font-weight: 700; color: #7C2AE8; margin: 0 0 8px 0;">
          Pattern Pioneer
        </p>
        <p style="font-family: 'Inter', sans-serif; font-size: 14px; color: ${mutedColor}; margin: 0;">
          Achievement Unlocked
        </p>
      </div>
    </td>
  </tr>
</table>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Your First Pattern - BlanketSmith</title>
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
          ${getEmailHeroHTML(theme, "🎉 Your First Pattern!", "Congratulations! You've just exported your very first pattern from the Forge.")}
          ${celebrationHTML}
          ${getEmailBodyTextHTML(theme, `
            <p style="margin: 0 0 16px 0;">Hi <strong>{{user_name}}</strong>,</p>
            <p style="margin: 0 0 16px 0;">This is a huge milestone! You've just created and exported your first pattern using BlanketSmith. You're officially a Pattern Pioneer.</p>
            <p style="margin: 0 0 16px 0;"><strong>Pattern Details:</strong></p>
            <ul style="margin: 0 0 16px 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Pattern Name: {{pattern_name}}</li>
              <li style="margin-bottom: 8px;">Type: {{pattern_type}}</li>
              <li style="margin-bottom: 8px;">Export Format: {{export_format}}</li>
              <li>Created: {{creation_date}}</li>
            </ul>
            <p style="margin: 0;">Keep exploring the Forge! Your next milestone awaits at 5 patterns. Happy crafting!</p>
          `)}
          ${getEmailCTAButtonHTML(theme, 'Create Another Pattern', 'https://blanketsmith.com/forge')}
          ${getEmailFooterHTML(theme, footerLogoUrl)}
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}
