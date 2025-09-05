import { useEffect, useRef } from "react";

export const useScrollAnimation = () => {
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            // Remove animation class when element leaves viewport
            // This allows animations to trigger again when scrolling back
            entry.target.classList.remove('animate');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    // Observe all elements with scroll animation classes
    const elements = document.querySelectorAll(
      '.scroll-animate, .scroll-zoom, .scroll-slide-left, .scroll-slide-right'
    );
    
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { elementsRef };
};

export default useScrollAnimation;