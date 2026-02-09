import horizontalLogoWhite from "@/assets/horizontal-logo-white.svg";
import logoHorizontal from "@/assets/logo-horizontal.svg";

interface EmailFooterV2Props {
  theme: 'light' | 'dark';
}

export function EmailFooterV2({ theme }: EmailFooterV2Props) {
  const bgColor = theme === 'dark' ? '#070b14' : '#f8fafc';
  const textColor = theme === 'dark' ? '#64748b' : '#64748b';
  const mutedColor = theme === 'dark' ? '#475569' : '#94a3b8';
  const logoSrc = theme === 'dark' ? horizontalLogoWhite : logoHorizontal;
  
  return (
    <table 
      width="100%" 
      cellPadding="0" 
      cellSpacing="0" 
      role="presentation"
      style={{ backgroundColor: bgColor }}
    >
      <tbody>
        <tr>
          <td style={{ padding: '0' }}>
            {/* Gradient accent line */}
            <div style={{
              height: '2px',
              background: 'linear-gradient(90deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%)',
              opacity: 0.6
            }} />
            
            <div style={{ padding: '40px 32px' }}>
              {/* Logo */}
              <div style={{ marginBottom: '24px' }}>
                <img 
                  src={logoSrc}
                  alt="BlanketSmith"
                  width="140"
                  style={{ height: 'auto', opacity: 0.8 }}
                />
              </div>
              
              {/* Social Links - Pill style */}
              <div style={{ marginBottom: '28px' }}>
                <a 
                  href="https://twitter.com/blanketsmith"
                  style={{ 
                    display: 'inline-block',
                    padding: '8px 16px',
                    marginRight: '8px',
                    backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                    borderRadius: '20px',
                    color: textColor,
                    textDecoration: 'none',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    fontWeight: 500
                  }}
                >
                  Twitter
                </a>
                <a 
                  href="https://instagram.com/blanketsmith"
                  style={{ 
                    display: 'inline-block',
                    padding: '8px 16px',
                    marginRight: '8px',
                    backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                    borderRadius: '20px',
                    color: textColor,
                    textDecoration: 'none',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    fontWeight: 500
                  }}
                >
                  Instagram
                </a>
                <a 
                  href="https://discord.gg/blanketsmith"
                  style={{ 
                    display: 'inline-block',
                    padding: '8px 16px',
                    backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                    borderRadius: '20px',
                    color: textColor,
                    textDecoration: 'none',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    fontWeight: 500
                  }}
                >
                  Discord
                </a>
              </div>
              
              {/* Divider */}
              <div style={{ 
                height: '1px', 
                backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                marginBottom: '20px'
              }} />
              
              {/* Legal */}
              <p style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: '12px',
                lineHeight: 1.6,
                color: mutedColor,
                margin: '0 0 12px 0'
              }}>
                © 2026 BlanketSmith. Craft Meets Code.
              </p>
              <p style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: '12px',
                lineHeight: 1.6,
                color: mutedColor,
                margin: 0
              }}>
                <a href="#" style={{ color: mutedColor, textDecoration: 'underline' }}>Unsubscribe</a>
                <span style={{ margin: '0 8px', opacity: 0.5 }}>•</span>
                <a href="#" style={{ color: mutedColor, textDecoration: 'underline' }}>Privacy</a>
                <span style={{ margin: '0 8px', opacity: 0.5 }}>•</span>
                <a href="#" style={{ color: mutedColor, textDecoration: 'underline' }}>Terms</a>
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function getEmailFooterV2HTML(theme: 'light' | 'dark', logoUrl: string): string {
  const bgColor = theme === 'dark' ? '#070b14' : '#f8fafc';
  const textColor = theme === 'dark' ? '#64748b' : '#64748b';
  const mutedColor = theme === 'dark' ? '#475569' : '#94a3b8';
  const pillBg = theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)';
  const dividerColor = theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

  return `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${bgColor};">
  <tr>
    <td style="padding: 0;">
      <div style="height: 2px; background: linear-gradient(90deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%); opacity: 0.6;"></div>
      <div style="padding: 40px 32px;">
        <div style="margin-bottom: 24px;">
          <img src="${logoUrl}" alt="BlanketSmith" width="140" style="height: auto; opacity: 0.8;" />
        </div>
        
        <div style="margin-bottom: 28px;">
          <a href="https://twitter.com/blanketsmith" style="display: inline-block; padding: 8px 16px; margin-right: 8px; background-color: ${pillBg}; border-radius: 20px; color: ${textColor}; text-decoration: none; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500;">Twitter</a>
          <a href="https://instagram.com/blanketsmith" style="display: inline-block; padding: 8px 16px; margin-right: 8px; background-color: ${pillBg}; border-radius: 20px; color: ${textColor}; text-decoration: none; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500;">Instagram</a>
          <a href="https://discord.gg/blanketsmith" style="display: inline-block; padding: 8px 16px; background-color: ${pillBg}; border-radius: 20px; color: ${textColor}; text-decoration: none; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500;">Discord</a>
        </div>
        
        <div style="height: 1px; background-color: ${dividerColor}; margin-bottom: 20px;"></div>
        
        <p style="font-family: 'Inter', sans-serif; font-size: 12px; line-height: 1.6; color: ${mutedColor}; margin: 0 0 12px 0;">
          © 2026 BlanketSmith. Craft Meets Code.
        </p>
        <p style="font-family: 'Inter', sans-serif; font-size: 12px; line-height: 1.6; color: ${mutedColor}; margin: 0;">
          <a href="{{unsubscribe_url}}" style="color: ${mutedColor}; text-decoration: underline;">Unsubscribe</a>
          <span style="margin: 0 8px; opacity: 0.5;">•</span>
          <a href="https://blanketsmith.com/privacy" style="color: ${mutedColor}; text-decoration: underline;">Privacy</a>
          <span style="margin: 0 8px; opacity: 0.5;">•</span>
          <a href="https://blanketsmith.com/terms" style="color: ${mutedColor}; text-decoration: underline;">Terms</a>
        </p>
      </div>
    </td>
  </tr>
</table>`;
}
