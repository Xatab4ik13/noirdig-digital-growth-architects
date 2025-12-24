import { Button } from "@/components/ui/button";
import { Send, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-h2 md:text-display mb-6">
            Готовы обсудить <span className="text-gradient">ваш проект?</span>
          </h2>
          <p className="text-body-lg text-muted-foreground mb-8">
            Расскажите о своих задачах — подготовим предложение и оценим сроки. 
            Консультация бесплатная.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="gold" size="xl" asChild>
              <a
                href="https://t.me/noirdig_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="h-5 w-5" />
                Обсудить проект
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-body-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Ответим в течение 2 часов</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Бесплатная консультация</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Оценка стоимости за 1 день</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
