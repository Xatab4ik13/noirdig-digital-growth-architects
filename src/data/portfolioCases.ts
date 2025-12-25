import monarchHero from "@/assets/portfolio/monarch-hero.jpg";
import monarchServices from "@/assets/portfolio/monarch-services.jpg";
import monarchTeam from "@/assets/portfolio/monarch-team.jpg";
import monarchContacts from "@/assets/portfolio/monarch-contacts.jpg";

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
    title: "Monarch Barbershop — премиальный барбершоп в Ижевске",
    description: "Разработали стильный одностраничный сайт для барбершопа с интеграцией онлайн-записи через YCLIENTS, прайс-листом услуг и презентацией команды мастеров.",
    fullDescription: "Барбершоп Monarch — это премиальное мужское пространство в Ижевске, где клиенты получают качественные услуги от опытных барберов. Мы разработали современный лендинг в фирменных тёмно-зелёных тонах с акцентом на бирюзовый. Сайт включает полный прайс-лист с градацией мастеров (Барбер / Старший барбер / Топ-Барбер), блок акций и спецпредложений, раздел с командой и интеграцию с системой онлайн-записи YCLIENTS для удобного бронирования.",
    heroImage: monarchHero,
    heroImageAlt: "Главная страница сайта барбершопа Monarch с тёмно-зелёным дизайном и кнопкой записи",
    gallery: [
      {
        image: monarchHero,
        alt: "Главный экран сайта Monarch Barbershop с заголовком и кнопками записи",
        title: "Главная страница",
      },
      {
        image: monarchServices,
        alt: "Блок услуг барбершопа Monarch с прайс-листом и категориями мастеров",
        title: "Прайс-лист услуг",
      },
      {
        image: monarchTeam,
        alt: "Секция команды барбершопа Monarch с фотографиями мастеров",
        title: "Команда мастеров",
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
      "Настроили SEO для локального продвижения в Ижевске",
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
];

export const getCaseById = (id: string): PortfolioCase | undefined => {
  return portfolioCases.find((c) => c.id === id);
};
