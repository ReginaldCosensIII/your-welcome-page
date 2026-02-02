interface EmailProgressRailProps {
  theme: 'light' | 'dark';
  currentStep: 1 | 2 | 3 | 4;
}

const steps = ['Signup', 'Verification', 'Beta Access', 'Forge'];

export function EmailProgressRail({ theme, currentStep }: EmailProgressRailProps) {
  const bgColor = theme === 'dark' ? '#0f172a' : '#f8fafc';
  const textColor = theme === 'dark' ? '#f8fafc' : '#0f172a';
  const mutedColor = theme === 'dark' ? '#64748b' : '#94a3b8';
  const trackColor = theme === 'dark' ? '#1e293b' : '#e2e8f0';
  
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
            <table 
              cellPadding="0" 
              cellSpacing="0" 
              role="presentation"
              style={{ margin: '0 auto' }}
            >
              <tbody>
                <tr>
                  {steps.map((step, index) => {
                    const stepNum = index + 1;
                    const isActive = stepNum === currentStep;
                    const isComplete = stepNum < currentStep;
                    
                    return (
                      <td key={step} style={{ padding: '0 8px', textAlign: 'center' }}>
                        <div style={{ 
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          margin: '0 auto 8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '14px',
                          fontWeight: 600,
                          background: isActive 
                            ? 'linear-gradient(45deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%)'
                            : isComplete 
                              ? '#22c55e'
                              : trackColor,
                          color: isActive || isComplete ? '#ffffff' : mutedColor,
                          boxShadow: isActive ? '0 0 20px rgba(124, 42, 232, 0.4)' : 'none'
                        }}>
                          {isComplete ? '✓' : stepNum}
                        </div>
                        <span style={{ 
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '12px',
                          fontWeight: isActive ? 600 : 400,
                          color: isActive ? textColor : mutedColor
                        }}>
                          {step}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function getEmailProgressRailHTML(theme: 'light' | 'dark', currentStep: 1 | 2 | 3 | 4): string {
  const bgColor = theme === 'dark' ? '#0f172a' : '#f8fafc';
  const textColor = theme === 'dark' ? '#f8fafc' : '#0f172a';
  const mutedColor = theme === 'dark' ? '#64748b' : '#94a3b8';
  const trackColor = theme === 'dark' ? '#1e293b' : '#e2e8f0';
  
  const stepsHTML = steps.map((step, index) => {
    const stepNum = index + 1;
    const isActive = stepNum === currentStep;
    const isComplete = stepNum < currentStep;
    
    const circleBg = isActive 
      ? 'linear-gradient(45deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%)'
      : isComplete 
        ? '#22c55e'
        : trackColor;
    const circleColor = isActive || isComplete ? '#ffffff' : mutedColor;
    const circleShadow = isActive ? '0 0 20px rgba(124, 42, 232, 0.4)' : 'none';
    const labelColor = isActive ? textColor : mutedColor;
    const labelWeight = isActive ? 600 : 400;
    
    return `
      <td style="padding: 0 8px; text-align: center; vertical-align: top;">
        <div style="width: 36px; height: 36px; border-radius: 50%; margin: 0 auto 8px; line-height: 36px; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; background: ${circleBg}; color: ${circleColor}; box-shadow: ${circleShadow};">
          ${isComplete ? '✓' : stepNum}
        </div>
        <span style="font-family: 'Inter', sans-serif; font-size: 12px; font-weight: ${labelWeight}; color: ${labelColor};">${step}</span>
      </td>`;
  }).join('');

  return `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${bgColor};">
  <tr>
    <td style="padding: 32px; text-align: center;">
      <table cellpadding="0" cellspacing="0" role="presentation" style="margin: 0 auto;">
        <tr>
          ${stepsHTML}
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}
