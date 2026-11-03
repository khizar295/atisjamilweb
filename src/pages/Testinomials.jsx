
import React, { useState, useEffect } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
  FaStar,
} from 'react-icons/fa';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Operations Manager, Stellar Pizza',
      quote:
        'The team was incredibly professional and efficient. They handled our entire office relocation overnight without a single hiccup. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Facilities Director, TechCorp',
      quote:
        "From space planning to the final installation, their attention to detail was flawless. The new office layout has significantly improved our team's workflow.",
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Davis',
      role: 'Warehouse Supervisor, LogiTech',
      quote:
        'Their rack installation team was top-notch. They worked safely, quickly, and ensured everything was perfectly aligned. We will definitely use them again.',
      rating: 4,
    },
    {
      id: 4,
      name: 'Emily Chen',
      role: 'CEO, StartupHub',
      quote:
        'We needed a complete decommissioning and e-waste recycling service. They handled it all sustainably and provided us with the necessary certificates. Fantastic service.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Automatic scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Infinite wrap-around positioning
  const getOffset = (index) => {
    let offset = index - currentIndex;

    if (offset > testimonials.length / 2) {
      offset -= testimonials.length;
    } else if (offset < -testimonials.length / 2) {
      offset += testimonials.length;
    }

    return offset;
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#10140e] to-[#151d29] py-12 sm:py-14 md:py-16 font-sans overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#00a6f4]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00a6f4]/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[#00a6f4] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">
            Customer Feedback
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
            What Our Clients Say
          </h2>

          <div className="w-16 h-1 bg-[#00a6f4] mx-auto mt-4 rounded-full" />

          <p className="text-white/50 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Discover why businesses trust us for their projects and services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative w-full h-[370px] sm:h-[380px] md:h-[390px] lg:h-[400px] flex items-center justify-center">

          {testimonials.map((item, index) => {
            const offset = getOffset(index);
            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            return (
              <div
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className="absolute flex items-center justify-center cursor-pointer transition-all duration-700 ease-in-out"
                style={{
                  width: '78%',
                  maxWidth: '390px',
                  transform: `translateX(${offset * 112}%) scale(${isActive ? 1 : 0.84})`,
                  opacity: isVisible ? (isActive ? 1 : 0.48) : 0,
                  zIndex: isActive ? 10 : 5,
                  pointerEvents: isVisible ? 'auto' : 'none',
                }}
              >
                {/* Card */}
                <div
                  className={`relative w-full min-h-[315px] sm:min-h-[325px] rounded-2xl p-5 sm:p-7 flex flex-col overflow-hidden border transition-all duration-500 ${
                    isActive
                      ? 'bg-[#1c2735] border-[#00a6f4]/60 shadow-[0_15px_45px_rgba(0,166,244,0.18)]'
                      : 'bg-[#1a2430] border-white/10'
                  }`}
                >
                  {/* Decorative Quote Icon */}
                  <FaQuoteRight
                    className={`absolute top-5 right-5 text-5xl transition-all duration-500 ${
                      isActive ? 'text-[#00a6f4]/20' : 'text-white/5'
                    }`}
                  />

                  {/* Top Label */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#00a6f4]" />
                    <span className="text-[#00a6f4] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
                      Client Review
                    </span>
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1.5 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < item.rating
                            ? 'text-[#00a6f4]'
                            : 'text-white/15'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                    "{item.quote}"
                  </p>

                  {/* Client Details */}
                  <div className="flex items-center gap-3 border-t border-white/10 pt-5 mt-auto">

                    {/* Avatar */}
                    <div
                      className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-500 ${
                        isActive
                          ? 'bg-[#00a6f4] shadow-lg shadow-[#00a6f4]/20'
                          : 'bg-white/10'
                      }`}
                    >
                      {item.name.charAt(0)}
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-white font-bold text-base sm:text-lg">
                        {item.name}
                      </h4>

                      <p className="text-[#00a6f4] text-xs sm:text-sm leading-snug">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#00a6f4] rounded-t-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows and Dots */}
        <div className="flex items-center justify-center gap-5 sm:gap-7 mt-4">

          {/* Previous */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[#00a6f4] text-white shadow-lg shadow-[#00a6f4]/20 hover:bg-white hover:text-[#10140e] hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2.5">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`rounded-full transition-all duration-500 ${
                  currentIndex === index
                    ? 'w-8 h-2.5 bg-[#00a6f4]'
                    : 'w-2.5 h-2.5 bg-white/25 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[#00a6f4] text-white shadow-lg shadow-[#00a6f4]/20 hover:bg-white hover:text-[#10140e] hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <FaChevronRight className="text-sm" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
