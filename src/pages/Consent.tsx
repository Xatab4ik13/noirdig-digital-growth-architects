import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

const Consent = () => {
  return (
    <>
      <Helmet>
        <title>Согласие на обработку персональных данных — NOIRDIG</title>
        <meta
          name="description"
          content="Согласие на обработку персональных данных при использовании форм на сайте NOIRDIG."
        />
        <link rel="canonical" href="https://noirdig.ru/consent/" />
      </Helmet>

      <Layout>
        <section className="section-padding">
          <div className="container-narrow">
            <Breadcrumbs
              items={[{ label: "Согласие на обработку ПДн", href: "/consent" }]}
            />

            <h1 className="text-h1 mb-8">Согласие на обработку персональных данных</h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Заполняя форму на сайте noirdig.ru и нажимая кнопку отправки, Вы даёте согласие 
                на обработку Ваших персональных данных в соответствии с Федеральным законом 
                от 27.07.2006 № 152-ФЗ «О персональных данных».
              </p>

              <h2 className="text-h3 text-foreground mt-8">Вы подтверждаете, что:</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Даёте согласие на обработку своих персональных данных (имя, телефон, email) 
                  Оператору — NOIRDIG
                </li>
                <li>
                  Согласие даётся на совершение действий: сбор, запись, систематизацию, 
                  накопление, хранение, уточнение, извлечение, использование, передачу, 
                  обезличивание, блокирование, удаление, уничтожение
                </li>
                <li>
                  Согласие даётся с целью обработки заявки, связи с Вами, направления 
                  коммерческих предложений
                </li>
                <li>
                  Согласие действует до момента его отзыва путём направления письменного 
                  уведомления на email: hello@noirdig.ru
                </li>
              </ul>

              <h2 className="text-h3 text-foreground mt-8">Ваши права</h2>
              <p>
                Вы имеете право на получение информации об обработке Ваших персональных данных, 
                требовать их уточнения, блокирования или уничтожения, а также отозвать данное 
                согласие, направив письменное уведомление на email: hello@noirdig.ru
              </p>

              <p className="mt-8">
                Ознакомьтесь также с{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  Политикой обработки персональных данных
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Consent;
