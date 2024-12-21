import { useEffect, useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <span className="animate-on-scroll inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/5 text-primary">
            Welcome to the future
          </span>
          
          <h1 className="animate-on-scroll text-4xl md:text-6xl font-bold leading-tight">
            Create something
            <span className="block text-primary">extraordinary</span>
          </h1>
          
          <p className="animate-on-scroll text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your ideas into reality with our cutting-edge platform.
            Design, build, and launch with unprecedented ease.
          </p>

          <div className="animate-on-scroll flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover-lift">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-lg border border-primary/20 hover-lift">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;