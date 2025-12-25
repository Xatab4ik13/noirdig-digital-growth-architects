import monarchHero from "@/assets/portfolio/monarch-hero.jpg";
import monarchTeam from "@/assets/portfolio/monarch-team.jpg";
import monarchGallery from "@/assets/portfolio/monarch-gallery.jpg";
import balticgroomHero from "@/assets/portfolio/balticgroom-hero.jpg";
import balticgroomServices from "@/assets/portfolio/balticgroom-services.jpg";
import balticgroomAdvantages from "@/assets/portfolio/balticgroom-advantages.jpg";
import toprecordsHero from "@/assets/portfolio/toprecords-hero.jpg";
import toprecordsAbout from "@/assets/portfolio/toprecords-about.jpg";
import toprecordsBlog from "@/assets/portfolio/toprecords-blog.jpg";
import wowmidnightHero from "@/assets/portfolio/wowmidnight-hero.jpg";
import wowmidnightContent from "@/assets/portfolio/wowmidnight-content.jpg";
import wowmidnightFaq from "@/assets/portfolio/wowmidnight-faq.jpg";
import wowmidnightCart from "@/assets/portfolio/wowmidnight-cart.jpg";
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
    id: "monarch-barbershop",
    category: "Лендинг",
    industry: "Бьюти",
    title: "Monarch Barbershop — премиальный барбершоп",
    description: "Разработали стильный одностраничный сайт для барбершопа с интеграцией онлайн-записи через YCLIENTS, прайс-листом услуг и презентацией команды мастеров.",
    fullDescription: "Барбершоп Monarch — это премиальное мужское пространство, где клиенты получают качественные услуги от опытных барберов. Мы разработали современный лендинг в фирменных тёмно-зелёных тонах с акцентом на бирюзовый. Сайт включает полный прайс-лист с градацией мастеров (Барбер / Старший барбер / Топ-Барбер), блок акций и спецпредложений, раздел с командой и интеграцию с системой онлайн-записи YCLIENTS для удобного бронирования.",
    heroImage: monarchHero,
    heroImageAlt: "Главная страница сайта барбершопа Monarch с тёмно-зелёным дизайном и кнопкой записи",
    gallery: [
      {
        image: monarchHero,
        alt: "Главный экран сайта Monarch Barbershop с заголовком и кнопками записи",
        title: "Главная страница",
      },
      {
        image: monarchTeam,
        alt: "Секция команды барбершопа Monarch с фотографиями мастеров",
        title: "Команда мастеров",
      },
      {
        image: monarchGallery,
        alt: "Галерея услуг и подарочные сертификаты барбершопа Monarch",
        title: "Галерея и сертификаты",
      },
    ],
    stack: ["HTML/CSS", "JavaScript", "YCLIENTS API"],
    timeline: "2 недели",
    metrics: [
      { label: "PageSpeed", value: "92" },
      { label: "Конверсия записи", value: "8.5%" },
    ],
    tasks: [
      "Разработали премиальный дизайн в фирменных цветах бренда",
      "Создали структурированный прайс-лист с градацией мастеров",
      "Интегрировали онлайн-запись через YCLIENTS",
      "Добавили блок акций: «Счастливые часы», «Папа + сын», скидки для студентов",
      "Оптимизировали для мобильных устройств",
      "Настроили SEO для локального продвижения",
    ],
    kpiDetails: {
      vitals: [
        { label: "LCP", value: "≤ 2.0 сек" },
        { label: "CLS", value: "≤ 0.08" },
        { label: "INP", value: "≤ 180 мс" },
        { label: "PageSpeed Mobile", value: "92" },
      ],
      conversion: [
        { label: "CR онлайн-записи", value: "8.5%" },
        { label: "Снижение звонков", value: "-35%" },
      ],
    },
  },
  {
    id: "baltic-groom",
    category: "Лендинг",
    industry: "Груминг",
    title: "Baltic Groom — груминг-салон для собак и кошек",
    description: "Разработали современный лендинг для груминг-салона с удобной записью через мессенджеры, презентацией услуг и блоком преимуществ.",
    fullDescription: "Baltic Groom — профессиональный груминг-салон, где заботятся о собаках и кошках. Мы создали светлый, дружелюбный лендинг с акцентом на персиковые тона. Сайт включает полный каталог услуг (стрижка, экспресс-линька, тримминг, груминг кошек), блок преимуществ с гарантией качества, интеграцию с Telegram-ботом, WhatsApp и ВКонтакте для удобной записи клиентов.",
    heroImage: balticgroomHero,
    heroImageAlt: "Главная страница груминг-салона Baltic Groom с корги в ванной",
    gallery: [
      {
        image: balticgroomHero,
        alt: "Главный экран сайта Baltic Groom с собакой в ванной и кнопкой записи",
        title: "Главная страница",
      },
      {
        image: balticgroomServices,
        alt: "Секция услуг груминг-салона Baltic Groom с фотографиями собак и кошек",
        title: "Услуги салона",
      },
      {
        image: balticgroomAdvantages,
        alt: "Блок преимуществ Baltic Groom: опытные мастера, профессиональная косметика, гарантия",
        title: "Преимущества",
      },
    ],
    stack: ["Tilda", "Telegram Bot", "WhatsApp API"],
    timeline: "1.5 недели",
    metrics: [
      { label: "PageSpeed", value: "88" },
      { label: "Конверсия записи", value: "6.2%" },
    ],
    tasks: [
      "Разработали дружелюбный дизайн в светлых тонах с персиковыми акцентами",
      "Создали структурированный каталог услуг с фотографиями работ",
      "Интегрировали запись через Telegram-бот, WhatsApp и ВКонтакте",
      "Добавили блок преимуществ: опытные мастера, профессиональная косметика, гарантия 3 дня",
      "Оптимизировали для мобильных устройств",
      "Настроили SEO для локального продвижения",
    ],
    kpiDetails: {
      vitals: [
        { label: "LCP", value: "≤ 2.2 сек" },
        { label: "CLS", value: "≤ 0.1" },
        { label: "INP", value: "≤ 200 мс" },
        { label: "PageSpeed Mobile", value: "88" },
      ],
      conversion: [
        { label: "CR записи в мессенджерах", value: "6.2%" },
        { label: "Рост заявок", value: "+45%" },
      ],
    },
  },
  {
    id: "top-records",
    category: "Многостраничный сайт",
    industry: "Музыка",
    title: "Top Records — студия звукозаписи",
    description: "Разработали многостраничный сайт для студии звукозаписи с 15-летним опытом: блог, прайс-лист, интеграция аудиоплеера и современный тёмный дизайн.",
    fullDescription: "Top Records — профессиональная студия звукозаписи с более чем 15-летним опытом работы. Мы создали современный многостраничный сайт в тёмных тонах с фиолетово-оранжевыми акцентами. Проект включает страницы: главная с hero-секцией и аудиоплеером, о студии с презентацией оборудования и команды, блог со статьями о звукозаписи, прайс-лист услуг и контакты. Интегрирован кастомный аудиоплеер для прослушивания примеров работ.",
    heroImage: toprecordsHero,
    heroImageAlt: "Главная страница студии звукозаписи Top Records с аудиоплеером",
    gallery: [
      {
        image: toprecordsHero,
        alt: "Hero-секция сайта Top Records с микрофоном и кнопкой звонка",
        title: "Главная страница",
      },
      {
        image: toprecordsAbout,
        alt: "Страница о студии Top Records с описанием преимуществ",
        title: "О студии",
      },
      {
        image: toprecordsBlog,
        alt: "Студийный блог Top Records со статьями о звукозаписи",
        title: "Блог",
      },
    ],
    stack: ["WordPress", "Custom Audio Player", "SEO"],
    timeline: "3 недели",
    metrics: [
      { label: "PageSpeed", value: "85" },
      { label: "Органический трафик", value: "+120%" },
    ],
    tasks: [
      "Разработали премиальный тёмный дизайн с градиентными акцентами",
      "Создали многостраничную структуру: главная, о студии, блог, цены, контакты",
      "Интегрировали кастомный аудиоплеер для демонстрации работ",
      "Запустили студийный блог с SEO-оптимизированными статьями",
      "Настроили локальное SEO для продвижения",
      "Оптимизировали скорость загрузки и Core Web Vitals",
    ],
    kpiDetails: {
      vitals: [
        { label: "LCP", value: "≤ 2.4 сек" },
        { label: "CLS", value: "≤ 0.1" },
        { label: "INP", value: "≤ 200 мс" },
        { label: "PageSpeed Mobile", value: "85" },
      ],
      conversion: [
        { label: "Рост органического трафика", value: "+120%" },
        { label: "Позиции в топ-10", value: "8 запросов" },
      ],
    },
  },
  {
    id: "wow-midnight",
    category: "Лендинг + Telegram-бот",
    industry: "Гейминг",
    title: "WoW Midnight Store — магазин коллекционных изданий",
    description: "Разработали продающий лендинг для предзаказа коллекционного издания World of Warcraft: Midnight с интеграцией Telegram-бота для оформления заказов, поддержкой менеджера и онлайн-оплатой.",
    fullDescription: "WoW Midnight Store — интернет-магазин для предзаказа эксклюзивного коллекционного издания World of Warcraft: Midnight. Мы создали атмосферный лендинг в фирменных фиолетово-синих тонах с динамичным таймером акции, детальной презентацией состава издания (артбук, реплика Темного Сердца с LED-подсветкой, коллекционный значок), блоком гарантий и FAQ. Ключевая особенность — интеграция Telegram-бота с полным функционалом: оформление заказа, связь с менеджером для консультаций, приём оплаты прямо в боте. Это позволяет клиентам совершать покупки без выхода из Telegram.",
    heroImage: wowmidnightHero,
    heroImageAlt: "Разработка продающего лендинга интернет-магазина WoW Midnight с таймером акции и презентацией коллекционного издания — кейс NOIRDIG",
    gallery: [
      {
        image: wowmidnightHero,
        alt: "Создание лендинга для интернет-магазина: hero-секция с ценой, таймером акции и CTA-кнопкой оформления предзаказа",
        title: "Главная страница",
      },
      {
        image: wowmidnightContent,
        alt: "Разработка блока преимуществ товара: состав коллекционного издания с иконками и описанием — пример продающего лендинга",
        title: "Состав издания",
      },
      {
        image: wowmidnightFaq,
        alt: "FAQ-секция и форма обратной связи на лендинге: создание интерактивных блоков для повышения конверсии",
        title: "FAQ и контакты",
      },
      {
        image: wowmidnightCart,
        alt: "Разработка корзины интернет-магазина с интеграцией онлайн-оплаты: IOKassa, SberPay, T-Банк — кейс NOIRDIG",
        title: "Корзина и оплата",
      },
    ],
    stack: ["React", "TypeScript", "Telegram Bot API", "Платёжная система"],
    timeline: "1.5 недели",
    metrics: [
      { label: "PageSpeed", value: "94" },
      { label: "Конверсия в заказ", value: "7.8%" },
    ],
    tasks: [
      "Разработали атмосферный дизайн в стилистике World of Warcraft",
      "Создали динамичный таймер обратного отсчёта акции",
      "Интегрировали Telegram-бот для оформления заказов",
      "Настроили поддержку клиентов через менеджера в боте",
      "Подключили онлайн-оплату в Telegram-боте",
      "Оптимизировали Core Web Vitals и мобильную версию",
    ],
    kpiDetails: {
      vitals: [
        { label: "LCP", value: "≤ 1.8 сек" },
        { label: "CLS", value: "≤ 0.05" },
        { label: "INP", value: "≤ 150 мс" },
        { label: "PageSpeed Mobile", value: "94" },
      ],
      conversion: [
        { label: "CR оформления заказа", value: "7.8%" },
        { label: "Заказы через бота", value: "65%" },
      ],
    },
  },
];

export const getCaseById = (id: string): PortfolioCase | undefined => {
  return portfolioCases.find((c) => c.id === id);
};
