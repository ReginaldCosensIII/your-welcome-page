import logoHorizontal from "@/assets/logo-horizontal.svg";

interface EmailHeaderProps {
  theme: 'light' | 'dark';
}

export function EmailHeader({ theme }: EmailHeaderProps) {
  const bgColor = theme === 'dark' ? '#0f172a' : '#ffffff';
  
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
          <td style={{ padding: '24px 32px', textAlign: 'center' }}>
            <img 
              src={logoHorizontal} 
              alt="BlanketSmith" 
              width="180"
              style={{ 
                display: 'inline-block',
                height: 'auto',
                filter: theme === 'dark' ? 'brightness(1.1)' : 'none'
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
  
  return `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${bgColor}; border-bottom: 1px solid ${borderColor};">
  <tr>
    <td style="padding: 24px 32px; text-align: center;">
      <img src="${logoUrl}" alt="BlanketSmith" width="180" style="display: inline-block; height: auto;${theme === 'dark' ? ' filter: brightness(1.1);' : ''}" />
    </td>
  </tr>
</table>`;
}
