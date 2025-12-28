import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { CasesPreviewSection } from "@/components/home/CasesPreviewSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { KPISection } from "@/components/home/KPISection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Разработка сайтов и Telegram-ботов для бизнеса под ключ | NOIRDIG</title>
        <meta
          name="description"
          content="Создание продающих сайтов, интернет-магазинов и Telegram-ботов для бизнеса. Привлекаем клиентов через SEO и контекстную рекламу. Работаем по всей России."
        />
        <meta name="keywords" content="создание сайтов под ключ, разработка Telegram-ботов для бизнеса, интернет-магазин под ключ, сайт для стартапа, SEO продвижение" />
        <meta property="og:title" content="Разработка сайтов и Telegram-ботов для бизнеса | NOIRDIG" />
        <meta
          property="og:description"
          content="Создаём продающие сайты и Telegram-ботов для автоматизации бизнеса. От разработки до продвижения."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://noirdig.ru/" />
        <meta property="og:image" content="https://noirdig.ru/og-noirdig.png" />
        <link rel="canonical" href="https://noirdig.ru/" />
      </Helmet>

      <Layout>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <CasesPreviewSection />
        <ProcessSection />
        <KPISection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
