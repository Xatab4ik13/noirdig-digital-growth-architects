import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Logo } from "@/components/shared/Logo";

const footerLinks = {
  services: [
    { name: "Сайты под ключ", href: "/services/websites" },
    { name: "Telegram-боты", href: "/services/telegram-bots" },
    { name: "Поддержка и развитие", href: "/services/support" },
    { name: "Контекстная реклама", href: "/services/ads" },
  ],
  company: [
    { name: "О студии", href: "/about" },
    { name: "Портфолио", href: "/portfolio" },
    { name: "Блог", href: "/blog" },
    { name: "Контакты", href: "/contacts" },
  ],
  legal: [
    { name: "Политика конфиденциальности", href: "/privacy-policy" },
    { name: "Согласие на обработку ПДн", href: "/consent" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <Logo size="sm" />
            </Link>
            <p className="text-muted-foreground text-body-sm mb-6">
              Поможем привлечь клиентов и увеличить продажи в онлайне. 
              Создаём сайты и Telegram-ботов для бизнеса.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@noirdig.ru"
                className="flex items-center gap-2 text-body-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@noirdig.ru
              </a>
              <a
                href="tel:+79001234567"
                className="flex items-center gap-2 text-body-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +7 (900) 123-45-67
              </a>
              <div className="flex items-center gap-2 text-body-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Россия, работаем удалённо
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-body-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-body-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Telegram */}
          <div>
            <h4 className="font-semibold mb-4">Мессенджер</h4>
            <a
              href="https://t.me/noirdig_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-3 rounded-lg transition-colors"
            >
              <Send className="h-5 w-5" />
              <span className="font-medium">Telegram</span>
            </a>
            <p className="text-body-sm text-muted-foreground mt-3">
              Отвечаем в течение 2 часов в рабочее время
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-muted-foreground">
            © {new Date().getFullYear()} NOIRDIG. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-body-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
