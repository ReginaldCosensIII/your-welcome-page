import verticalLogoSlogan from "@/assets/vertical-logo-slogan.svg";
import verticalLogoSloganWhite from "@/assets/vertical-logo-slogan-white.svg";

interface EmailHeaderProps {
  theme: 'light' | 'dark';
}

export function EmailHeader({ theme }: EmailHeaderProps) {
  const bgColor = theme === 'dark' ? '#0f172a' : '#ffffff';
  const logoSrc = theme === 'dark' ? verticalLogoSloganWhite : verticalLogoSlogan;
  
  return (
    <table 
      width="100%" 
      cellPadding="0" 
      cellSpacing="0" 
      role="presentation"
      style={{ 
        backgroundColor: bgColor,
        borderBottom: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)'
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding: '32px', textAlign: 'center' }}>
            <img 
              src={logoSrc} 
              alt="BlanketSmith - Craft Meets Code" 
              width="180"
              style={{ 
                display: 'inline-block',
                height: 'auto',
                maxHeight: '180px'
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function getEmailHeaderHTML(theme: 'light' | 'dark', logoUrl: string): string {
  const bgColor = theme === 'dark' ? '#0f172a' : '#ffffff';
  const borderColor = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  // logoUrl should be the vertical logo - white for dark theme, dark for light theme
  
  return `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${bgColor}; border-bottom: 1px solid ${borderColor};">
  <tr>
    <td style="padding: 32px; text-align: center;">
      <img src="${logoUrl}" alt="BlanketSmith - Craft Meets Code" width="180" style="display: inline-block; height: auto; max-height: 180px;" />
    </td>
  </tr>
</table>`;
}
