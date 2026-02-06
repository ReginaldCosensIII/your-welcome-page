import { EmailHeader, getEmailHeaderHTML } from "../EmailHeader";
import { EmailHero, getEmailHeroHTML } from "../EmailHero";
import { EmailBodyText, getEmailBodyTextHTML } from "../EmailBodyText";
import { EmailCTAButton, getEmailCTAButtonHTML } from "../EmailCTAButton";
import { EmailFooter, getEmailFooterHTML } from "../EmailFooter";

interface EmailTemplateProps {
  theme: 'light' | 'dark';
}

// Beta milestone achievements configuration
const milestones = {
  '5_patterns': { 
    emoji: '⭐', 
    title: 'Rising Star', 
    description: "You've created 5 patterns!" 
  },
  '10_patterns': { 
    emoji: '🌟', 
    title: 'Pattern Master', 
    description: "10 patterns and counting!" 
  },
  '25_patterns': { 
    emoji: '💫', 
    title: 'Forge Legend', 
    description: "25 patterns created - incredible!" 
  },
  'first_share': { 
    emoji: '🤝', 
    title: 'Community Builder', 
    description: "You shared your first pattern!" 
  },
  'week_streak': { 
    emoji: '🔥', 
    title: 'Weekly Warrior', 
    description: "7-day crafting streak!" 
  },
  'beta_feedback': { 
    emoji: '💬', 
    title: 'Feedback Champion', 
    description: "Thanks for your valuable feedback!" 
  }
};

export function BetaMilestoneTemplate({ theme }: EmailTemplateProps) {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const innerBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const cardBg = theme === 'dark' ? '#1e293b' : '#f8fafc';
  const cardBorder = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  
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
                headline="🏆 Achievement Unlocked!"
                subheadline="You've reached a new milestone in your BlanketSmith journey."
              />
              
              {/* Achievement Card */}
              <table width="100%" cellPadding="0" cellSpacing="0" role="presentation" style={{ backgroundColor: innerBg }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '0 32px 24px' }}>
                      <div style={{
                        backgroundColor: cardBg,
                        borderRadius: '16px',
                        padding: '32px',
                        textAlign: 'center',
                        border: `1px solid ${cardBorder}`
                      }}>
                        <div style={{
                          fontSize: '64px',
                          marginBottom: '16px'
                        }}>
                          {"{{milestone_emoji}}"}
                        </div>
                        <p style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: '28px',
                          fontWeight: 700,
                          color: theme === 'dark' ? '#f1f5f9' : '#0f172a',
                          margin: '0 0 8px 0'
                        }}>
                          {"{{milestone_title}}"}
                        </p>
                        <p style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '16px',
                          color: theme === 'dark' ? '#94a3b8' : '#64748b',
                          margin: 0
                        }}>
                          {"{{milestone_description}}"}
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
                  Your dedication to crafting is inspiring! As a beta tester, every pattern you create and every feature you explore helps us shape the future of BlanketSmith.
                </p>
                <p style={{ margin: '0 0 16px 0' }}>
                  <strong>Your Beta Stats:</strong>
                </p>
                <ul style={{ margin: '0 0 16px 0', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Patterns Created: {"{{patterns_count}}"}</li>
                  <li style={{ marginBottom: '8px' }}>Patterns Shared: {"{{shared_count}}"}</li>
                  <li style={{ marginBottom: '8px' }}>Days Active: {"{{days_active}}"}</li>
                  <li>Feedback Submitted: {"{{feedback_count}}"}</li>
                </ul>
                <p style={{ margin: 0 }}>
                  Keep up the amazing work! Your next achievement is just around the corner.
                </p>
              </EmailBodyText>
              <EmailCTAButton 
                theme={theme}
                text="View All Achievements"
                href="https://blanketsmith.com/achievements"
              />
              <EmailFooter theme={theme} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function getBetaMilestoneHTML(theme: 'light' | 'dark'): string {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const innerBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const cardBg = theme === 'dark' ? '#1e293b' : '#f8fafc';
  const cardBorder = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  const textColor = theme === 'dark' ? '#f1f5f9' : '#0f172a';
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

  const achievementCardHTML = `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${innerBg};">
  <tr>
    <td style="padding: 0 32px 24px;">
      <div style="background-color: ${cardBg}; border-radius: 16px; padding: 32px; text-align: center; border: 1px solid ${cardBorder};">
        <div style="font-size: 64px; margin-bottom: 16px;">
          {{milestone_emoji}}
        </div>
        <p style="font-family: 'Poppins', sans-serif; font-size: 28px; font-weight: 700; color: ${textColor}; margin: 0 0 8px 0;">
          {{milestone_title}}
        </p>
        <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: ${mutedColor}; margin: 0;">
          {{milestone_description}}
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
  <title>Achievement Unlocked - BlanketSmith</title>
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
          ${getEmailHeroHTML(theme, "🏆 Achievement Unlocked!", "You've reached a new milestone in your BlanketSmith journey.")}
          ${achievementCardHTML}
          ${getEmailBodyTextHTML(theme, `
            <p style="margin: 0 0 16px 0;">Hi <strong>{{user_name}}</strong>,</p>
            <p style="margin: 0 0 16px 0;">Your dedication to crafting is inspiring! As a beta tester, every pattern you create and every feature you explore helps us shape the future of BlanketSmith.</p>
            <p style="margin: 0 0 16px 0;"><strong>Your Beta Stats:</strong></p>
            <ul style="margin: 0 0 16px 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Patterns Created: {{patterns_count}}</li>
              <li style="margin-bottom: 8px;">Patterns Shared: {{shared_count}}</li>
              <li style="margin-bottom: 8px;">Days Active: {{days_active}}</li>
              <li>Feedback Submitted: {{feedback_count}}</li>
            </ul>
            <p style="margin: 0;">Keep up the amazing work! Your next achievement is just around the corner.</p>
          `)}
          ${getEmailCTAButtonHTML(theme, 'View All Achievements', 'https://blanketsmith.com/achievements')}
          ${getEmailFooterHTML(theme, footerLogoUrl)}
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}
