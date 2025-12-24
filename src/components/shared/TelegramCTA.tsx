import { Button } from "@/components/ui/button";
import { Send, ArrowRight } from "lucide-react";

interface TelegramCTAProps {
  title?: string;
  subtitle?: string;
}

export const TelegramCTA = ({
  title = "Не нашли ответ на свой вопрос?",
  subtitle = "Напишите нам — ответим в течение 2 часов",
}: TelegramCTAProps) => {
  return (
    <div className="card-noir bg-primary/5 border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-muted-foreground text-body-sm">{subtitle}</p>
      </div>
      <Button variant="gold" asChild className="shrink-0">
        <a
          href="https://t.me/noirdig_bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send className="h-4 w-4" />
          Обсудить проект
          <ArrowRight className="h-4 w-4" />
        </a>
      </Button>
    </div>
  );
};
