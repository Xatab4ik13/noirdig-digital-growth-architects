import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const benefits = [
  { icon: Zap, text: "Запуск от 3 дней" },
  { icon: TrendingUp, text: "Рост заявок от 30%" },
  { icon: Shield, text: "Гарантия и поддержка" },
];

const rotatingWords = ["продают", "конвертируют", "работают 24/7", "приносят заявки"];

export const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container-wide section-padding">
        <div className="max-w-4xl">

          {/* Headline with animated word */}
          <h1 className="text-h1 md:text-display mb-6">
            <span className="inline-block animate-fade-in">Создаём сайты и Telegram-ботов,</span>{" "}
            <span className="text-gradient relative inline-block min-w-[200px] md:min-w-[320px]">
              <span 
                className={`inline-block transition-all duration-300 ${
                  isAnimating 
                    ? "opacity-0 translate-y-4" 
                    : "opacity-100 translate-y-0"
                }`}
              >
                которые {rotatingWords[currentWordIndex]}
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Поможем привлечь клиентов и увеличить продажи в онлайне. 
            Разрабатываем под ключ для малого бизнеса и B2B по всей России.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="gold" size="xl" asChild className="group">
              <a href="https://t.me/noirdig_bot" target="_blank" rel="noopener noreferrer">
                Обсудить проект
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild className="hover:scale-[1.02] transition-transform">
              <Link to="/portfolio">Смотреть портфолио</Link>
            </Button>
          </div>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.text} 
                className="flex items-center gap-2 animate-fade-in group cursor-default"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <benefit.icon className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                <span className="text-body-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};