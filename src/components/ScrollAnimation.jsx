import React, { useEffect, useRef, useState } from "react";

function ScrollAnimation({ 
  children, 
  className = "", 
  animation = "fade-in", 
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  delay = 0 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after animation triggers
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  const getAnimationClass = () => {
    if (!isVisible) return "";
    
    const baseClass = `animate-${animation}`;
    const delayClass = delay > 0 ? `animate-stagger-${Math.min(Math.ceil(delay * 10), 5)}` : "";
    
    return `${baseClass} ${delayClass}`.trim();
  };

  return (
    <div 
      ref={ref} 
      className={`${className} ${getAnimationClass()}`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s ease, transform 0.6s ease"
      }}
    >
      {children}
    </div>
  );
}

export default ScrollAnimation; 