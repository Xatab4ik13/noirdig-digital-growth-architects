import { ContactForm } from "@/components/shared/ContactForm";

export const CTASection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div>
            <h2 className="text-h2 md:text-display mb-6">
              Готовы обсудить <span className="text-gradient">ваш проект?</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              Расскажите о своих задачах — подготовим предложение и оценим сроки. 
              Консультация бесплатная.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <span className="text-muted-foreground">Ответим в течение 2 часов</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <span className="text-muted-foreground">Бесплатная консультация</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <span className="text-muted-foreground">Оценка стоимости за 1 день</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
