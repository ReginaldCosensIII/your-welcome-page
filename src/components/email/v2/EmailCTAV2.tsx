interface EmailCTAV2Props {
  theme: 'light' | 'dark';
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export function EmailCTAV2({ theme, text, href, variant = 'primary' }: EmailCTAV2Props) {
  const bgColor = theme === 'dark' ? '#0f172a' : '#ffffff';
  
  const buttonStyles = variant === 'primary' 
    ? {
        background: 'linear-gradient(135deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%)',
        color: '#ffffff',
        border: 'none',
      }
    : {
        background: 'transparent',
        color: theme === 'dark' ? '#a78bfa' : '#7C2AE8',
        border: `2px solid ${theme === 'dark' ? '#7C2AE8' : '#7C2AE8'}`,
      };
  
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
          <td style={{ padding: '24px 32px 32px', textAlign: 'center' }}>
            <a 
              href={href}
              style={{ 
                display: 'inline-block',
                padding: variant === 'primary' ? '14px 36px' : '12px 34px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '8px',
                letterSpacing: '0.3px',
                ...buttonStyles
              }}
            >
              {text}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function getEmailCTAV2HTML(theme: 'light' | 'dark', text: string, href: string, variant: 'primary' | 'secondary' = 'primary'): string {
  const bgColor = theme === 'dark' ? '#0f172a' : '#ffffff';
  
  const buttonStyle = variant === 'primary'
    ? `background: linear-gradient(135deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%); color: #ffffff; border: none; padding: 14px 36px;`
    : `background: transparent; color: ${theme === 'dark' ? '#a78bfa' : '#7C2AE8'}; border: 2px solid #7C2AE8; padding: 12px 34px;`;

  return `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${bgColor};">
  <tr>
    <td style="padding: 24px 32px 32px; text-align: center;">
      <!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:46px;v-text-anchor:middle;width:180px;" arcsize="17%" fillcolor="#7C2AE8">
        <w:anchorlock/>
        <center style="color:#ffffff;font-family:Arial,sans-serif;font-size:15px;font-weight:bold;">${text}</center>
      </v:roundrect>
      <![endif]-->
      <!--[if !mso]><!-->
      <a href="${href}" style="display: inline-block; ${buttonStyle} font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 600; text-decoration: none; border-radius: 8px; letter-spacing: 0.3px;">
        ${text}
      </a>
      <!--<![endif]-->
    </td>
  </tr>
</table>`;
}
