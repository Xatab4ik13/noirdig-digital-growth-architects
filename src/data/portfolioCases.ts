// Portfolio hero images
import lawFirmHero from "@/assets/portfolio/law-firm-hero.jpg";
import dentalHero from "@/assets/portfolio/dental-hero.jpg";
import photoHero from "@/assets/portfolio/photo-hero.jpg";
import barberHero from "@/assets/portfolio/barber-hero.jpg";
import banyaHero from "@/assets/portfolio/banya-hero.jpg";
import groomingHero from "@/assets/portfolio/grooming-hero.jpg";

// Portfolio gallery images
import lawFirmServices from "@/assets/portfolio/law-firm-services.jpg";
import lawFirmContact from "@/assets/portfolio/law-firm-contact.jpg";
import dentalCatalog from "@/assets/portfolio/dental-catalog.jpg";
import dentalCart from "@/assets/portfolio/dental-cart.jpg";
import photoGallery from "@/assets/portfolio/photo-gallery.jpg";
import photoPrices from "@/assets/portfolio/photo-prices.jpg";
import barberTeam from "@/assets/portfolio/barber-team.jpg";
import barberBot from "@/assets/portfolio/barber-bot.jpg";
import banyaProjects from "@/assets/portfolio/banya-projects.jpg";
import banyaCalculator from "@/assets/portfolio/banya-calculator.jpg";
import groomingPrices from "@/assets/portfolio/grooming-prices.jpg";
import groomingGallery from "@/assets/portfolio/grooming-gallery.jpg";

export interface PortfolioCase {
  id: string;
  category: string;
  industry: string;
  title: string;
  description: string;
  fullDescription: string;
  heroImage: string;
  heroImageAlt: string;
  gallery: {
    image: string;
    alt: string;
    title: string;
  }[];
  stack: string[];
  timeline: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tasks: string[];
  kpiDetails: {
    vitals: { label: string; value: string }[];
    conversion: { label: string; value: string }[];
  };
}

export const portfolioCases: PortfolioCase[] = [
  {
    id: "pravo-i-partnery",
    category: "Корпоративный сайт",
    industry: "Юридические услуги",
    title: "Право и Партнёры — юридическая компания",
    description: "Разработали премиальный корпоративный сайт для юридической компании с формой записи на консультацию, интеграцией с CRM и полной SEO-оптимизацией.",
    fullDescription: "Юридическая компания «Право и Партнёры» обратилась к нам для создания современного корпоративного сайта, который подчеркнёт статус компании и будет эффективно конвертировать посетителей в клиентов. Мы разработали премиальный дизайн в тёмно-синих тонах с золотыми акцентами, создали продающую структуру с чётким путём до заявки и интегрировали форму записи на консультацию с уведомлениями в Telegram.",
    heroImage: lawFirmHero,
    heroImageAlt: "Главная страница корпоративного сайта юридической компании Право и Партнёры с тёмно-синим дизайном и золотыми акцентами",
    gallery: [
      {
        image: lawFirmServices,
        alt: "Страница услуг юридической компании с описанием направлений: корпоративное право, судебные споры, банкротство",
        title: "Страница услуг",
      },
      {
        image: lawFirmContact,
        alt: "Страница контактов юридической компании с формой обратной связи и картой офиса в Москве",
        title: "Контакты и форма заявки",
      },
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "Telegram API"],
    timeline: "3 недели",
    metrics: [
      { label: "PageSpeed", value: "94" },
      { label: "Конверсия", value: "4.2%" },
    ],
    tasks: [
      "Разработали премиальный дизайн в корпоративном стиле с акцентом на доверие",
      "Создали продающую структуру: услуги, кейсы, команда, отзывы клиентов",
      "Интегрировали форму записи на консультацию с уведомлениями в Telegram",
      "Оптимизировали для SEO: мета-теги, schema.org для юридических услуг",
      "Настроили аналитику: цели, события, UTM-разметка",
      "Адаптировали под все устройства с фокусом на мобильную версию",
    ],
    kpiDetails: {
      vitals: [
        { label: "LCP", value: "≤ 1.8 сек" },
        { label: "CLS", value: "≤ 0.08" },
        { label: "INP", value: "≤ 180 мс" },
        { label: "PageSpeed Mobile", value: "94" },
      ],
      conversion: [
        { label: "CR формы консультации", value: "4.2%" },
        { label: "Рост органического трафика", value: "+45%" },
      ],
    },
  },
  {
    id: "dentalcare-shop",
    category: "Интернет-магазин",
    industry: "E-commerce",
    title: "DentalCare — магазин товаров для гигиены полости рта",
    description: "Создали современный интернет-магазин с каталогом 500+ товаров, интеграцией оплаты и доставки. Минималистичный дизайн в мятных тонах подчёркивает свежесть бренда.",
    fullDescription: "Интернет-магазин DentalCare специализируется на продаже товаров для гигиены полости рта: электрические зубные щётки, пасты, ополаскиватели, зубная нить. Мы создали полноценную e-commerce платформу с каталогом 500+ товаров, системой фильтрации, корзиной, личным кабинетом и интеграцией с платёжными системами и службами доставки.",
    heroImage: dentalHero,
    heroImageAlt: "Главная страница интернет-магазина DentalCare с товарами для гигиены полости рта в минималистичном мятном дизайне",
    gallery: [
      {
        image: dentalCatalog,
        alt: "Каталог товаров интернет-магазина DentalCare с фильтрами и ценами в рублях",
        title: "Каталог товаров",
      },
      {
        image: dentalCart,
        alt: "Корзина интернет-магазина DentalCare с товарами, суммой заказа и кнопкой оформления",
        title: "Корзина и оформление заказа",
      },
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "PostgreSQL", "Stripe"],
    timeline: "6 недель",
    metrics: [
      { label: "PageSpeed", value: "92" },
      { label: "Рост продаж", value: "+65%" },
    ],
    tasks: [
      "Разработали каталог с умными фильтрами и быстрым поиском",
      "Создали систему корзины и оформления заказа с интеграцией оплаты",
      "Интегрировали доставку: СДЭК, Почта России, курьерская доставка",
      "Настроили личный кабинет: история заказов, избранное, адреса доставки",
      "Оптимизировали карточки товаров для SEO и конверсии",
      "Подключили e-commerce аналитику и отслеживание воронки продаж",
    ],
    kpiDetails: {
      vitals: [
        { label: "LCP", value: "≤ 2.0 сек" },
        { label: "CLS", value: "≤ 0.10" },
        { label: "INP", value: "≤ 200 мс" },
        { label: "PageSpeed Mobile", value: "92" },
      ],
      conversion: [
        { label: "CR корзины в покупку", value: "3.8%" },
        { label: "Рост среднего чека", value: "+22%" },
      ],
    },
  },
  {
    id: "nendea-studio",
    category: "Сайт-портфолио",
    industry: "Фотография",
    title: "Nendea Studio — фотостудия",
    description: "Разработали креативный сайт для фотостудии с галереей работ, системой бронирования и тёмным дизайном, который подчёркивает художественность фотографий.",
    fullDescription: "Фотостудия Nendea Studio специализируется на свадебной, портретной и предметной съёмке. Мы создали элегантный тёмный сайт-портфолио, который подчёркивает художественность работ фотографов. Галерея с лёгкой навигацией, страница цен с пакетами услуг и форма бронирования — всё для удобства клиентов.",
    heroImage: photoHero,
    heroImageAlt: "Главная страница сайта фотостудии Nendea Studio с профессиональными фотографиями и тёмным элегантным дизайном",
    gallery: [
      {
        image: photoGallery,
        alt: "Галерея работ фотостудии Nendea Studio со свадебными и портретными фотографиями",
        title: "Галерея работ",
      },
      {
        image: photoPrices,
        alt: "Страница цен фотостудии с пакетами услуг: портретная, свадебная, предметная съёмка",
        title: "Цены и пакеты",
      },
    ],
    stack: ["React", "Framer Motion", "Tailwind CSS", "Lightbox"],
    timeline: "4 недели",
    metrics: [
      { label: "PageSpeed", value: "96" },
      { label: "Рост бронирований", value: "+120%" },
    ],
    tasks: [
      "Разработали тёмный элегантный дизайн для презентации работ",
      "Создали галерею с фильтрацией по категориям и lightbox-просмотром",
      "Интегрировали систему бронирования с выбором даты и времени",
      "Оптимизировали изображения: WebP, lazy-load, адаптивные размеры",
      "Добавили плавные анимации для премиального ощущения",
      "Настроили SEO для фотографов: локальное продвижение, schema.org",
    ],
    kpiDetails: {
      vitals: [
        { label: "LCP", value: "≤ 1.6 сек" },
        { label: "CLS", value: "≤ 0.05" },
        { label: "INP", value: "≤ 150 мс" },
        { label: "PageSpeed Mobile", value: "96" },
      ],
      conversion: [
        { label: "CR формы бронирования", value: "6.2%" },
        { label: "Время на сайте", value: "4:30 мин" },
      ],
    },
  },
  {
    id: "barber-craft",
    category: "Лендинг + Telegram-бот",
    industry: "Бьюти",
    title: "Barber Craft — барбершоп",
    description: "Создали стильный сайт в винтажном стиле и интегрировали Telegram-бот для онлайн-записи. Клиенты записываются к мастеру прямо в мессенджере без звонков.",
    fullDescription: "Барбершоп Barber Craft хотел выделиться среди конкурентов и автоматизировать процесс записи. Мы разработали сайт в винтажном стиле с текстурами кожи и дерева, а главное — интегрировали Telegram-бот для онлайн-записи. Теперь клиенты выбирают услугу, мастера, дату и время прямо в мессенджере, а администратор получает уведомления.",
    heroImage: barberHero,
    heroImageAlt: "Главная страница сайта барбершопа Barber Craft с винтажным дизайном и кнопкой записи через Telegram",
    gallery: [
      {
        image: barberTeam,
        alt: "Страница мастеров барбершопа Barber Craft с фотографиями и описанием специализации каждого барбера",
        title: "Наши мастера",
      },
      {
        image: barberBot,
        alt: "Telegram-бот барбершопа Barber Craft для онлайн-записи с выбором услуги, мастера и времени",
        title: "Telegram-бот для записи",
      },
    ],
    stack: ["React", "Tailwind CSS", "Telegram Bot API", "Node.js"],
    timeline: "4 недели",
    metrics: [
      { label: "Конверсия в запись", value: "32%" },
      { label: "Снижение нагрузки", value: "-45%" },
    ],
    tasks: [
      "Разработали винтажный дизайн с текстурами кожи и дерева",
      "Создали страницу мастеров с портфолио и расписанием",
      "Интегрировали Telegram-бот: выбор услуги → мастер → дата → время",
      "Настроили уведомления для администратора и напоминания клиентам",
      "Добавили прайс-лист с описанием услуг и длительностью",
      "Оптимизировали для локального SEO: Яндекс.Карты, отзывы",
    ],
    kpiDetails: {
      vitals: [
        { label: "LCP", value: "≤ 1.9 сек" },
        { label: "CLS", value: "≤ 0.08" },
        { label: "INP", value: "≤ 180 мс" },
        { label: "PageSpeed Mobile", value: "93" },
      ],
      conversion: [
        { label: "CR записи через бот", value: "32%" },
        { label: "Снижение пропущенных записей", value: "-60%" },
      ],
    },
  },
  {
    id: "banya-master",
    category: "Корпоративный сайт",
    industry: "Строительство",
    title: "БаняМастер — строительство банных комплексов",
    description: "Разработали сайт для строительной компании с каталогом проектов, калькулятором стоимости и портфолио. Тёплые деревянные тона передают атмосферу бани.",
    fullDescription: "Компания «БаняМастер» строит традиционные русские бани из сибирского кедра, сосны и лиственницы. Мы создали сайт, который демонстрирует качество работ и помогает клиентам выбрать проект. Каталог готовых бань с фильтрацией по размеру и цене, калькулятор стоимости и форма заявки на расчёт — всё для удобства заказчиков.",
    heroImage: banyaHero,
    heroImageAlt: "Главная страница сайта компании БаняМастер со строительством бань из сибирского кедра",
    gallery: [
      {
        image: banyaProjects,
        alt: "Каталог проектов бань компании БаняМастер с ценами и характеристиками",
        title: "Каталог проектов",
      },
      {
        image: banyaCalculator,
        alt: "Калькулятор стоимости бани с выбором размера, материала и дополнительных опций",
        title: "Калькулятор стоимости",
      },
    ],
    stack: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    timeline: "5 недель",
    metrics: [
      { label: "PageSpeed", value: "91" },
      { label: "Рост заявок", value: "+85%" },
    ],
    tasks: [
      "Разработали тёплый дизайн с деревянными текстурами и природными тонами",
      "Создали каталог проектов с фильтрацией по размеру, материалу, цене",
      "Разработали интерактивный калькулятор стоимости строительства",
      "Добавили портфолио выполненных работ с фото и отзывами",
      "Интегрировали форму заявки с уведомлениями в Telegram и email",
      "Оптимизировали для SEO: «строительство бань», «бани под ключ»",
    ],
    kpiDetails: {
      vitals: [
        { label: "LCP", value: "≤ 2.1 сек" },
        { label: "CLS", value: "≤ 0.10" },
        { label: "INP", value: "≤ 200 мс" },
        { label: "PageSpeed Mobile", value: "91" },
      ],
      conversion: [
        { label: "CR формы расчёта", value: "5.4%" },
        { label: "Рост органического трафика", value: "+120%" },
      ],
    },
  },
  {
    id: "fluffy-paws",
    category: "Лендинг",
    industry: "Груминг",
    title: "Fluffy Paws — груминг-салон в Москве",
    description: "Создали яркий и дружелюбный сайт для груминг-салона с онлайн-записью, галереей работ и прайс-листом. Пастельные тона и милые фото привлекают клиентов.",
    fullDescription: "Груминг-салон Fluffy Paws в Москве (м. Тверская) предлагает полный спектр услуг по уходу за собаками и кошками. Мы создали привлекательный сайт в пастельных розовых тонах с галереей «До и После», подробным прайс-листом и удобной формой онлайн-записи. Сайт подчёркивает заботу о питомцах и профессионализм мастеров.",
    heroImage: groomingHero,
    heroImageAlt: "Главная страница сайта груминг-салона Fluffy Paws в Москве с милыми питомцами и пастельным дизайном",
    gallery: [
      {
        image: groomingPrices,
        alt: "Прайс-лист груминг-салона Fluffy Paws с ценами на стрижку собак и кошек",
        title: "Прайс-лист",
      },
      {
        image: groomingGallery,
        alt: "Галерея До и После груминг-салона Fluffy Paws с результатами стрижек питомцев",
        title: "Галерея До и После",
      },
    ],
    stack: ["React", "Tailwind CSS", "Telegram API"],
    timeline: "3 недели",
    metrics: [
      { label: "PageSpeed", value: "95" },
      { label: "Конверсия", value: "5.8%" },
    ],
    tasks: [
      "Разработали дружелюбный дизайн в пастельных тонах с милыми фото",
      "Создали галерею «До и После» с фильтрацией по типу питомца",
      "Добавили подробный прайс-лист с описанием услуг",
      "Интегрировали форму онлайн-записи с выбором услуги и времени",
      "Оптимизировали для локального SEO: «груминг Москва», «стрижка собак»",
      "Добавили раздел с отзывами и фотографиями довольных питомцев",
    ],
    kpiDetails: {
      vitals: [
        { label: "LCP", value: "≤ 1.7 сек" },
        { label: "CLS", value: "≤ 0.06" },
        { label: "INP", value: "≤ 160 мс" },
        { label: "PageSpeed Mobile", value: "95" },
      ],
      conversion: [
        { label: "CR формы записи", value: "5.8%" },
        { label: "Повторные визиты", value: "68%" },
      ],
    },
  },
];

export const getCaseById = (id: string): PortfolioCase | undefined => {
  return portfolioCases.find((c) => c.id === id);
};
