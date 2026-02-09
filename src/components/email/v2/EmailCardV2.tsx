interface EmailCardV2Props {
  theme: 'light' | 'dark';
  title: string;
  children: React.ReactNode;
  icon?: string;
}

export function EmailCardV2({ theme, title, children, icon }: EmailCardV2Props) {
  const bgColor = theme === 'dark' ? '#0f172a' : '#ffffff';
  const cardBg = theme === 'dark' ? 'rgba(30, 41, 59, 0.6)' : 'rgba(241, 245, 249, 0.8)';
  const borderColor = theme === 'dark' ? 'rgba(148, 163, 184, 0.15)' : 'rgba(15, 23, 42, 0.08)';
  const titleColor = theme === 'dark' ? '#f1f5f9' : '#0f172a';
  const textColor = theme === 'dark' ? '#cbd5e1' : '#475569';
  
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
          <td style={{ padding: '0 32px 24px' }}>
            <div style={{
              backgroundColor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: '12px',
              padding: '24px',
              borderLeft: '3px solid #7C2AE8'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                {icon && (
                  <span style={{ 
                    fontSize: '20px', 
                    marginRight: '10px',
                    display: 'inline-block'
                  }}>
                    {icon}
                  </span>
                )}
                <h3 style={{ 
                  fontFamily: "'Poppins', 'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: 600,
                  color: titleColor,
                  margin: 0
                }}>
                  {title}
                </h3>
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                lineHeight: 1.7,
                color: textColor
              }}>
                {children}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function getEmailCardV2HTML(theme: 'light' | 'dark', title: string, content: string, icon?: string): string {
  const bgColor = theme === 'dark' ? '#0f172a' : '#ffffff';
  const cardBg = theme === 'dark' ? 'rgba(30, 41, 59, 0.6)' : 'rgba(241, 245, 249, 0.8)';
  const borderColor = theme === 'dark' ? 'rgba(148, 163, 184, 0.15)' : 'rgba(15, 23, 42, 0.08)';
  const titleColor = theme === 'dark' ? '#f1f5f9' : '#0f172a';
  const textColor = theme === 'dark' ? '#cbd5e1' : '#475569';
  
  const iconHtml = icon ? `<span style="font-size: 20px; margin-right: 10px;">${icon}</span>` : '';

  return `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${bgColor};">
  <tr>
    <td style="padding: 0 32px 24px;">
      <div style="background-color: ${cardBg}; border: 1px solid ${borderColor}; border-radius: 12px; padding: 24px; border-left: 3px solid #7C2AE8;">
        <div style="margin-bottom: 12px;">
          ${iconHtml}
          <span style="font-family: 'Poppins', 'Inter', sans-serif; font-size: 16px; font-weight: 600; color: ${titleColor};">${title}</span>
        </div>
        <div style="font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.7; color: ${textColor};">
          ${content}
        </div>
      </div>
    </td>
  </tr>
</table>`;
}
