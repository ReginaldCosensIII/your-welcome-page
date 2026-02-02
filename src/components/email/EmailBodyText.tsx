interface EmailBodyTextProps {
  theme: 'light' | 'dark';
  children: React.ReactNode;
}

export function EmailBodyText({ theme, children }: EmailBodyTextProps) {
  const bgColor = theme === 'dark' ? '#0f172a' : '#ffffff';
  const textColor = theme === 'dark' ? '#cbd5e1' : '#334155';
  
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
            padding: '24px 32px',
            fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
            fontSize: '16px',
            lineHeight: 1.7,
            color: textColor
          }}>
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function getEmailBodyTextHTML(theme: 'light' | 'dark', content: string): string {
  const bgColor = theme === 'dark' ? '#0f172a' : '#ffffff';
  const textColor = theme === 'dark' ? '#cbd5e1' : '#334155';

  return `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${bgColor};">
  <tr>
    <td style="padding: 24px 32px; font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; font-size: 16px; line-height: 1.7; color: ${textColor};">
      ${content}
    </td>
  </tr>
</table>`;
}
