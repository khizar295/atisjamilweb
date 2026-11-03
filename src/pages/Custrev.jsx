
import React, { useState, useEffect } from 'react';
import {
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from 'react-icons/fa';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'Steller Pizza',
      image:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Rack Installation',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Office Decommissioning',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Warehouse Relocation',
      image:
        'https://images.unsplash.com/photo-1586528116311-ad8ed7c8627d?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 5,
      name: 'Technology Setup',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + reviews.length) % reviews.length
    );
  };

  // Automatic Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Calculate each slide's position
  const getOffset = (index) => {
    let offset = index - currentIndex;

    if (offset > reviews.length / 2) {
      offset -= reviews.length;
    }

    if (offset < -reviews.length / 2) {
      offset += reviews.length;
    }

    return offset;
  };

  return (
    <section className="relative w-full bg-[#10141e] py-16 sm:py-20 lg:py-24 overflow-hidden font-sans">

      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[250px] bg-[#00a6f4]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">

          <span className="inline-flex items-center gap-2 text-[#00a6f4] text-xs font-bold uppercase tracking-[2px] mb-4">
            <span className="w-7 h-[2px] bg-[#00a6f4]" />
            Customer Experiences
            <span className="w-7 h-[2px] bg-[#00a6f4]" />
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight">
            Real Reviews By{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a6f4] to-[#70d0ff]">
              Real Customers
            </span>
          </h2>

          <p className="text-white/50 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            See how our professional facility solutions make a difference for businesses.
          </p>

          <div className="w-16 h-1 bg-[#00a6f4] rounded-full mx-auto mt-6" />

        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Slider Stage */}
          <div className="relative w-full h-[310px] sm:h-[350px] md:h-[390px] lg:h-[410px]">

            {reviews.map((item, index) => {
              const offset = getOffset(index);
              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 1;

              return (
                <div
                  key={item.id}
                  className="absolute top-0 left-1/2 w-[72%] sm:w-[58%] md:w-[48%] lg:w-[32%] h-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: `translateX(calc(-50% + ${offset * 115}%)) scale(${isActive ? 1 : 0.82})`,
                    opacity: isVisible ? (isActive ? 1 : 0.55) : 0,
                    zIndex: isActive ? 10 : 5 - Math.abs(offset),
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                >

                  {/* Video Card */}
                  <div
                    className={`relative h-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#1b2535] border transition-all duration-500 ${
                      isActive
                        ? 'border-[#00a6f4] shadow-[0_15px_50px_rgba(0,166,244,0.22)]'
                        : 'border-white/10 shadow-xl'
                    }`}
                  >

                    {/* Image */}
                    <div className="relative w-full h-full overflow-hidden">

                      <img
                        src={item.image}
                        alt={item.name}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          isActive
                            ? 'scale-100'
                            : 'scale-110'
                        }`}
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#10141e] via-[#10141e]/10 to-black/20" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">

                        <div
                          className={`relative flex items-center justify-center rounded-full bg-[#00a6f4] text-white shadow-[0_0_30px_rgba(0,166,244,0.4)] transition-all duration-500 ${
                            isActive
                              ? 'w-14 h-14 sm:w-16 sm:h-16 hover:scale-110'
                              : 'w-11 h-11 sm:w-12 sm:h-12'
                          }`}
                        >
                          {isActive && (
                            <span className="absolute inset-0 rounded-full border border-[#00a6f4] animate-ping opacity-30" />
                          )}

                          <FaPlay className="ml-1 text-sm sm:text-base" />
                        </div>

                      </div>

                      {/* Bottom Content */}
                      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 md:p-6">

                        <div className="flex items-center gap-1 text-[#ffc857] text-[10px] sm:text-xs mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar key={star} />
                          ))}
                        </div>

                        <h3 className="text-white text-sm sm:text-base md:text-lg font-bold leading-snug">
                          {item.name}
                        </h3>

                        <div className="flex items-center gap-2 mt-2">
                          <span className="w-5 h-[2px] bg-[#00a6f4]" />
                          <span className="text-white/60 text-[10px] sm:text-xs uppercase tracking-wider">
                            Customer Project
                          </span>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

          {/* Navigation Buttons - Below Videos */}
          <div className="flex justify-center items-center gap-5 mt-5 sm:mt-7">

            <button
              onClick={prevSlide}
              className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 hover:bg-[#00a6f4] hover:border-[#00a6f4] hover:shadow-[0_0_20px_rgba(0,166,244,0.3)] active:scale-90"
              aria-label="Previous review"
            >
              <FaChevronLeft className="text-sm transition-transform duration-300 group-hover:-translate-x-1" />
            </button>

            <span className="text-white/40 text-xs font-medium tracking-widest">
              {String(currentIndex + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}
            </span>

            <button
              onClick={nextSlide}
              className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 hover:bg-[#00a6f4] hover:border-[#00a6f4] hover:shadow-[0_0_20px_rgba(0,166,244,0.3)] active:scale-90"
              aria-label="Next review"
            >
              <FaChevronRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </button>

          </div>

          {/* Dots - Under Navigation Buttons */}
          <div className="flex justify-center items-center gap-3 mt-7">

            {reviews.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to review ${index + 1}`}
                aria-current={currentIndex === index ? 'true' : undefined}
                className={`rounded-full transition-all duration-500 ${
                  currentIndex === index
                    ? 'w-8 h-3 bg-[#00a6f4] shadow-[0_0_12px_rgba(0,166,244,0.6)]'
                    : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/70 hover:scale-125'
                }`}
              />
            ))}

          </div>

        </div>

        {/* Bottom Label */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-white/40 text-xs sm:text-sm tracking-wide">
            Trusted solutions. Professional service. Real results.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
