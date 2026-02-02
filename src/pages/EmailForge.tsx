import { useState } from "react";
import { Copy, Check, Mail, Handshake, MessageSquare, AlertTriangle, Monitor, Smartphone, Sun, Moon } from "lucide-react";
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
  getAdminAlertHTML
} from "@/components/email/templates";

type TemplateName = 'beta-welcome' | 'partnership' | 'feedback' | 'admin-alert';
type ViewWidth = 375 | 600;
type ThemeMode = 'light' | 'dark';

const templates = [
  { id: 'beta-welcome' as const, label: 'Beta Welcome', icon: Mail },
  { id: 'partnership' as const, label: 'Partnership Inquiry', icon: Handshake },
  { id: 'feedback' as const, label: 'Feedback Acknowledgement', icon: MessageSquare },
  { id: 'admin-alert' as const, label: 'Admin Alert', icon: AlertTriangle },
];

export default function EmailForge() {
  const [activeTemplate, setActiveTemplate] = useState<TemplateName>('beta-welcome');
  const [viewWidth, setViewWidth] = useState<ViewWidth>(600);
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [copied, setCopied] = useState(false);

  const handleCopyHTML = () => {
    let html = '';
    switch (activeTemplate) {
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
    }
    
    navigator.clipboard.writeText(html);
    setCopied(true);
    toast.success('HTML copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const renderTemplate = () => {
    switch (activeTemplate) {
      case 'beta-welcome':
        return <BetaWelcomeTemplate theme={theme} />;
      case 'partnership':
        return <PartnershipInquiryTemplate theme={theme} />;
      case 'feedback':
        return <FeedbackAcknowledgementTemplate theme={theme} />;
      case 'admin-alert':
        return <AdminAlertTemplate theme={theme} />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-72 border-r border-border bg-card flex flex-col">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-border">
          <h1 className="font-display text-xl font-bold gradient-text">Email Forge</h1>
          <p className="text-sm text-muted-foreground mt-1">Email Template Preview System</p>
        </div>
        
        {/* Template Navigation */}
        <nav className="flex-1 p-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-2">
            Templates
          </p>
          <ul className="space-y-1">
            {templates.map((template) => {
              const Icon = template.icon;
              const isActive = activeTemplate === template.id;
              
              return (
                <li key={template.id}>
                  <button
                    onClick={() => setActiveTemplate(template.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary/10 text-primary border border-primary/20' 
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {template.label}
                  </button>
                </li>
              );
            })}
          </ul>
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
                    <Sun className="w-4 h-4 text-amber-500" />
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
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
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
                <span className="font-medium">{viewWidth}px</span> · {theme === 'dark' ? 'Dark Mode (The Forge)' : 'Light Mode (The Gallery)'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
