import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TelegramCTAProps {
  buttonText?: string;
}

export const TelegramCTA = ({
  buttonText = "Обсудить проект",
}: TelegramCTAProps) => {
  return (
    <Button variant="gold" size="lg" asChild>
      <a
        href="https://t.me/noirdig"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
        <ArrowRight className="h-5 w-5" />
      </a>
    </Button>
  );
};
