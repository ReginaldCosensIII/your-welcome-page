interface EmailCTAButtonProps {
  theme: 'light' | 'dark';
  text: string;
  href: string;
}

export function EmailCTAButton({ theme, text, href }: EmailCTAButtonProps) {
  const bgColor = theme === 'dark' ? '#0f172a' : '#f8fafc';
  
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
          <td style={{ padding: '32px', textAlign: 'center' }}>
            <a 
              href={href}
              style={{ 
                display: 'inline-block',
                padding: '16px 40px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '12px',
                background: 'linear-gradient(45deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%)',
                boxShadow: '0 0 30px rgba(124, 42, 232, 0.4), 0 0 60px rgba(20, 200, 245, 0.2)'
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

export function getEmailCTAButtonHTML(theme: 'light' | 'dark', text: string, href: string): string {
  const bgColor = theme === 'dark' ? '#0f172a' : '#f8fafc';

  return `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${bgColor};">
  <tr>
    <td style="padding: 32px; text-align: center;">
      <!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:50px;v-text-anchor:middle;width:200px;" arcsize="24%" fillcolor="#7C2AE8">
        <w:anchorlock/>
        <center style="color:#ffffff;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;">${text}</center>
      </v:roundrect>
      <![endif]-->
      <!--[if !mso]><!-->
      <a href="${href}" style="display: inline-block; padding: 16px 40px; font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 12px; background: linear-gradient(45deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%); box-shadow: 0 0 30px rgba(124, 42, 232, 0.4), 0 0 60px rgba(20, 200, 245, 0.2);">
        ${text}
      </a>
      <!--<![endif]-->
    </td>
  </tr>
</table>`;
}
