import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "noirdig-cookie-consent";

type ConsentStatus = "accepted" | "declined" | null;

export const CookieBanner = () => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentStatus;
    if (!savedConsent) {
      // Small delay to avoid layout shift on page load
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
    setConsentStatus(savedConsent);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setConsentStatus("accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setConsentStatus("declined");
    setIsVisible(false);
  };

  if (consentStatus || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-4 duration-300">
      <div className="container max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-2xl p-4 md:p-6 shadow-xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">
                🍪 Мы используем cookies
              </h3>
              <p className="text-body-sm text-muted-foreground">
                Мы используем файлы cookie для улучшения работы сайта и анализа трафика. 
                Продолжая использовать сайт, вы соглашаетесь с{" "}
                <Link 
                  to="/privacy-policy" 
                  className="text-primary hover:underline"
                >
                  политикой конфиденциальности
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDecline}
                className="text-muted-foreground hover:text-foreground"
              >
                Отклонить
              </Button>
              <Button
                onClick={handleAccept}
                size="sm"
                className="bg-primary hover:bg-primary/90"
              >
                Принять
              </Button>
            </div>
            <button
              onClick={handleDecline}
              className="absolute top-3 right-3 md:hidden text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Закрыть"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
