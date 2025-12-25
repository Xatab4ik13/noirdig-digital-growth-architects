import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: "video" | "square" | "auto";
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  containerClassName,
  aspectRatio = "video",
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    auto: "",
  };

  return (
    <div
      ref={imgRef}
      className={cn(
        "bg-secondary rounded-lg overflow-hidden relative",
        aspectClasses[aspectRatio],
        containerClassName
      )}
    >
      {/* Skeleton placeholder */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-secondary via-secondary/50 to-secondary animate-pulse transition-opacity duration-300",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      />

      {/* Actual image - only load when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm",
            className
          )}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};
