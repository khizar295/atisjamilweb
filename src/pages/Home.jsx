
import React from 'react';
import { FaArrowRight, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[650px] lg:min-h-[720px] overflow-hidden bg-[#10141e] font-sans text-white flex items-center">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8ed7c8627d?q=80&w=2070&auto=format&fit=crop"
          alt="Commercial warehouse facility"
          className="w-full h-full object-cover object-center animate-[heroZoom_25s_ease-in-out_infinite_alternate]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#10141e] via-[#10141e]/90 to-[#10141e]/60" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#10141e]/80 via-transparent to-[#10141e]/30" />

        <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#00a6f4]/10 blur-[100px] rounded-full" />
      </div>

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '55px 55px',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24 sm:py-28 lg:py-32">

        <div className="max-w-4xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-[#00a6f4]/30 bg-[#00a6f4]/10 backdrop-blur-md mb-6 animate-[fadeUp_0.7s_ease-out_both]">

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#00a6f4] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00a6f4]" />
            </span>

            <span className="text-[#63caff] text-[10px] sm:text-xs font-bold uppercase tracking-[1.5px]">
              Your Nationwide Facility Partner
            </span>

          </div>

          {/* Heading */}
          <h1 className="text-[34px] sm:text-[42px] md:text-[50px] lg:text-[58px] xl:text-[64px] font-bold leading-[1.12] tracking-tight mb-5 animate-[fadeUp_0.9s_ease-out_both]">

            Nationwide Commercial

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00a6f4] via-[#55caff] to-white mt-1">
              Installation & Relocation
            </span>

            <span className="block mt-1">
              Experts<span className="text-[#00a6f4]">.</span>
            </span>

          </h1>

          {/* Description */}
          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-white/75 leading-relaxed mb-7 animate-[fadeUp_1.1s_ease-out_both]">
            Office installations, space planning, logistics, and construction services. We deliver professional facility solutions designed to keep your business moving.
          </p>

          {/* Features */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-8 animate-[fadeUp_1.3s_ease-out_both]">

            {[
              'Nationwide Service',
              'Professional Team',
              'Complete Solutions',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs sm:text-sm text-white/85"
              >
                <FaCheckCircle className="text-[#00a6f4] text-xs flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}

          </div>

          {/* Buttons */}
          <div className="flex flex-col xs:flex-row sm:flex-row items-start sm:items-center gap-3 animate-[fadeUp_1.5s_ease-out_both]">

            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-[#00a6f4] text-white text-sm font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,166,244,0.3)] active:scale-95 w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

              <span className="relative">Get A Free Estimate</span>

              <FaArrowRight className="relative text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="tel:8774831203"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md border border-white/30 bg-white/5 backdrop-blur-md text-white text-sm font-semibold transition-all duration-300 hover:border-[#00a6f4] hover:bg-[#00a6f4]/10 hover:-translate-y-1 w-full sm:w-auto"
            >
              <FaPhoneAlt className="text-[#00a6f4] text-xs transition-transform duration-300 group-hover:rotate-12" />

              <span>877-483-1203</span>
            </a>

          </div>

          {/* Bottom Information */}
          <div className="mt-12 pt-5 border-t border-white/15 flex flex-wrap items-center gap-3 sm:gap-6 animate-[fadeUp_1.7s_ease-out_both]">

            <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-[1.5px] font-semibold">
              Commercial Facility Solutions
            </span>

            <span className="hidden sm:block w-8 h-px bg-[#00a6f4]" />

            <span className="text-xs text-white/65">
              Built Around Your Business Needs
            </span>

          </div>

        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00a6f4] to-transparent opacity-60" />

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

    </section>
  );
};

export default HeroSection;
