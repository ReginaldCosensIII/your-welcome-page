import { EmailHeader, getEmailHeaderHTML } from "../EmailHeader";
import { EmailHero, getEmailHeroHTML } from "../EmailHero";
import { EmailProgressRail, getEmailProgressRailHTML } from "../EmailProgressRail";
import { EmailBodyText, getEmailBodyTextHTML } from "../EmailBodyText";
import { EmailFeatureCard, getEmailFeatureCardHTML } from "../EmailFeatureCard";
import { EmailCTAButton, getEmailCTAButtonHTML } from "../EmailCTAButton";
import { EmailFooter, getEmailFooterHTML } from "../EmailFooter";
import { Sparkles, Palette, Users, Zap } from "lucide-react";

interface EmailTemplateProps {
  theme: 'light' | 'dark';
}

export function BetaWelcomeTemplate({ theme }: EmailTemplateProps) {
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
                headline="Welcome to the Forge"
                subheadline="You're in. BlanketSmith is currently in a limited Beta, and you've secured a front-row seat to the future of pattern design."
              />
              <EmailProgressRail theme={theme} currentStep={3} />
              <EmailBodyText theme={theme}>
                <p style={{ margin: '0 0 16px 0' }}>
                  <strong>What happens next?</strong>
                </p>
                <p style={{ margin: '0 0 16px 0' }}>
                  Our team is carefully onboarding beta testers in waves to ensure the best possible experience. You'll receive your access credentials within the next 48 hours.
                </p>
                <p style={{ margin: 0 }}>
                  In the meantime, here's what you can expect from BlanketSmith:
                </p>
              </EmailBodyText>
              
              {/* Feature Cards */}
              <table width="100%" cellPadding="0" cellSpacing="0" role="presentation" style={{ backgroundColor: theme === 'dark' ? '#0f172a' : '#ffffff' }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '0 32px 24px' }}>
                      <table width="100%" cellPadding="0" cellSpacing="16" role="presentation">
                        <tbody>
                          <tr>
                            <td width="50%" style={{ verticalAlign: 'top' }}>
                              <EmailFeatureCard 
                                theme={theme}
                                icon={Sparkles}
                                title="AI-Powered Patterns"
                                description="Generate custom knitting and crochet patterns with precision."
                              />
                            </td>
                            <td width="50%" style={{ verticalAlign: 'top' }}>
                              <EmailFeatureCard 
                                theme={theme}
                                icon={Palette}
                                title="Color Management"
                                description="Visualize your projects with our advanced color palette tools."
                              />
                            </td>
                          </tr>
                          <tr>
                            <td width="50%" style={{ verticalAlign: 'top' }}>
                              <EmailFeatureCard 
                                theme={theme}
                                icon={Users}
                                title="Community Patterns"
                                description="Share and discover patterns from makers around the world."
                              />
                            </td>
                            <td width="50%" style={{ verticalAlign: 'top' }}>
                              <EmailFeatureCard 
                                theme={theme}
                                icon={Zap}
                                title="Real-Time Preview"
                                description="See your pattern come to life as you design."
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <EmailCTAButton 
                theme={theme}
                text="View Your Dashboard"
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

export function getBetaWelcomeHTML(theme: 'light' | 'dark'): string {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const innerBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const shadow = theme === 'dark' 
    ? '0 25px 50px -12px rgba(0,0,0,0.5)' 
    : '0 25px 50px -12px rgba(0,0,0,0.15)';

  const logoUrl = 'https://blanketsmith.com/logo-horizontal.png';
  const badgeUrl = 'https://blanketsmith.com/logo-badge.png';

  const featuresHTML = `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${innerBg};">
  <tr>
    <td style="padding: 0 32px 24px;">
      <table width="100%" cellpadding="0" cellspacing="16" role="presentation">
        <tr>
          <td width="50%" style="vertical-align: top;">
            ${getEmailFeatureCardHTML(theme, '✨', 'AI-Powered Patterns', 'Generate custom knitting and crochet patterns with precision.')}
          </td>
          <td width="50%" style="vertical-align: top;">
            ${getEmailFeatureCardHTML(theme, '🎨', 'Color Management', 'Visualize your projects with our advanced color palette tools.')}
          </td>
        </tr>
        <tr>
          <td width="50%" style="vertical-align: top;">
            ${getEmailFeatureCardHTML(theme, '👥', 'Community Patterns', 'Share and discover patterns from makers around the world.')}
          </td>
          <td width="50%" style="vertical-align: top;">
            ${getEmailFeatureCardHTML(theme, '⚡', 'Real-Time Preview', 'See your pattern come to life as you design.')}
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
  <title>Welcome to BlanketSmith Beta</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
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
          ${getEmailHeroHTML(theme, 'Welcome to the Forge', "You're in. BlanketSmith is currently in a limited Beta, and you've secured a front-row seat to the future of pattern design.")}
          ${getEmailProgressRailHTML(theme, 3)}
          ${getEmailBodyTextHTML(theme, `
            <p style="margin: 0 0 16px 0;"><strong>What happens next?</strong></p>
            <p style="margin: 0 0 16px 0;">Our team is carefully onboarding beta testers in waves to ensure the best possible experience. You'll receive your access credentials within the next 48 hours.</p>
            <p style="margin: 0;">In the meantime, here's what you can expect from BlanketSmith:</p>
          `)}
          ${featuresHTML}
          ${getEmailCTAButtonHTML(theme, 'View Your Dashboard', 'https://blanketsmith.com/dashboard')}
          ${getEmailFooterHTML(theme, badgeUrl)}
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}
