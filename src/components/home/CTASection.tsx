import { Button } from "@/components/ui/button";
import { Send, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export const CTASection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5 animate-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container-wide" ref={ref}>
        <div 
          className={`text-center max-w-2xl mx-auto transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-h2 md:text-display mb-6">
            Готовы обсудить <span className="text-gradient">ваш проект?</span>
          </h2>
          <p 
            className={`text-body-lg text-muted-foreground mb-8 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Расскажите о своих задачах — подготовим предложение и оценим сроки. 
            Консультация бесплатная.
          </p>

          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <Button variant="gold" size="xl" className="animate-shine group" asChild>
              <a
                href="https://t.me/noirdig_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Обсудить проект
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div 
            className={`flex flex-wrap justify-center gap-6 text-body-sm text-muted-foreground transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            {[
              "Ответим в течение 2 часов",
              "Бесплатная консультация",
              "Оценка стоимости за 1 день",
            ].map((item, index) => (
              <div 
                key={item} 
                className={`flex items-center gap-2 transition-all duration-500 ${
                  isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <span className="text-primary">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
