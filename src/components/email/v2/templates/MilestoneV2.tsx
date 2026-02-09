import { EmailHeaderV2, getEmailHeaderV2HTML } from "../EmailHeaderV2";
import { EmailFooterV2, getEmailFooterV2HTML } from "../EmailFooterV2";
import { EmailBodyV2, getEmailBodyV2HTML } from "../EmailBodyV2";
import { EmailCTAV2, getEmailCTAV2HTML } from "../EmailCTAV2";

interface MilestoneV2Props {
  theme: 'light' | 'dark';
}

export function MilestoneV2({ theme }: MilestoneV2Props) {
  const containerBg = theme === 'dark' ? '#0a0e17' : '#f1f5f9';
  const emailBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const badgeBg = theme === 'dark' ? 'rgba(124, 42, 232, 0.2)' : 'rgba(124, 42, 232, 0.1)';
  const headlineColor = theme === 'dark' ? '#ffffff' : '#0f172a';
  const textColor = theme === 'dark' ? '#cbd5e1' : '#475569';
  
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
              
              {/* Achievement Hero */}
              <table width="100%" cellPadding="0" cellSpacing="0" role="presentation" style={{ backgroundColor: emailBg }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '48px 32px 32px', textAlign: 'center' }}>
                      {/* Badge */}
                      <div style={{
                        display: 'inline-block',
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: badgeBg,
                        marginBottom: '24px',
                        lineHeight: '80px',
                        fontSize: '40px'
                      }}>
                        🏆
                      </div>
                      
                      <h1 style={{ 
                        fontFamily: "'Poppins', 'Inter', sans-serif",
                        fontSize: '26px',
                        fontWeight: 700,
                        color: headlineColor,
                        margin: '0 0 8px 0',
                        lineHeight: 1.3
                      }}>
                        First Pattern Exported!
                      </h1>
                      <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '16px',
                        color: textColor,
                        margin: 0
                      }}>
                        You've unlocked a milestone achievement
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <EmailBodyV2 theme={theme}>
                <p style={{ margin: '0 0 20px 0' }}>
                  <strong style={{ color: headlineColor }}>Congratulations!</strong> You've just exported your first pattern from BlanketSmith. This is a huge milestone in your crafting journey.
                </p>
                <p style={{ margin: 0 }}>
                  Every masterpiece starts with a single step, and you've taken yours. We can't wait to see what you create next.
                </p>
              </EmailBodyV2>
              
              {/* Stats Row */}
              <table width="100%" cellPadding="0" cellSpacing="0" role="presentation" style={{ backgroundColor: emailBg }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '0 32px 32px' }}>
                      <table width="100%" cellPadding="0" cellSpacing="0" role="presentation">
                        <tbody>
                          <tr>
                            <td style={{
                              backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.8)',
                              borderRadius: '12px',
                              padding: '20px',
                              textAlign: 'center',
                              width: '33%'
                            }}>
                              <p style={{ 
                                margin: 0,
                                fontSize: '24px',
                                fontWeight: 700,
                                fontFamily: "'Poppins', sans-serif",
                                color: '#7C2AE8'
                              }}>1</p>
                              <p style={{ 
                                margin: '4px 0 0 0',
                                fontSize: '12px',
                                color: textColor,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                              }}>Pattern</p>
                            </td>
                            <td style={{ width: '12px' }}></td>
                            <td style={{
                              backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.8)',
                              borderRadius: '12px',
                              padding: '20px',
                              textAlign: 'center',
                              width: '33%'
                            }}>
                              <p style={{ 
                                margin: 0,
                                fontSize: '24px',
                                fontWeight: 700,
                                fontFamily: "'Poppins', sans-serif",
                                color: '#14C8F5'
                              }}>🎖️</p>
                              <p style={{ 
                                margin: '4px 0 0 0',
                                fontSize: '12px',
                                color: textColor,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                              }}>Badge</p>
                            </td>
                            <td style={{ width: '12px' }}></td>
                            <td style={{
                              backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.8)',
                              borderRadius: '12px',
                              padding: '20px',
                              textAlign: 'center',
                              width: '33%'
                            }}>
                              <p style={{ 
                                margin: 0,
                                fontSize: '24px',
                                fontWeight: 700,
                                fontFamily: "'Poppins', sans-serif",
                                color: '#374FD9'
                              }}>∞</p>
                              <p style={{ 
                                margin: '4px 0 0 0',
                                fontSize: '12px',
                                color: textColor,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                              }}>Possibilities</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <EmailCTAV2 
                theme={theme}
                text="Create Another Pattern"
                href="https://blanketsmith.com/app"
              />
              
              <EmailFooterV2 theme={theme} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function getMilestoneV2HTML(theme: 'light' | 'dark'): string {
  const containerBg = theme === 'dark' ? '#0a0e17' : '#f1f5f9';
  const emailBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const logoUrl = theme === 'dark' 
    ? 'https://blanketsmith.com/assets/horizontal-logo-white.svg'
    : 'https://blanketsmith.com/assets/logo-horizontal.svg';
  const badgeBg = theme === 'dark' ? 'rgba(124, 42, 232, 0.2)' : 'rgba(124, 42, 232, 0.1)';
  const headlineColor = theme === 'dark' ? '#ffffff' : '#0f172a';
  const textColor = theme === 'dark' ? '#cbd5e1' : '#475569';
  const statBg = theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.8)';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Milestone Achievement - BlanketSmith</title>
</head>
<body style="margin: 0; padding: 0; background-color: ${containerBg}; font-family: 'Inter', Arial, sans-serif;">
  <div style="padding: 40px 20px;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 600px; margin: 0 auto; background-color: ${emailBg}; border-radius: 16px; overflow: hidden;">
      <tr>
        <td>
          ${getEmailHeaderV2HTML(theme, logoUrl)}
          
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${emailBg};">
            <tr>
              <td style="padding: 48px 32px 32px; text-align: center;">
                <div style="display: inline-block; width: 80px; height: 80px; border-radius: 50%; background-color: ${badgeBg}; margin-bottom: 24px; line-height: 80px; font-size: 40px;">🏆</div>
                <h1 style="font-family: 'Poppins', 'Inter', sans-serif; font-size: 26px; font-weight: 700; color: ${headlineColor}; margin: 0 0 8px 0; line-height: 1.3;">First Pattern Exported!</h1>
                <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: ${textColor}; margin: 0;">You've unlocked a milestone achievement</p>
              </td>
            </tr>
          </table>
          
          ${getEmailBodyV2HTML(theme, `
            <p style="margin: 0 0 20px 0;">
              <strong style="color: ${headlineColor};">Congratulations!</strong> You've just exported your first pattern from BlanketSmith. This is a huge milestone in your crafting journey.
            </p>
            <p style="margin: 0;">
              Every masterpiece starts with a single step, and you've taken yours. We can't wait to see what you create next.
            </p>
          `)}
          
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${emailBg};">
            <tr>
              <td style="padding: 0 32px 32px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background-color: ${statBg}; border-radius: 12px; padding: 20px; text-align: center; width: 30%;">
                      <p style="margin: 0; font-size: 24px; font-weight: 700; color: #7C2AE8;">1</p>
                      <p style="margin: 4px 0 0 0; font-size: 12px; color: ${textColor}; text-transform: uppercase;">Pattern</p>
                    </td>
                    <td style="width: 5%;"></td>
                    <td style="background-color: ${statBg}; border-radius: 12px; padding: 20px; text-align: center; width: 30%;">
                      <p style="margin: 0; font-size: 24px;">🎖️</p>
                      <p style="margin: 4px 0 0 0; font-size: 12px; color: ${textColor}; text-transform: uppercase;">Badge</p>
                    </td>
                    <td style="width: 5%;"></td>
                    <td style="background-color: ${statBg}; border-radius: 12px; padding: 20px; text-align: center; width: 30%;">
                      <p style="margin: 0; font-size: 24px; font-weight: 700; color: #374FD9;">∞</p>
                      <p style="margin: 4px 0 0 0; font-size: 12px; color: ${textColor}; text-transform: uppercase;">Possibilities</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          
          ${getEmailCTAV2HTML(theme, "Create Another Pattern", "https://blanketsmith.com/app")}
          ${getEmailFooterV2HTML(theme, logoUrl)}
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}
