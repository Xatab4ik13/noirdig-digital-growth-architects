import { Globe, MousePointer2 } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizes = {
    sm: { box: "w-8 h-8", text: "text-lg", n: "text-base", globe: 14, cursor: 10 },
    md: { box: "w-10 h-10", text: "text-xl", n: "text-xl", globe: 18, cursor: 12 },
    lg: { box: "w-12 h-12", text: "text-2xl", n: "text-2xl", globe: 22, cursor: 14 },
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {/* Icon group */}
      <div className="flex items-center">
        {/* N box */}
        <div className={`${s.box} bg-gradient-to-br from-primary to-primary/80 rounded-sm flex items-center justify-center shadow-md`}>
          <span className={`text-primary-foreground font-bold ${s.n}`}>N</span>
        </div>
        
        {/* Globe with cursor */}
        <div className="relative -ml-2">
          <Globe 
            size={s.globe} 
            className="text-primary" 
            strokeWidth={2}
          />
          <MousePointer2 
            size={s.cursor} 
            className="absolute -bottom-0.5 -right-1 text-foreground fill-foreground" 
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Text */}
      {showText && (
        <span className={`font-bold ${s.text} tracking-tight`}>OIRDIG</span>
      )}
    </div>
  );
};
