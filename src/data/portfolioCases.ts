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

export const portfolioCases: PortfolioCase[] = [];

export const getCaseById = (id: string): PortfolioCase | undefined => {
  return portfolioCases.find((c) => c.id === id);
};
