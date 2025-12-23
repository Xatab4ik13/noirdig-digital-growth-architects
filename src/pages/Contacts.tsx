import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactForm } from "@/components/shared/ContactForm";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

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

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact info */}
              <div>
                <h1 className="text-h1 md:text-display mb-6">
                  Давайте <span className="text-gradient">обсудим</span> ваш проект
                </h1>
                <p className="text-body-lg text-muted-foreground mb-8">
                  Расскажите о задачах — подготовим предложение и оценим сроки. 
                  Консультация бесплатная.
                </p>

                <div className="space-y-6">
                  <a
                    href="mailto:hello@noirdig.ru"
                    className="flex items-center gap-4 card-noir hover:border-primary transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">hello@noirdig.ru</div>
                    </div>
                  </a>

                  <a
                    href="tel:+79001234567"
                    className="flex items-center gap-4 card-noir hover:border-primary transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">+7 (900) 123-45-67</div>
                    </div>
                  </a>

                  <a
                    href="https://t.me/noirdig"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 card-noir hover:border-primary transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Send className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Telegram</div>
                      <div className="text-muted-foreground">@noirdig</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 card-noir">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Локация</div>
                      <div className="text-muted-foreground">Россия, работаем удалённо</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 card-noir">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Время ответа</div>
                      <div className="text-muted-foreground">В течение 2 часов (пн-пт, 10:00-19:00 МСК)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                <ContactForm
                  title="Оставить заявку"
                  subtitle="Заполните форму — мы свяжемся с вами"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contacts;
