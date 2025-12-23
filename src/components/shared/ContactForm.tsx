import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export const ContactForm = ({
  title = "Обсудим ваш проект?",
  subtitle = "Оставьте заявку — свяжемся в течение 2 часов в рабочее время",
  compact = false,
}: ContactFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      toast({
        title: "Необходимо согласие",
        description: "Пожалуйста, подтвердите согласие на обработку персональных данных",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    // Reset form
    (e.target as HTMLFormElement).reset();
    setAgreed(false);
  };

  return (
    <div className={compact ? "" : "card-noir"}>
      {!compact && (
        <div className="mb-6">
          <h3 className="text-h3 mb-2">{title}</h3>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              name="name"
              placeholder="Ваше имя"
              required
              className="bg-background"
            />
          </div>
          <div>
            <Input
              name="phone"
              type="tel"
              placeholder="Телефон"
              required
              className="bg-background"
            />
          </div>
        </div>

        <div>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            className="bg-background"
          />
        </div>

        <div>
          <Textarea
            name="message"
            placeholder="Расскажите кратко о проекте: что нужно сделать, какие задачи решить"
            rows={4}
            className="bg-background resize-none"
          />
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            id="consent"
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked as boolean)}
          />
          <label htmlFor="consent" className="text-body-sm text-muted-foreground cursor-pointer">
            Я согласен на{" "}
            <Link to="/consent" className="text-primary hover:underline">
              обработку персональных данных
            </Link>
          </label>
        </div>

        <Button
          type="submit"
          variant="gold"
          size="lg"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Отправка...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Отправить заявку
            </>
          )}
        </Button>

        <p className="text-body-sm text-muted-foreground text-center">
          Или напишите в{" "}
          <a
            href="https://t.me/noirdig"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Telegram
          </a>
        </p>
      </form>
    </div>
  );
};
