import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  mobileRootMargin?: string;
  triggerOnce?: boolean;
}

export const useInView = (options: UseInViewOptions = {}) => {
  const { 
    threshold = 0.4, 
    rootMargin = "-200px 0px", 
    mobileRootMargin = "-50px 0px", 
    triggerOnce = true 
  } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Используем мобильный rootMargin для экранов меньше 768px
    const isMobile = window.innerWidth < 768;
    const effectiveRootMargin = isMobile ? mobileRootMargin : rootMargin;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin: effectiveRootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, mobileRootMargin, triggerOnce]);

  return { ref, isInView };
};
