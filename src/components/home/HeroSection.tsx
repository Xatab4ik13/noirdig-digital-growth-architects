import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const benefits = [
  { icon: Zap, text: "Запуск от 3 дней" },
  { icon: TrendingUp, text: "Рост заявок от 30%" },
  { icon: Shield, text: "Гарантия и поддержка" },
];

const slogans = [
  "Превращаем посетителей в клиентов",
  "Автоматизируем продажи 24/7",
  "Увеличиваем конверсию в 2-3 раза",
  "Создаём системы для роста бизнеса",
  "Экономим ваше время и бюджет",
];

export const HeroSection = () => {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const slogan = slogans[currentSlogan];
    const typeSpeed = isDeleting ? 30 : 50;
    const pauseTime = 2000;

    if (!isDeleting && displayedText === slogan) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? slogan.substring(0, prev.length - 1)
          : slogan.substring(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentSlogan]);

  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container-wide section-padding">
        <div className="max-w-4xl">

          {/* Headline - no animation delay for faster LCP */}
          <h1 className="text-h1 md:text-display mb-6">
            Создаём сайты и Telegram-ботов,{" "}
            <span className="text-gradient">которые продают</span>
          </h1>

          {/* Animated Subheadline */}
          <div className="h-16 md:h-12 mb-8 max-w-2xl">
            <p className="text-body-lg md:text-xl text-muted-foreground">
              {displayedText}
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="gold" size="xl" asChild>
              <a href="https://t.me/noirdig_bot" target="_blank" rel="noopener noreferrer">
                Обсудить проект
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/portfolio">Смотреть портфолио</Link>
            </Button>
          </div>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.text} className="flex items-center gap-2">
                <benefit.icon className="h-5 w-5 text-primary" />
                <span className="text-body-sm text-muted-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
