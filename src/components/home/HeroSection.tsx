import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, TrendingUp, Shield } from "lucide-react";

const benefits = [
  { icon: Zap, text: "Быстрый запуск за 2-4 недели" },
  { icon: TrendingUp, text: "Рост заявок от 30%" },
  { icon: Shield, text: "Гарантия и поддержка" },
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container-wide section-padding">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-1.5 mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-body-sm text-muted-foreground">
              Принимаем проекты на январь 2025
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-h1 md:text-display mb-6 animate-fade-up delay-100">
            Создаём сайты и Telegram-ботов,{" "}
            <span className="text-gradient">которые продают</span>
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-up delay-200">
            Поможем привлечь клиентов и увеличить продажи в онлайне. 
            Разрабатываем под ключ для малого бизнеса и B2B по всей России.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-300">
            <Button variant="gold" size="xl" asChild>
              <Link to="/contacts">
                Обсудить проект
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/portfolio">Смотреть портфолио</Link>
            </Button>
          </div>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-up delay-400">
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
