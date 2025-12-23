import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from "lucide-react";

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Контакты — NOIRDIG</title>
        <meta
          name="description"
          content="Свяжитесь с NOIRDIG для обсуждения вашего проекта. Email, телефон, Telegram. Отвечаем в течение 2 часов."
        />
        <link rel="canonical" href="https://noirdig.ru/contacts/" />
      </Helmet>

      <Layout>
        <section className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={[{ label: "Контакты", href: "/contacts" }]} />

            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-h1 md:text-display mb-6">
                Давайте <span className="text-gradient">обсудим</span> ваш проект
              </h1>
              <p className="text-body-lg text-muted-foreground mb-8">
                Расскажите о задачах — подготовим предложение и оценим сроки. 
                Консультация бесплатная.
              </p>
              
              {/* Main CTA - Telegram */}
              <Button variant="gold" size="xl" asChild className="mb-4">
                <a
                  href="https://t.me/noirdig"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="h-5 w-5" />
                  Написать в Telegram
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <p className="text-body-sm text-muted-foreground">
                Отвечаем в течение 2 часов в рабочее время
              </p>
            </div>

            {/* Contact cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <a
                href="mailto:hello@noirdig.ru"
                className="card-noir text-center hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="font-semibold mb-1">Email</div>
                <div className="text-muted-foreground text-body-sm">hello@noirdig.ru</div>
              </a>

              <a
                href="tel:+79001234567"
                className="card-noir text-center hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="font-semibold mb-1">Телефон</div>
                <div className="text-muted-foreground text-body-sm">+7 (900) 123-45-67</div>
              </a>

              <div className="card-noir text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="font-semibold mb-1">Локация</div>
                <div className="text-muted-foreground text-body-sm">Работаем удалённо</div>
              </div>

              <div className="card-noir text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="font-semibold mb-1">Время ответа</div>
                <div className="text-muted-foreground text-body-sm">До 2 часов</div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contacts;
