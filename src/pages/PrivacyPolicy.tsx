import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Политика конфиденциальности — NOIRDIG</title>
        <meta
          name="description"
          content="Политика обработки персональных данных NOIRDIG. Информация о сборе, хранении и защите ваших данных."
        />
        <link rel="canonical" href="https://noirdig.ru/privacy-policy/" />
      </Helmet>

      <Layout>
        <section className="section-padding">
          <div className="container-narrow">
            <Breadcrumbs
              items={[{ label: "Политика конфиденциальности", href: "/privacy-policy" }]}
            />

            <h1 className="text-h1 mb-8">Политика обработки персональных данных</h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Настоящая Политика конфиденциальности персональных данных (далее — Политика) 
                действует в отношении всей информации, которую NOIRDIG (далее — Оператор) может 
                получить о посетителе во время использования сайта noirdig.ru.
              </p>

              <h2 className="text-h3 text-foreground mt-8">1. Определение терминов</h2>
              <p>
                <strong>Персональные данные</strong> — любая информация, относящаяся к прямо или 
                косвенно определённому или определяемому физическому лицу (субъекту персональных данных).
              </p>
              <p>
                <strong>Обработка персональных данных</strong> — любое действие с персональными данными, 
                включая сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, 
                использование, передачу, обезличивание, блокирование, удаление, уничтожение.
              </p>

              <h2 className="text-h3 text-foreground mt-8">2. Сбор персональных данных</h2>
              <p>Оператор может собирать следующие персональные данные:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Имя</li>
                <li>Номер телефона</li>
                <li>Адрес электронной почты</li>
                <li>Сообщение/описание проекта</li>
              </ul>

              <h2 className="text-h3 text-foreground mt-8">3. Цели обработки</h2>
              <p>Персональные данные обрабатываются в целях:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Связи с пользователем для обсуждения проекта</li>
                <li>Направления коммерческих предложений</li>
                <li>Исполнения договорных обязательств</li>
              </ul>

              <h2 className="text-h3 text-foreground mt-8">4. Защита персональных данных</h2>
              <p>
                Оператор принимает необходимые организационные и технические меры для защиты 
                персональных данных от неправомерного доступа, уничтожения, изменения, 
                блокирования, копирования, распространения.
              </p>

              <h2 className="text-h3 text-foreground mt-8">5. Права субъекта данных</h2>
              <p>
                Пользователь имеет право на получение информации об обработке своих персональных 
                данных, их уточнение, блокирование или уничтожение. Для этого необходимо 
                направить запрос на email: hello@noirdig.ru
              </p>

              <h2 className="text-h3 text-foreground mt-8">6. Изменение политики</h2>
              <p>
                Оператор вправе вносить изменения в настоящую Политику. Новая редакция вступает 
                в силу с момента её размещения на сайте.
              </p>

              <p className="mt-8">
                <strong>Дата последнего обновления:</strong> 15 декабря 2024 г.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
