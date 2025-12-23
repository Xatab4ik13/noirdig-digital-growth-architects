import { Button } from "@/components/ui/button";
import { Send, ArrowRight } from "lucide-react";

interface TelegramCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const TelegramCTA = ({
  title = "Готовы обсудить проект?",
  subtitle = "Напишите нам в Telegram — ответим в течение 2 часов",
  buttonText = "Написать в Telegram",
}: TelegramCTAProps) => {
  return (
    <div className="card-noir text-center">
      <h3 className="text-h3 mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{subtitle}</p>
      <Button variant="gold" size="lg" asChild>
        <a
          href="https://t.me/noirdig"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send className="h-5 w-5" />
          {buttonText}
          <ArrowRight className="h-5 w-5" />
        </a>
      </Button>
    </div>
  );
};
