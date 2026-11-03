
import React, { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const experienceTarget = 30;
          const clientsTarget = 1000;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const progress = Math.min(
              (currentTime - startTime) / duration,
              1
            );

            const eased = 1 - Math.pow(1 - progress, 3);

            setExperience(Math.floor(eased * experienceTarget));
            setClients(Math.floor(eased * clientsTarget));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setExperience(experienceTarget);
              setClients(clientsTarget);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-8 sm:py-10 md:py-12 font-sans overflow-hidden bg-[#10140e]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8ed7c8627d?q=80&w=2070&auto=format&fit=crop"
          alt="Warehouse background"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#10140e]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10140e]/70 via-transparent to-[#10140e]/70" />
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-40 bg-[#00a6f4]/10 blur-[80px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 items-stretch">

          {/* Experience */}
          <div className="group relative flex flex-col items-center justify-center text-center bg-white/[0.06] border border-white/10 rounded-xl px-4 py-5 sm:py-6 backdrop-blur-md hover:border-[#00a6f4]/60 hover:bg-white/[0.09] transition-all duration-300">
            <div className="flex items-baseline">
              <span className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight tabular-nums">
                {experience}
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#00a6f4] ml-1">
                +
              </span>
            </div>

            <p className="text-white/75 text-xs sm:text-sm font-semibold mt-2 tracking-wide">
              Years of Experience
            </p>

            <div className="w-8 h-0.5 bg-[#00a6f4] rounded-full mt-3 group-hover:w-14 transition-all duration-300" />
          </div>

          {/* License */}
          <div className="group relative flex flex-col items-center justify-center text-center bg-white/[0.06] border border-white/10 rounded-xl px-4 py-5 sm:py-6 backdrop-blur-md hover:border-[#00a6f4]/60 hover:bg-white/[0.09] transition-all duration-300">
            <div className="text-[#00a6f4] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-2">
              Professional Standards
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-tight leading-tight">
              Licensed, Insured
              <span className="text-[#00a6f4]"> & Bonded</span>
            </h3>

            <p className="text-white/65 text-xs sm:text-sm font-medium mt-2">
              CSLB# 1068406
            </p>

            <div className="w-8 h-0.5 bg-[#00a6f4] rounded-full mt-3 group-hover:w-14 transition-all duration-300" />
          </div>

          {/* Clients */}
          <div className="group relative flex flex-col items-center justify-center text-center bg-white/[0.06] border border-white/10 rounded-xl px-4 py-5 sm:py-6 backdrop-blur-md hover:border-[#00a6f4]/60 hover:bg-white/[0.09] transition-all duration-300">
            <div className="flex items-baseline">
              <span className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight tabular-nums">
                {clients.toLocaleString()}
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#00a6f4] ml-1">
                +
              </span>
            </div>

            <p className="text-white/75 text-xs sm:text-sm font-semibold mt-2 tracking-wide">
              Satisfied Clients
            </p>

            <div className="w-8 h-0.5 bg-[#00a6f4] rounded-full mt-3 group-hover:w-14 transition-all duration-300" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
