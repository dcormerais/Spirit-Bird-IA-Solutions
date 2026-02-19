import { useEffect, useRef, ReactNode } from 'react';

interface IntersectionObserverProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

const IntersectionObserver: React.FC<IntersectionObserverProps> = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '0px'
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.remove('fade-up-hidden');
          ref.current.classList.add('fade-up-visible');
        }
      },
      {
        threshold,
        rootMargin
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

  return (
    <div ref={ref} className={`fade-up-hidden ${className}`}>
      {children}
    </div>
  );
};

export default IntersectionObserver;