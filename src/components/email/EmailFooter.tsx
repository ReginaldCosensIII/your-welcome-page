import horizontalLogoWhite from "@/assets/horizontal-logo-white.svg";
import logoHorizontal from "@/assets/logo-horizontal.svg";

interface EmailFooterProps {
  theme: 'light' | 'dark';
}

export function EmailFooter({ theme }: EmailFooterProps) {
  const bgColor = theme === 'dark' ? '#0a0f1a' : '#f1f5f9';
  const textColor = theme === 'dark' ? '#64748b' : '#94a3b8';
  const borderColor = theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
  const logoSrc = theme === 'dark' ? horizontalLogoWhite : logoHorizontal;
  
  return (
    <table 
      width="100%" 
      cellPadding="0" 
      cellSpacing="0" 
      role="presentation"
      style={{ 
        backgroundColor: bgColor,
        borderTop: `1px solid ${borderColor}`
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding: '32px', textAlign: 'center' }}>
            <img 
              src={logoSrc}
              alt="BlanketSmith"
              width="160"
              style={{ marginBottom: '20px', height: 'auto' }}
            />
            
            {/* Social Links */}
            <div style={{ marginBottom: '24px' }}>
              <a 
                href="https://twitter.com/blanketsmith"
                style={{ 
                  display: 'inline-block',
                  margin: '0 8px',
                  color: textColor,
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px'
                }}
              >
                Twitter
              </a>
              <a 
                href="https://instagram.com/blanketsmith"
                style={{ 
                  display: 'inline-block',
                  margin: '0 8px',
                  color: textColor,
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px'
                }}
              >
                Instagram
              </a>
              <a 
                href="https://discord.gg/blanketsmith"
                style={{ 
                  display: 'inline-block',
                  margin: '0 8px',
                  color: textColor,
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px'
                }}
              >
                Discord
              </a>
            </div>
            
            {/* Legal */}
            <p style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              lineHeight: 1.6,
              color: textColor,
              margin: '0 0 8px 0'
            }}>
              © 2026 BlanketSmith. All rights reserved.
            </p>
            <p style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              lineHeight: 1.6,
              color: textColor,
              margin: 0
            }}>
              <a href="#" style={{ color: textColor, textDecoration: 'underline' }}>Unsubscribe</a>
              {' · '}
              <a href="#" style={{ color: textColor, textDecoration: 'underline' }}>Privacy Policy</a>
              {' · '}
              <a href="#" style={{ color: textColor, textDecoration: 'underline' }}>Terms of Service</a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function getEmailFooterHTML(theme: 'light' | 'dark', logoUrl: string): string {
  const bgColor = theme === 'dark' ? '#0a0f1a' : '#f1f5f9';
  const textColor = theme === 'dark' ? '#64748b' : '#94a3b8';
  const borderColor = theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';

  return `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${bgColor}; border-top: 1px solid ${borderColor};">
  <tr>
    <td style="padding: 32px; text-align: center;">
      <img src="${logoUrl}" alt="BlanketSmith" width="160" style="margin-bottom: 20px; height: auto;" />
      
      <div style="margin-bottom: 24px;">
        <a href="https://twitter.com/blanketsmith" style="display: inline-block; margin: 0 8px; color: ${textColor}; text-decoration: none; font-family: 'Inter', sans-serif; font-size: 14px;">Twitter</a>
        <a href="https://instagram.com/blanketsmith" style="display: inline-block; margin: 0 8px; color: ${textColor}; text-decoration: none; font-family: 'Inter', sans-serif; font-size: 14px;">Instagram</a>
        <a href="https://discord.gg/blanketsmith" style="display: inline-block; margin: 0 8px; color: ${textColor}; text-decoration: none; font-family: 'Inter', sans-serif; font-size: 14px;">Discord</a>
      </div>
      
      <p style="font-family: 'Inter', sans-serif; font-size: 12px; line-height: 1.6; color: ${textColor}; margin: 0 0 8px 0;">
        © 2026 BlanketSmith. All rights reserved.
      </p>
      <p style="font-family: 'Inter', sans-serif; font-size: 12px; line-height: 1.6; color: ${textColor}; margin: 0;">
        <a href="{{unsubscribe_url}}" style="color: ${textColor}; text-decoration: underline;">Unsubscribe</a>
        · <a href="https://blanketsmith.com/privacy" style="color: ${textColor}; text-decoration: underline;">Privacy Policy</a>
        · <a href="https://blanketsmith.com/terms" style="color: ${textColor}; text-decoration: underline;">Terms of Service</a>
      </p>
    </td>
  </tr>
</table>`;
}
