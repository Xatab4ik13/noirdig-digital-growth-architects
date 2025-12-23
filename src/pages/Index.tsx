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
        <title>NOIRDIG — Создание сайтов и Telegram-ботов под ключ</title>
        <meta
          name="description"
          content="Поможем привлечь клиентов и увеличить продажи в онлайне. Разработка сайтов и Telegram-ботов для малого бизнеса и B2B по всей России."
        />
        <meta property="og:title" content="NOIRDIG — Создание сайтов и Telegram-ботов" />
        <meta
          property="og:description"
          content="Премиальная digital-студия. Сайты под ключ, Telegram-боты, контекстная реклама."
        />
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
