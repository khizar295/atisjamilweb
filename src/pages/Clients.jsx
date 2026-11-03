
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ClientsSection = () => {
  const clients = [
    { id: 1, name: 'AXTRIA', sub: 'INGENIOUS INSIGHTS', symbol: 'A' },
    { id: 2, name: 'MITSUBISHI', sub: 'ELECTRIC', symbol: 'M' },
    { id: 3, name: 'HITACHI', sub: 'INSPIRE THE NEXT', symbol: 'H' },
    { id: 4, name: 'OTG', sub: 'OFF THE GRID', symbol: 'O' },
    { id: 5, name: 'STELLAR', sub: 'PIZZA', symbol: 'S' },
    { id: 6, name: 'GENERAL', sub: 'CONTRACTING', symbol: 'G' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [clients.length]);

  // Infinite wrap-around positioning
  const getOffset = (index) => {
    let offset = index - currentIndex;

    if (offset > clients.length / 2) {
      offset -= clients.length;
    } else if (offset < -clients.length / 2) {
      offset += clients.length;
    }

    return offset;
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-slate-50 to-white py-10 sm:py-12 md:py-14 font-sans overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#00a6f4]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-7 sm:mb-9">
          <span className="text-[#00a6f4] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">
            Trusted Partnerships
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#10140e] mt-2 tracking-tight uppercase">
            Our Clients
          </h2>

          <div className="w-16 h-1 bg-[#00a6f4] mx-auto mt-4 rounded-full" />

          <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Building strong relationships with businesses through quality and trust.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full h-[170px] sm:h-[190px] md:h-[210px] lg:h-[220px] flex items-center justify-center">

          {clients.map((client, index) => {
            const offset = getOffset(index);
            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            return (
              <div
                key={client.id}
                onClick={() => setCurrentIndex(index)}
                className="absolute flex items-center justify-center cursor-pointer transition-all duration-700 ease-in-out"
                style={{
                  width: '72%',
                  maxWidth: '340px',
                  transform: `translateX(${offset * 112}%) scale(${isActive ? 1 : 0.82})`,
                  opacity: isVisible ? (isActive ? 1 : 0.55) : 0,
                  zIndex: isActive ? 10 : 5,
                  pointerEvents: isVisible ? 'auto' : 'none',
                }}
              >
                <div
                  className={`relative w-full h-[125px] sm:h-[145px] md:h-[155px] flex flex-col items-center justify-center rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? 'bg-white border-[#00a6f4]/50 shadow-[0_12px_35px_rgba(0,166,244,0.16)]'
                      : 'bg-white/80 border-gray-200 shadow-sm'
                  }`}
                >
                  {/* Top Accent */}
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 h-1 rounded-b-full transition-all duration-500 ${
                      isActive ? 'w-20 bg-[#00a6f4]' : 'w-10 bg-gray-200'
                    }`}
                  />

                  {/* Logo Symbol */}
                  <div
                    className={`w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center rounded-xl mb-2 font-black text-xl sm:text-2xl transition-all duration-500 ${
                      isActive
                        ? 'bg-[#00a6f4] text-white shadow-lg shadow-[#00a6f4]/25'
                        : 'bg-slate-100 text-[#00a6f4]'
                    }`}
                  >
                    {client.symbol}
                  </div>

                  {/* Client Name */}
                  <h3
                    className={`text-lg sm:text-xl md:text-2xl font-black tracking-tight uppercase text-center transition-colors duration-500 ${
                      isActive ? 'text-[#10140e]' : 'text-gray-600'
                    }`}
                  >
                    {client.name}
                  </h3>

                  {/* Subtitle */}
                  {client.sub && (
                    <p className="text-[8px] sm:text-[10px] font-bold tracking-[0.2em] text-gray-500 mt-1 uppercase text-center">
                      {client.sub}
                    </p>
                  )}

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#00a6f4] rounded-t-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls: Arrows outside the dots */}
        <div className="flex items-center justify-center gap-7 mt-2">

          <button
            onClick={prevSlide}
            aria-label="Previous client"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00a6f4] text-white shadow-lg shadow-[#00a6f4]/20 hover:bg-[#10140e] hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2.5">
            {clients.map((client, index) => (
              <button
                key={client.id}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to ${client.name}`}
                className={`rounded-full transition-all duration-500 ${
                  currentIndex === index
                    ? 'w-8 h-2.5 bg-[#00a6f4]'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-[#00a6f4]/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next client"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00a6f4] text-white shadow-lg shadow-[#00a6f4]/20 hover:bg-[#10140e] hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <FaChevronRight className="text-sm" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default ClientsSection;
