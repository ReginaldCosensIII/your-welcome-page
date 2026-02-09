import horizontalLogoWhite from "@/assets/horizontal-logo-white.svg";
import logoHorizontal from "@/assets/logo-horizontal.svg";

interface EmailHeaderV2Props {
  theme: 'light' | 'dark';
}

export function EmailHeaderV2({ theme }: EmailHeaderV2Props) {
  const bgColor = theme === 'dark' ? '#0f172a' : '#ffffff';
  const logoSrc = theme === 'dark' ? horizontalLogoWhite : logoHorizontal;
  const accentColor = theme === 'dark' ? 'rgba(124, 42, 232, 0.3)' : 'rgba(124, 42, 232, 0.1)';
  
  return (
    <table 
      width="100%" 
      cellPadding="0" 
      cellSpacing="0" 
      role="presentation"
      style={{ 
        backgroundColor: bgColor,
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding: '0' }}>
            {/* Gradient accent line at top */}
            <div style={{
              height: '4px',
              background: 'linear-gradient(90deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%)'
            }} />
            
            {/* Logo container */}
            <div style={{ 
              padding: '28px 32px',
              borderBottom: theme === 'dark' ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)'
            }}>
              <img 
                src={logoSrc} 
                alt="BlanketSmith" 
                width="200"
                style={{ 
                  display: 'block',
                  height: 'auto',
                  maxHeight: '48px'
                }}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function getEmailHeaderV2HTML(theme: 'light' | 'dark', logoUrl: string): string {
  const bgColor = theme === 'dark' ? '#0f172a' : '#ffffff';
  const borderColor = theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

  return `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${bgColor};">
  <tr>
    <td style="padding: 0;">
      <div style="height: 4px; background: linear-gradient(90deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%);"></div>
      <div style="padding: 28px 32px; border-bottom: 1px solid ${borderColor};">
        <img src="${logoUrl}" alt="BlanketSmith" width="200" style="display: block; height: auto; max-height: 48px;" />
      </div>
    </td>
  </tr>
</table>`;
}
