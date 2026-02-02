interface EmailHeroProps {
  theme: 'light' | 'dark';
  headline: string;
  subheadline?: string;
  showScreenshot?: boolean;
  screenshotUrl?: string;
}

export function EmailHero({ theme, headline, subheadline, showScreenshot, screenshotUrl }: EmailHeroProps) {
  const bgColor = theme === 'dark' ? '#0f172a' : '#f8fafc';
  const textColor = theme === 'dark' ? '#f8fafc' : '#0f172a';
  const subTextColor = theme === 'dark' ? '#94a3b8' : '#64748b';
  
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
            padding: '48px 32px',
            textAlign: 'center',
            background: theme === 'dark' 
              ? 'radial-gradient(ellipse at center, rgba(124, 42, 232, 0.15) 0%, rgba(55, 79, 217, 0.08) 50%, transparent 70%)'
              : 'radial-gradient(ellipse at center, rgba(124, 42, 232, 0.08) 0%, rgba(20, 200, 245, 0.04) 50%, transparent 70%)'
          }}>
            <h1 style={{ 
              fontFamily: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: 1.2,
              margin: '0 0 16px 0',
              background: 'linear-gradient(45deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {headline}
            </h1>
            {subheadline && (
              <p style={{ 
                fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.6,
                margin: 0,
                color: subTextColor
              }}>
                {subheadline}
              </p>
            )}
            {showScreenshot && screenshotUrl && (
              <div style={{ 
                marginTop: '32px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                {/* Browser frame */}
                <div style={{ 
                  backgroundColor: theme === 'dark' ? '#1e293b' : '#e2e8f0',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#eab308', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
                </div>
                <img 
                  src={screenshotUrl}
                  alt="BlanketSmith Tool Preview"
                  width="100%"
                  style={{ display: 'block' }}
                />
              </div>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function getEmailHeroHTML(
  theme: 'light' | 'dark', 
  headline: string, 
  subheadline?: string,
  showScreenshot?: boolean,
  screenshotUrl?: string
): string {
  const bgColor = theme === 'dark' ? '#0f172a' : '#f8fafc';
  const subTextColor = theme === 'dark' ? '#94a3b8' : '#64748b';
  const gradientBg = theme === 'dark' 
    ? 'radial-gradient(ellipse at center, rgba(124, 42, 232, 0.15) 0%, rgba(55, 79, 217, 0.08) 50%, transparent 70%)'
    : 'radial-gradient(ellipse at center, rgba(124, 42, 232, 0.08) 0%, rgba(20, 200, 245, 0.04) 50%, transparent 70%)';

  let screenshotHTML = '';
  if (showScreenshot && screenshotUrl) {
    const frameBg = theme === 'dark' ? '#1e293b' : '#e2e8f0';
    screenshotHTML = `
    <div style="margin-top: 32px; border-radius: 12px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.1);">
      <div style="background-color: ${frameBg}; padding: 8px 12px;">
        <span style="width: 10px; height: 10px; border-radius: 50%; background-color: #ef4444; display: inline-block;"></span>
        <span style="width: 10px; height: 10px; border-radius: 50%; background-color: #eab308; display: inline-block; margin-left: 6px;"></span>
        <span style="width: 10px; height: 10px; border-radius: 50%; background-color: #22c55e; display: inline-block; margin-left: 6px;"></span>
      </div>
      <img src="${screenshotUrl}" alt="BlanketSmith Tool Preview" width="100%" style="display: block;" />
    </div>`;
  }

  return `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${bgColor};">
  <tr>
    <td style="padding: 48px 32px; text-align: center; background: ${gradientBg};">
      <h1 style="font-family: 'Poppins', 'Helvetica Neue', Arial, sans-serif; font-size: 32px; font-weight: 700; line-height: 1.2; margin: 0 0 16px 0; background: linear-gradient(45deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
        ${headline}
      </h1>
      ${subheadline ? `<p style="font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.6; margin: 0; color: ${subTextColor};">${subheadline}</p>` : ''}
      ${screenshotHTML}
    </td>
  </tr>
</table>`;
}
