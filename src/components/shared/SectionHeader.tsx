interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({
  badge,
  title,
  description,
  align = "left",
}: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block text-primary text-body-sm font-medium tracking-wide uppercase mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-h2 md:text-display mb-4">{title}</h2>
      {description && (
        <p className={`text-body-lg text-muted-foreground max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
};
