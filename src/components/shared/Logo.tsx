import { Globe, MousePointer2 } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizes = {
    sm: { box: "w-9 h-9", text: "text-xl", n: "text-lg", globe: 18, cursor: 12 },
    md: { box: "w-11 h-11", text: "text-2xl", n: "text-xl", globe: 22, cursor: 14 },
    lg: { box: "w-14 h-14", text: "text-3xl", n: "text-2xl", globe: 26, cursor: 16 },
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center gap-1.5 group ${className}`}>
      {/* N box */}
      <div className={`${s.box} bg-gradient-to-br from-primary to-primary/80 rounded-sm flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}>
        <span className={`text-primary-foreground font-bold ${s.n}`}>N</span>
      </div>

      {/* Text */}
      {showText && (
        <span className={`font-bold ${s.text} tracking-tight transition-colors duration-300 group-hover:text-primary`}>OIRDIG</span>
      )}

      {/* Globe with cursor at the end */}
      <div className="relative ml-0.5 transition-transform duration-300 group-hover:rotate-12">
        <Globe 
          size={s.globe} 
          className="text-primary animate-[spin_8s_linear_infinite]" 
          strokeWidth={2}
        />
        <MousePointer2 
          size={s.cursor} 
          className="absolute -bottom-0.5 -right-1 text-foreground fill-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" 
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
};
