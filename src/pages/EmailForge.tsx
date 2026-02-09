import { useState } from "react";
import { Copy, Check, Mail, Handshake, MessageSquare, AlertTriangle, Monitor, Smartphone, Sun, Moon, ShieldCheck, CheckCircle, Trophy, Award, KeyRound, Newspaper, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { 
  BetaWelcomeTemplate, 
  getBetaWelcomeHTML,
  PartnershipInquiryTemplate, 
  getPartnershipInquiryHTML,
  FeedbackAcknowledgementTemplate, 
  getFeedbackAcknowledgementHTML,
  AdminAlertTemplate, 
  getAdminAlertHTML,
  EmailVerificationTemplate,
  getEmailVerificationHTML,
  EmailVerifiedTemplate,
  getEmailVerifiedHTML,
  FirstPatternMilestoneTemplate,
  getFirstPatternMilestoneHTML,
  BetaMilestoneTemplate,
  getBetaMilestoneHTML,
  PasswordResetTemplate,
  getPasswordResetHTML,
  BetaUpdateTemplate,
  getBetaUpdateHTML
} from "@/components/email/templates";
import {
  BetaWelcomeV2,
  getBetaWelcomeV2HTML,
  EmailVerificationV2,
  getEmailVerificationV2HTML,
  PasswordResetV2,
  getPasswordResetV2HTML,
  MilestoneV2,
  getMilestoneV2HTML,
  AdminAlertV2,
  getAdminAlertV2HTML
} from "@/components/email/v2/templates";

type TemplateName = 
  | 'beta-welcome' 
  | 'partnership' 
  | 'feedback' 
  | 'admin-alert'
  | 'email-verification'
  | 'email-verified'
  | 'first-pattern'
  | 'beta-milestone'
  | 'password-reset'
  | 'beta-update';

type TemplateNameV2 = 
  | 'beta-welcome-v2'
  | 'email-verification-v2'
  | 'password-reset-v2'
  | 'milestone-v2'
  | 'admin-alert-v2';

type ViewWidth = 375 | 600;
type ThemeMode = 'light' | 'dark';
type DesignVersion = 'v1' | 'v2';

type TemplateCategory = 'auth' | 'beta' | 'milestones' | 'admin';

interface TemplateConfig {
  id: TemplateName;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  category: TemplateCategory;
}

interface TemplateConfigV2 {
  id: TemplateNameV2;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  category: TemplateCategory;
}

const templates: TemplateConfig[] = [
  // Authentication Emails
  { id: 'email-verification', label: 'Verify Email', icon: ShieldCheck, category: 'auth' },
  { id: 'email-verified', label: 'Email Verified', icon: CheckCircle, category: 'auth' },
  { id: 'password-reset', label: 'Password Reset', icon: KeyRound, category: 'auth' },
  // Beta Journey
  { id: 'beta-welcome', label: 'Beta Welcome', icon: Mail, category: 'beta' },
  { id: 'beta-update', label: 'Beta Update', icon: Newspaper, category: 'beta' },
  // Milestones & Achievements
  { id: 'first-pattern', label: 'First Pattern', icon: Trophy, category: 'milestones' },
  { id: 'beta-milestone', label: 'Achievement', icon: Award, category: 'milestones' },
  // Form Responses & Admin
  { id: 'partnership', label: 'Partnership Inquiry', icon: Handshake, category: 'admin' },
  { id: 'feedback', label: 'Feedback Received', icon: MessageSquare, category: 'admin' },
  { id: 'admin-alert', label: 'Admin Alert', icon: AlertTriangle, category: 'admin' },
];

const templatesV2: TemplateConfigV2[] = [
  // Authentication Emails
  { id: 'email-verification-v2', label: 'Verify Email', icon: ShieldCheck, category: 'auth' },
  { id: 'password-reset-v2', label: 'Password Reset', icon: KeyRound, category: 'auth' },
  // Beta Journey
  { id: 'beta-welcome-v2', label: 'Beta Welcome', icon: Mail, category: 'beta' },
  // Milestones & Achievements
  { id: 'milestone-v2', label: 'Milestone', icon: Trophy, category: 'milestones' },
  // Admin
  { id: 'admin-alert-v2', label: 'Admin Alert', icon: AlertTriangle, category: 'admin' },
];

const categoryLabels: Record<TemplateCategory, string> = {
  auth: 'Authentication',
  beta: 'Beta Journey',
  milestones: 'Milestones',
  admin: 'Admin & Responses'
};

export default function EmailForge() {
  const [activeTemplate, setActiveTemplate] = useState<TemplateName | TemplateNameV2>('beta-welcome');
  const [viewWidth, setViewWidth] = useState<ViewWidth>(600);
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [copied, setCopied] = useState(false);
  const [designVersion, setDesignVersion] = useState<DesignVersion>('v1');

  const handleCopyHTML = () => {
    let html = '';
    
    if (designVersion === 'v1') {
      switch (activeTemplate as TemplateName) {
        case 'beta-welcome':
          html = getBetaWelcomeHTML(theme);
          break;
        case 'partnership':
          html = getPartnershipInquiryHTML(theme);
          break;
        case 'feedback':
          html = getFeedbackAcknowledgementHTML(theme);
          break;
        case 'admin-alert':
          html = getAdminAlertHTML(theme);
          break;
        case 'email-verification':
          html = getEmailVerificationHTML(theme);
          break;
        case 'email-verified':
          html = getEmailVerifiedHTML(theme);
          break;
        case 'first-pattern':
          html = getFirstPatternMilestoneHTML(theme);
          break;
        case 'beta-milestone':
          html = getBetaMilestoneHTML(theme);
          break;
        case 'password-reset':
          html = getPasswordResetHTML(theme);
          break;
        case 'beta-update':
          html = getBetaUpdateHTML(theme);
          break;
      }
    } else {
      switch (activeTemplate as TemplateNameV2) {
        case 'beta-welcome-v2':
          html = getBetaWelcomeV2HTML(theme);
          break;
        case 'email-verification-v2':
          html = getEmailVerificationV2HTML(theme);
          break;
        case 'password-reset-v2':
          html = getPasswordResetV2HTML(theme);
          break;
        case 'milestone-v2':
          html = getMilestoneV2HTML(theme);
          break;
        case 'admin-alert-v2':
          html = getAdminAlertV2HTML(theme);
          break;
      }
    }
    
    navigator.clipboard.writeText(html);
    setCopied(true);
    toast.success('HTML copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const renderTemplate = () => {
    if (designVersion === 'v1') {
      switch (activeTemplate as TemplateName) {
        case 'beta-welcome':
          return <BetaWelcomeTemplate theme={theme} />;
        case 'partnership':
          return <PartnershipInquiryTemplate theme={theme} />;
        case 'feedback':
          return <FeedbackAcknowledgementTemplate theme={theme} />;
        case 'admin-alert':
          return <AdminAlertTemplate theme={theme} />;
        case 'email-verification':
          return <EmailVerificationTemplate theme={theme} />;
        case 'email-verified':
          return <EmailVerifiedTemplate theme={theme} />;
        case 'first-pattern':
          return <FirstPatternMilestoneTemplate theme={theme} />;
        case 'beta-milestone':
          return <BetaMilestoneTemplate theme={theme} />;
        case 'password-reset':
          return <PasswordResetTemplate theme={theme} />;
        case 'beta-update':
          return <BetaUpdateTemplate theme={theme} />;
        default:
          return <BetaWelcomeTemplate theme={theme} />;
      }
    } else {
      switch (activeTemplate as TemplateNameV2) {
        case 'beta-welcome-v2':
          return <BetaWelcomeV2 theme={theme} />;
        case 'email-verification-v2':
          return <EmailVerificationV2 theme={theme} />;
        case 'password-reset-v2':
          return <PasswordResetV2 theme={theme} />;
        case 'milestone-v2':
          return <MilestoneV2 theme={theme} />;
        case 'admin-alert-v2':
          return <AdminAlertV2 theme={theme} />;
        default:
          return <BetaWelcomeV2 theme={theme} />;
      }
    }
  };

  // Handle version switch - reset to first template of new version
  const handleVersionChange = (newVersion: DesignVersion) => {
    setDesignVersion(newVersion);
    if (newVersion === 'v1') {
      setActiveTemplate('beta-welcome');
    } else {
      setActiveTemplate('beta-welcome-v2');
    }
  };

  // Group templates by category
  const templatesByCategory = templates.reduce((acc, template) => {
    if (!acc[template.category]) {
      acc[template.category] = [];
    }
    acc[template.category].push(template);
    return acc;
  }, {} as Record<TemplateCategory, TemplateConfig[]>);

  const templatesByCategoryV2 = templatesV2.reduce((acc, template) => {
    if (!acc[template.category]) {
      acc[template.category] = [];
    }
    acc[template.category].push(template);
    return acc;
  }, {} as Record<TemplateCategory, TemplateConfigV2[]>);

  const categoryOrder: TemplateCategory[] = ['auth', 'beta', 'milestones', 'admin'];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-72 border-r border-border bg-card flex flex-col">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-border">
          <h1 className="font-display text-xl font-bold gradient-text">Email Forge</h1>
          <p className="text-sm text-muted-foreground mt-1">Email Template Preview System</p>
        </div>
        
        {/* Version Toggle */}
        <div className="px-4 py-3 border-b border-border">
          <div className="flex gap-1 p-1 bg-secondary rounded-lg">
            <button
              onClick={() => handleVersionChange('v1')}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                designVersion === 'v1'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Layers className="w-4 h-4" />
              V1 Vertical
            </button>
            <button
              onClick={() => handleVersionChange('v2')}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                designVersion === 'v2'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Layers className="w-4 h-4" />
              V2 Horizontal
            </button>
          </div>
        </div>
        
        {/* Template Navigation */}
        <nav className="flex-1 p-4 overflow-auto">
          {designVersion === 'v1' ? (
            // V1 Templates
            categoryOrder.map((category) => (
              <div key={category} className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 px-2">
                  {categoryLabels[category]}
                </p>
                <ul className="space-y-1">
                  {templatesByCategory[category]?.map((template) => {
                    const Icon = template.icon;
                    const isActive = activeTemplate === template.id;
                    
                    return (
                      <li key={template.id}>
                        <button
                          onClick={() => setActiveTemplate(template.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            isActive 
                              ? 'bg-primary/10 text-primary border border-primary/20' 
                              : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                          }`}
                        >
                          <Icon className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{template.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          ) : (
            // V2 Templates
            categoryOrder.map((category) => {
              const categoryTemplates = templatesByCategoryV2[category];
              if (!categoryTemplates || categoryTemplates.length === 0) return null;
              
              return (
                <div key={category} className="mb-4">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 px-2">
                    {categoryLabels[category]}
                  </p>
                  <ul className="space-y-1">
                    {categoryTemplates.map((template) => {
                      const Icon = template.icon;
                      const isActive = activeTemplate === template.id;
                      
                      return (
                        <li key={template.id}>
                          <button
                            onClick={() => setActiveTemplate(template.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                              isActive 
                                ? 'bg-primary/10 text-primary border border-primary/20' 
                                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                            }`}
                          >
                            <Icon className="w-4 h-4 flex-shrink-0" />
                            <span className="truncate">{template.label}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })
          )}
        </nav>
        
        {/* View Controls */}
        <div className="p-4 border-t border-border space-y-4">
          {/* Width Toggle */}
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Preview Width
            </p>
            <div className="flex gap-2">
              <Button
                variant={viewWidth === 375 ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewWidth(375)}
                className="flex-1 gap-2"
              >
                <Smartphone className="w-4 h-4" />
                Mobile
              </Button>
              <Button
                variant={viewWidth === 600 ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewWidth(600)}
                className="flex-1 gap-2"
              >
                <Monitor className="w-4 h-4" />
                Desktop
              </Button>
            </div>
          </div>
          
          {/* Theme Toggle */}
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Theme
            </p>
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                {theme === 'dark' ? (
                  <>
                    <Moon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">The Forge</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4 text-accent-foreground" />
                    <span className="text-sm font-medium">The Gallery</span>
                  </>
                )}
              </div>
              <Switch
                checked={theme === 'light'}
                onCheckedChange={(checked) => setTheme(checked ? 'light' : 'dark')}
              />
            </div>
          </div>
        </div>
        
        {/* Copy Button */}
        <div className="p-4 border-t border-border">
          <Button
            variant="gradient"
            size="lg"
            className="w-full gap-2"
            onClick={handleCopyHTML}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy HTML
              </>
            )}
          </Button>
        </div>
      </aside>
      
      {/* Main Preview Area */}
      <main className="flex-1 bg-secondary/30 p-8 overflow-auto">
        <div className="flex items-center justify-center min-h-full">
          <div 
            className="transition-all duration-300 ease-out"
            style={{ width: viewWidth }}
          >
            {/* Preview Frame */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-border/50">
              {/* Browser Chrome */}
              <div className="bg-muted/80 px-4 py-3 flex items-center gap-2 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent-foreground/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background/60 rounded-md px-3 py-1 text-xs text-muted-foreground font-mono">
                    mail.blanketsmith.com/{activeTemplate}
                  </div>
                </div>
              </div>
              
              {/* Email Content */}
              <div className="bg-background overflow-hidden">
                {renderTemplate()}
              </div>
            </div>
            
            {/* Template Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">{viewWidth}px</span> · {theme === 'dark' ? 'Dark Mode (The Forge)' : 'Light Mode (The Gallery)'} · {designVersion === 'v1' ? 'Vertical Logo' : 'Horizontal Logo'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
