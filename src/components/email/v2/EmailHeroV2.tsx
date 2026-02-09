interface EmailHeroV2Props {
  theme: 'light' | 'dark';
  headline: string;
  subheadline?: string;
}

export function EmailHeroV2({ theme, headline, subheadline }: EmailHeroV2Props) {
  const bgColor = theme === 'dark' ? '#0f172a' : '#ffffff';
  const headlineColor = theme === 'dark' ? '#ffffff' : '#0f172a';
  const subColor = theme === 'dark' ? '#94a3b8' : '#64748b';
  
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
            padding: '48px 32px 32px',
            textAlign: 'left'
          }}>
            <h1 style={{ 
              fontFamily: "'Poppins', 'Inter', sans-serif",
              fontSize: '28px',
              fontWeight: 700,
              color: headlineColor,
              margin: '0 0 8px 0',
              lineHeight: 1.3,
              letterSpacing: '-0.5px'
            }}>
              {headline}
            </h1>
            {subheadline && (
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                color: subColor,
                margin: 0,
                lineHeight: 1.5
              }}>
                {subheadline}
              </p>
            )}
            {/* Accent underline */}
            <div style={{
              marginTop: '20px',
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #7C2AE8 0%, #14C8F5 100%)',
              borderRadius: '2px'
            }} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function getEmailHeroV2HTML(theme: 'light' | 'dark', headline: string, subheadline?: string): string {
  const bgColor = theme === 'dark' ? '#0f172a' : '#ffffff';
  const headlineColor = theme === 'dark' ? '#ffffff' : '#0f172a';
  const subColor = theme === 'dark' ? '#94a3b8' : '#64748b';
  
  const subHtml = subheadline 
    ? `<p style="font-family: 'Inter', sans-serif; font-size: 16px; color: ${subColor}; margin: 0; line-height: 1.5;">${subheadline}</p>`
    : '';

  return `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${bgColor};">
  <tr>
    <td style="padding: 48px 32px 32px; text-align: left;">
      <h1 style="font-family: 'Poppins', 'Inter', sans-serif; font-size: 28px; font-weight: 700; color: ${headlineColor}; margin: 0 0 8px 0; line-height: 1.3; letter-spacing: -0.5px;">
        ${headline}
      </h1>
      ${subHtml}
      <div style="margin-top: 20px; width: 60px; height: 3px; background: linear-gradient(90deg, #7C2AE8 0%, #14C8F5 100%); border-radius: 2px;"></div>
    </td>
  </tr>
</table>`;
}
