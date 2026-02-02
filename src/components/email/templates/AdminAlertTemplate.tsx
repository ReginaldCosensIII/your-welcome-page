import { EmailHeader, getEmailHeaderHTML } from "../EmailHeader";
import { EmailFooter, getEmailFooterHTML } from "../EmailFooter";

interface EmailTemplateProps {
  theme: 'light' | 'dark';
}

export function AdminAlertTemplate({ theme }: EmailTemplateProps) {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const innerBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const textColor = theme === 'dark' ? '#f8fafc' : '#0f172a';
  const mutedColor = theme === 'dark' ? '#94a3b8' : '#64748b';
  const tableBg = theme === 'dark' ? '#1e293b' : '#f8fafc';
  const tableBorder = theme === 'dark' ? '#334155' : '#e2e8f0';
  const alertBg = theme === 'dark' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.05)';
  
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
              
              {/* Alert Banner */}
              <table width="100%" cellPadding="0" cellSpacing="0" role="presentation" style={{ backgroundColor: alertBg }}>
                <tbody>
                  <tr>
                    <td style={{ 
                      padding: '16px 32px',
                      textAlign: 'center',
                      borderBottom: '1px solid rgba(239, 68, 68, 0.2)'
                    }}>
                      <span style={{ 
                        display: 'inline-block',
                        padding: '4px 12px',
                        backgroundColor: '#ef4444',
                        color: '#ffffff',
                        borderRadius: '9999px',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '12px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Admin Alert
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              {/* Title */}
              <table width="100%" cellPadding="0" cellSpacing="0" role="presentation" style={{ backgroundColor: innerBg }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '32px 32px 16px', textAlign: 'center' }}>
                      <h1 style={{ 
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '24px',
                        fontWeight: 700,
                        color: textColor,
                        margin: 0
                      }}>
                        New {"{{alert_type}}"} Submission
                      </h1>
                      <p style={{ 
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '14px',
                        color: mutedColor,
                        margin: '8px 0 0 0'
                      }}>
                        Received at {"{{timestamp}}"}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              {/* Data Table */}
              <table width="100%" cellPadding="0" cellSpacing="0" role="presentation" style={{ backgroundColor: innerBg }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '0 32px 32px' }}>
                      <table 
                        width="100%" 
                        cellPadding="0" 
                        cellSpacing="0" 
                        role="presentation"
                        style={{ 
                          borderRadius: '8px',
                          overflow: 'hidden',
                          border: `1px solid ${tableBorder}`
                        }}
                      >
                        <tbody>
                          <tr style={{ backgroundColor: tableBg }}>
                            <td style={{ 
                              padding: '12px 16px',
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '12px',
                              fontWeight: 600,
                              color: mutedColor,
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                              borderBottom: `1px solid ${tableBorder}`,
                              width: '120px'
                            }}>
                              Field
                            </td>
                            <td style={{ 
                              padding: '12px 16px',
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '12px',
                              fontWeight: 600,
                              color: mutedColor,
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                              borderBottom: `1px solid ${tableBorder}`
                            }}>
                              Value
                            </td>
                          </tr>
                          <tr>
                            <td style={{ 
                              padding: '12px 16px',
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '14px',
                              fontWeight: 500,
                              color: textColor,
                              borderBottom: `1px solid ${tableBorder}`,
                              backgroundColor: innerBg
                            }}>
                              Name
                            </td>
                            <td style={{ 
                              padding: '12px 16px',
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '14px',
                              color: textColor,
                              borderBottom: `1px solid ${tableBorder}`,
                              backgroundColor: innerBg
                            }}>
                              {"{{sender_name}}"}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ 
                              padding: '12px 16px',
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '14px',
                              fontWeight: 500,
                              color: textColor,
                              borderBottom: `1px solid ${tableBorder}`,
                              backgroundColor: innerBg
                            }}>
                              Email
                            </td>
                            <td style={{ 
                              padding: '12px 16px',
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '14px',
                              color: '#7C2AE8',
                              borderBottom: `1px solid ${tableBorder}`,
                              backgroundColor: innerBg
                            }}>
                              <a href="mailto:{{sender_email}}" style={{ color: '#7C2AE8', textDecoration: 'none' }}>
                                {"{{sender_email}}"}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ 
                              padding: '12px 16px',
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '14px',
                              fontWeight: 500,
                              color: textColor,
                              borderBottom: `1px solid ${tableBorder}`,
                              backgroundColor: innerBg
                            }}>
                              Category
                            </td>
                            <td style={{ 
                              padding: '12px 16px',
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '14px',
                              color: textColor,
                              borderBottom: `1px solid ${tableBorder}`,
                              backgroundColor: innerBg
                            }}>
                              <span style={{ 
                                display: 'inline-block',
                                padding: '2px 8px',
                                backgroundColor: 'rgba(124, 42, 232, 0.1)',
                                color: '#7C2AE8',
                                borderRadius: '4px',
                                fontSize: '12px',
                                fontWeight: 500
                              }}>
                                {"{{category}}"}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ 
                              padding: '12px 16px',
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '14px',
                              fontWeight: 500,
                              color: textColor,
                              backgroundColor: innerBg,
                              verticalAlign: 'top'
                            }}>
                              Message
                            </td>
                            <td style={{ 
                              padding: '12px 16px',
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '14px',
                              lineHeight: 1.6,
                              color: textColor,
                              backgroundColor: innerBg
                            }}>
                              {"{{message}}"}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <EmailFooter theme={theme} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function getAdminAlertHTML(theme: 'light' | 'dark'): string {
  const outerBg = theme === 'dark' ? '#030712' : '#f1f5f9';
  const innerBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const textColor = theme === 'dark' ? '#f8fafc' : '#0f172a';
  const mutedColor = theme === 'dark' ? '#94a3b8' : '#64748b';
  const tableBg = theme === 'dark' ? '#1e293b' : '#f8fafc';
  const tableBorder = theme === 'dark' ? '#334155' : '#e2e8f0';
  const alertBg = theme === 'dark' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.05)';
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
  <title>Admin Alert - BlanketSmith</title>
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
          
          <!-- Alert Banner -->
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${alertBg};">
            <tr>
              <td style="padding: 16px 32px; text-align: center; border-bottom: 1px solid rgba(239, 68, 68, 0.2);">
                <span style="display: inline-block; padding: 4px 12px; background-color: #ef4444; color: #ffffff; border-radius: 9999px; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                  Admin Alert
                </span>
              </td>
            </tr>
          </table>
          
          <!-- Title -->
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${innerBg};">
            <tr>
              <td style="padding: 32px 32px 16px; text-align: center;">
                <h1 style="font-family: 'Poppins', sans-serif; font-size: 24px; font-weight: 700; color: ${textColor}; margin: 0;">
                  New {{alert_type}} Submission
                </h1>
                <p style="font-family: 'Inter', sans-serif; font-size: 14px; color: ${mutedColor}; margin: 8px 0 0 0;">
                  Received at {{timestamp}}
                </p>
              </td>
            </tr>
          </table>
          
          <!-- Data Table -->
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${innerBg};">
            <tr>
              <td style="padding: 0 32px 32px;">
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-radius: 8px; overflow: hidden; border: 1px solid ${tableBorder};">
                  <tr style="background-color: ${tableBg};">
                    <td style="padding: 12px 16px; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; color: ${mutedColor}; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid ${tableBorder}; width: 120px;">Field</td>
                    <td style="padding: 12px 16px; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; color: ${mutedColor}; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid ${tableBorder};">Value</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500; color: ${textColor}; border-bottom: 1px solid ${tableBorder}; background-color: ${innerBg};">Name</td>
                    <td style="padding: 12px 16px; font-family: 'Inter', sans-serif; font-size: 14px; color: ${textColor}; border-bottom: 1px solid ${tableBorder}; background-color: ${innerBg};">{{sender_name}}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500; color: ${textColor}; border-bottom: 1px solid ${tableBorder}; background-color: ${innerBg};">Email</td>
                    <td style="padding: 12px 16px; font-family: 'Inter', sans-serif; font-size: 14px; color: #7C2AE8; border-bottom: 1px solid ${tableBorder}; background-color: ${innerBg};"><a href="mailto:{{sender_email}}" style="color: #7C2AE8; text-decoration: none;">{{sender_email}}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500; color: ${textColor}; border-bottom: 1px solid ${tableBorder}; background-color: ${innerBg};">Category</td>
                    <td style="padding: 12px 16px; font-family: 'Inter', sans-serif; font-size: 14px; color: ${textColor}; border-bottom: 1px solid ${tableBorder}; background-color: ${innerBg};"><span style="display: inline-block; padding: 2px 8px; background-color: rgba(124, 42, 232, 0.1); color: #7C2AE8; border-radius: 4px; font-size: 12px; font-weight: 500;">{{category}}</span></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500; color: ${textColor}; background-color: ${innerBg}; vertical-align: top;">Message</td>
                    <td style="padding: 12px 16px; font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.6; color: ${textColor}; background-color: ${innerBg};">{{message}}</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          
          ${getEmailFooterHTML(theme, badgeUrl)}
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}
