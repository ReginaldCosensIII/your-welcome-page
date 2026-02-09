interface EmailBodyV2Props {
  theme: 'light' | 'dark';
  children: React.ReactNode;
}

export function EmailBodyV2({ theme, children }: EmailBodyV2Props) {
  const bgColor = theme === 'dark' ? '#0f172a' : '#ffffff';
  const textColor = theme === 'dark' ? '#e2e8f0' : '#1e293b';
  
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
          <td style={{ 
            padding: '32px',
            fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
            fontSize: '15px',
            lineHeight: 1.8,
            color: textColor
          }}>
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function getEmailBodyV2HTML(theme: 'light' | 'dark', content: string): string {
  const bgColor = theme === 'dark' ? '#0f172a' : '#ffffff';
  const textColor = theme === 'dark' ? '#e2e8f0' : '#1e293b';

  return `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${bgColor};">
  <tr>
    <td style="padding: 32px; font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; font-size: 15px; line-height: 1.8; color: ${textColor};">
      ${content}
    </td>
  </tr>
</table>`;
}
