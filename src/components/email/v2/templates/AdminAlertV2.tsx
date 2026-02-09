import { EmailHeaderV2, getEmailHeaderV2HTML } from "../EmailHeaderV2";
import { EmailFooterV2, getEmailFooterV2HTML } from "../EmailFooterV2";
import { EmailHeroV2, getEmailHeroV2HTML } from "../EmailHeroV2";

interface AdminAlertV2Props {
  theme: 'light' | 'dark';
}

export function AdminAlertV2({ theme }: AdminAlertV2Props) {
  const containerBg = theme === 'dark' ? '#0a0e17' : '#f1f5f9';
  const emailBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const tableBg = theme === 'dark' ? 'rgba(30, 41, 59, 0.4)' : 'rgba(241, 245, 249, 0.6)';
  const borderColor = theme === 'dark' ? 'rgba(148, 163, 184, 0.15)' : 'rgba(15, 23, 42, 0.1)';
  const labelColor = theme === 'dark' ? '#94a3b8' : '#64748b';
  const valueColor = theme === 'dark' ? '#f1f5f9' : '#0f172a';
  const alertBg = theme === 'dark' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.05)';
  const alertBorder = theme === 'dark' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(239, 68, 68, 0.3)';
  
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
              
              {/* Alert Banner */}
              <table width="100%" cellPadding="0" cellSpacing="0" role="presentation">
                <tbody>
                  <tr>
                    <td style={{ padding: '24px 32px 0' }}>
                      <div style={{
                        backgroundColor: alertBg,
                        border: `1px solid ${alertBorder}`,
                        borderRadius: '8px',
                        padding: '12px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <span style={{ fontSize: '18px' }}>⚠️</span>
                        <span style={{ 
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#ef4444'
                        }}>
                          New Form Submission Requires Attention
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <EmailHeroV2 
                theme={theme}
                headline="Admin Alert"
                subheadline="A new submission has been received"
              />
              
              {/* Data Table */}
              <table width="100%" cellPadding="0" cellSpacing="0" role="presentation" style={{ backgroundColor: emailBg }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '0 32px 32px' }}>
                      <table 
                        width="100%" 
                        cellPadding="0" 
                        cellSpacing="0"
                        style={{
                          backgroundColor: tableBg,
                          borderRadius: '12px',
                          border: `1px solid ${borderColor}`,
                          overflow: 'hidden'
                        }}
                      >
                        <tbody>
                          <tr>
                            <td style={{ 
                              padding: '16px 20px',
                              borderBottom: `1px solid ${borderColor}`,
                              width: '120px'
                            }}>
                              <span style={{ 
                                fontSize: '13px',
                                color: labelColor,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                fontWeight: 500
                              }}>Name</span>
                            </td>
                            <td style={{ 
                              padding: '16px 20px',
                              borderBottom: `1px solid ${borderColor}`
                            }}>
                              <span style={{ 
                                fontSize: '15px',
                                color: valueColor,
                                fontWeight: 500
                              }}>Jane Doe</span>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ 
                              padding: '16px 20px',
                              borderBottom: `1px solid ${borderColor}`
                            }}>
                              <span style={{ 
                                fontSize: '13px',
                                color: labelColor,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                fontWeight: 500
                              }}>Email</span>
                            </td>
                            <td style={{ 
                              padding: '16px 20px',
                              borderBottom: `1px solid ${borderColor}`
                            }}>
                              <span style={{ 
                                fontSize: '15px',
                                color: valueColor,
                                fontWeight: 500
                              }}>jane@example.com</span>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ 
                              padding: '16px 20px',
                              borderBottom: `1px solid ${borderColor}`
                            }}>
                              <span style={{ 
                                fontSize: '13px',
                                color: labelColor,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                fontWeight: 500
                              }}>Category</span>
                            </td>
                            <td style={{ 
                              padding: '16px 20px',
                              borderBottom: `1px solid ${borderColor}`
                            }}>
                              <span style={{
                                display: 'inline-block',
                                padding: '4px 12px',
                                backgroundColor: theme === 'dark' ? 'rgba(124, 42, 232, 0.2)' : 'rgba(124, 42, 232, 0.1)',
                                borderRadius: '20px',
                                fontSize: '13px',
                                color: '#a78bfa',
                                fontWeight: 500
                              }}>Partnership</span>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ 
                              padding: '16px 20px',
                              verticalAlign: 'top'
                            }}>
                              <span style={{ 
                                fontSize: '13px',
                                color: labelColor,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                fontWeight: 500
                              }}>Message</span>
                            </td>
                            <td style={{ 
                              padding: '16px 20px'
                            }}>
                              <span style={{ 
                                fontSize: '15px',
                                color: valueColor,
                                lineHeight: 1.6
                              }}>Interested in exploring a partnership opportunity for our fiber arts community platform...</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <EmailFooterV2 theme={theme} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function getAdminAlertV2HTML(theme: 'light' | 'dark'): string {
  const containerBg = theme === 'dark' ? '#0a0e17' : '#f1f5f9';
  const emailBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const logoUrl = theme === 'dark' 
    ? 'https://blanketsmith.com/assets/horizontal-logo-white.svg'
    : 'https://blanketsmith.com/assets/logo-horizontal.svg';
  const tableBg = theme === 'dark' ? 'rgba(30, 41, 59, 0.4)' : 'rgba(241, 245, 249, 0.6)';
  const borderColor = theme === 'dark' ? 'rgba(148, 163, 184, 0.15)' : 'rgba(15, 23, 42, 0.1)';
  const labelColor = theme === 'dark' ? '#94a3b8' : '#64748b';
  const valueColor = theme === 'dark' ? '#f1f5f9' : '#0f172a';
  const alertBg = theme === 'dark' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.05)';
  const alertBorder = theme === 'dark' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(239, 68, 68, 0.3)';
  const categoryBg = theme === 'dark' ? 'rgba(124, 42, 232, 0.2)' : 'rgba(124, 42, 232, 0.1)';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Alert - BlanketSmith</title>
</head>
<body style="margin: 0; padding: 0; background-color: ${containerBg}; font-family: 'Inter', Arial, sans-serif;">
  <div style="padding: 40px 20px;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 600px; margin: 0 auto; background-color: ${emailBg}; border-radius: 16px; overflow: hidden;">
      <tr>
        <td>
          ${getEmailHeaderV2HTML(theme, logoUrl)}
          
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding: 24px 32px 0;">
                <div style="background-color: ${alertBg}; border: 1px solid ${alertBorder}; border-radius: 8px; padding: 12px 16px;">
                  <span style="font-size: 18px;">⚠️</span>
                  <span style="font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; color: #ef4444; margin-left: 10px;">New Form Submission Requires Attention</span>
                </div>
              </td>
            </tr>
          </table>
          
          ${getEmailHeroV2HTML(theme, "Admin Alert", "A new submission has been received")}
          
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${emailBg};">
            <tr>
              <td style="padding: 0 32px 32px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${tableBg}; border-radius: 12px; border: 1px solid ${borderColor};">
                  <tr>
                    <td style="padding: 16px 20px; border-bottom: 1px solid ${borderColor}; width: 120px;">
                      <span style="font-size: 13px; color: ${labelColor}; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">Name</span>
                    </td>
                    <td style="padding: 16px 20px; border-bottom: 1px solid ${borderColor};">
                      <span style="font-size: 15px; color: ${valueColor}; font-weight: 500;">{{name}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 16px 20px; border-bottom: 1px solid ${borderColor};">
                      <span style="font-size: 13px; color: ${labelColor}; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">Email</span>
                    </td>
                    <td style="padding: 16px 20px; border-bottom: 1px solid ${borderColor};">
                      <span style="font-size: 15px; color: ${valueColor}; font-weight: 500;">{{email}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 16px 20px; border-bottom: 1px solid ${borderColor};">
                      <span style="font-size: 13px; color: ${labelColor}; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">Category</span>
                    </td>
                    <td style="padding: 16px 20px; border-bottom: 1px solid ${borderColor};">
                      <span style="display: inline-block; padding: 4px 12px; background-color: ${categoryBg}; border-radius: 20px; font-size: 13px; color: #a78bfa; font-weight: 500;">{{category}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 16px 20px; vertical-align: top;">
                      <span style="font-size: 13px; color: ${labelColor}; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">Message</span>
                    </td>
                    <td style="padding: 16px 20px;">
                      <span style="font-size: 15px; color: ${valueColor}; line-height: 1.6;">{{message}}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          
          ${getEmailFooterV2HTML(theme, logoUrl)}
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}
