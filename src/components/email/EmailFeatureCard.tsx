import { LucideIcon } from "lucide-react";

interface EmailFeatureCardProps {
  theme: 'light' | 'dark';
  icon: LucideIcon;
  title: string;
  description: string;
}

export function EmailFeatureCard({ theme, icon: Icon, title, description }: EmailFeatureCardProps) {
  const bgColor = theme === 'dark' ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.8)';
  const borderColor = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  const textColor = theme === 'dark' ? '#f8fafc' : '#0f172a';
  const subTextColor = theme === 'dark' ? '#94a3b8' : '#64748b';
  
  return (
    <table 
      width="100%" 
      cellPadding="0" 
      cellSpacing="0" 
      role="presentation"
      style={{ 
        backgroundColor: bgColor,
        borderRadius: '12px',
        border: `1px solid ${borderColor}`,
        backdropFilter: 'blur(12px)'
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding: '24px' }}>
            <div style={{ 
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(45deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <Icon size={24} color="#ffffff" />
            </div>
            <h3 style={{ 
              fontFamily: "'Poppins', sans-serif",
              fontSize: '18px',
              fontWeight: 600,
              color: textColor,
              margin: '0 0 8px 0'
            }}>
              {title}
            </h3>
            <p style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              lineHeight: 1.6,
              color: subTextColor,
              margin: 0
            }}>
              {description}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function getEmailFeatureCardHTML(
  theme: 'light' | 'dark',
  iconEmoji: string,
  title: string,
  description: string
): string {
  const bgColor = theme === 'dark' ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.8)';
  const borderColor = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  const textColor = theme === 'dark' ? '#f8fafc' : '#0f172a';
  const subTextColor = theme === 'dark' ? '#94a3b8' : '#64748b';

  return `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${bgColor}; border-radius: 12px; border: 1px solid ${borderColor};">
  <tr>
    <td style="padding: 24px;">
      <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(45deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%); line-height: 48px; text-align: center; font-size: 24px; margin-bottom: 16px;">
        ${iconEmoji}
      </div>
      <h3 style="font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 600; color: ${textColor}; margin: 0 0 8px 0;">
        ${title}
      </h3>
      <p style="font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.6; color: ${subTextColor}; margin: 0;">
        ${description}
      </p>
    </td>
  </tr>
</table>`;
}
