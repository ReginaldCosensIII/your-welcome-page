import { EmailHeader, getEmailHeaderHTML } from "../EmailHeader";
import { EmailHero, getEmailHeroHTML } from "../EmailHero";
import { EmailBodyText, getEmailBodyTextHTML } from "../EmailBodyText";
import { EmailFeatureCard, getEmailFeatureCardHTML } from "../EmailFeatureCard";
import { EmailCTAButton, getEmailCTAButtonHTML } from "../EmailCTAButton";
import { EmailFooter, getEmailFooterHTML } from "../EmailFooter";
import { Sparkles, Wrench, Bug } from "lucide-react";

interface EmailTemplateProps {
  theme: 'light' | 'dark';
}

export function BetaUpdateTemplate({ theme }: EmailTemplateProps) {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const innerBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const versionBg = theme === 'dark' ? '#1e293b' : '#e2e8f0';
  const versionColor = theme === 'dark' ? '#a5b4fc' : '#6366f1';
  
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
                headline="What's New in the Forge"
                subheadline="Your weekly beta update with new features, improvements, and bug fixes."
              />
              
              {/* Version Badge */}
              <table width="100%" cellPadding="0" cellSpacing="0" role="presentation" style={{ backgroundColor: innerBg }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '0 32px 16px', textAlign: 'center' }}>
                      <span style={{
                        display: 'inline-block',
                        backgroundColor: versionBg,
                        color: versionColor,
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '14px',
                        fontWeight: 600,
                        padding: '8px 16px',
                        borderRadius: '20px'
                      }}>
                        {"v{{version_number}} · {{release_date}}"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <EmailBodyText theme={theme}>
                <p style={{ margin: '0 0 16px 0' }}>
                  Hi <strong>{"{{user_name}}"}</strong>,
                </p>
                <p style={{ margin: '0 0 24px 0' }}>
                  We've been busy in the Forge! Here's what's new in this week's update:
                </p>
              </EmailBodyText>
              
              {/* Update Cards */}
              <table width="100%" cellPadding="0" cellSpacing="0" role="presentation" style={{ backgroundColor: innerBg }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '0 32px 24px' }}>
                      <table width="100%" cellPadding="0" cellSpacing="16" role="presentation">
                        <tbody>
                          <tr>
                            <td style={{ verticalAlign: 'top' }}>
                              <EmailFeatureCard 
                                theme={theme}
                                icon={Sparkles}
                                title="New Features"
                                description="{{new_features_summary}}"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td style={{ verticalAlign: 'top' }}>
                              <EmailFeatureCard 
                                theme={theme}
                                icon={Wrench}
                                title="Improvements"
                                description="{{improvements_summary}}"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td style={{ verticalAlign: 'top' }}>
                              <EmailFeatureCard 
                                theme={theme}
                                icon={Bug}
                                title="Bug Fixes"
                                description="{{bug_fixes_summary}}"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <EmailBodyText theme={theme}>
                <p style={{ margin: 0 }}>
                  <strong>Your feedback shapes these updates!</strong> If you encounter any issues or have suggestions, we'd love to hear from you.
                </p>
              </EmailBodyText>
              <EmailCTAButton 
                theme={theme}
                text="Read Full Changelog"
                href="https://blanketsmith.com/changelog"
              />
              <EmailFooter theme={theme} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function getBetaUpdateHTML(theme: 'light' | 'dark'): string {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const innerBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const versionBg = theme === 'dark' ? '#1e293b' : '#e2e8f0';
  const versionColor = theme === 'dark' ? '#a5b4fc' : '#6366f1';
  const shadow = theme === 'dark' 
    ? '0 25px 50px -12px rgba(0,0,0,0.5)' 
    : '0 25px 50px -12px rgba(0,0,0,0.15)';

  const logoUrl = theme === 'dark' 
    ? 'https://blanketsmith.com/vertical-logo-white.png' 
    : 'https://blanketsmith.com/vertical-logo.png';
  const footerLogoUrl = theme === 'dark' 
    ? 'https://blanketsmith.com/horizontal-logo-white.png' 
    : 'https://blanketsmith.com/horizontal-logo.png';

  const versionBadgeHTML = `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${innerBg};">
  <tr>
    <td style="padding: 0 32px 16px; text-align: center;">
      <span style="display: inline-block; background-color: ${versionBg}; color: ${versionColor}; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; padding: 8px 16px; border-radius: 20px;">
        v{{version_number}} · {{release_date}}
      </span>
    </td>
  </tr>
</table>`;

  const updateCardsHTML = `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${innerBg};">
  <tr>
    <td style="padding: 0 32px 24px;">
      <table width="100%" cellpadding="0" cellspacing="16" role="presentation">
        <tr>
          <td style="vertical-align: top;">
            ${getEmailFeatureCardHTML(theme, '✨', 'New Features', '{{new_features_summary}}')}
          </td>
        </tr>
        <tr>
          <td style="vertical-align: top;">
            ${getEmailFeatureCardHTML(theme, '🔧', 'Improvements', '{{improvements_summary}}')}
          </td>
        </tr>
        <tr>
          <td style="vertical-align: top;">
            ${getEmailFeatureCardHTML(theme, '🐛', 'Bug Fixes', '{{bug_fixes_summary}}')}
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>What's New in the Forge - BlanketSmith</title>
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
          ${getEmailHeroHTML(theme, "What's New in the Forge", "Your weekly beta update with new features, improvements, and bug fixes.")}
          ${versionBadgeHTML}
          ${getEmailBodyTextHTML(theme, `
            <p style="margin: 0 0 16px 0;">Hi <strong>{{user_name}}</strong>,</p>
            <p style="margin: 0 0 24px 0;">We've been busy in the Forge! Here's what's new in this week's update:</p>
          `)}
          ${updateCardsHTML}
          ${getEmailBodyTextHTML(theme, `
            <p style="margin: 0;"><strong>Your feedback shapes these updates!</strong> If you encounter any issues or have suggestions, we'd love to hear from you.</p>
          `)}
          ${getEmailCTAButtonHTML(theme, 'Read Full Changelog', 'https://blanketsmith.com/changelog')}
          ${getEmailFooterHTML(theme, footerLogoUrl)}
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}
