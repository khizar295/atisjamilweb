
import React, { useState } from 'react';
import {
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaArrowRight,
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Office Solutions', href: '#' },
    { name: 'Warehouse Solutions', href: '#' },
    { name: 'Liquidation & Decommissioning', href: '#' },
    { name: 'Technology Services', href: '#' },
    { name: 'Tenant Improvements', href: '#' },
    { name: 'Our Work', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full max-w-full bg-[#10141e]/95 backdrop-blur-xl border-b border-white/10 shadow-lg">

      <div className="w-full max-w-[1600px] mx-auto px-3 xl:px-5 2xl:px-8">

        <div className="flex items-center justify-between gap-2 min-h-20">

          {/* Logo */}
          <a href="#home" className="flex-shrink-0 group">
            <div className="bg-white px-3 py-2 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(0,166,244,0.35)]">

              <span className="block text-[#10141e] font-black text-2xl leading-none italic tracking-wider">
                ATIS
              </span>

              <span className="block text-[#10141e] text-[7px] font-extrabold uppercase tracking-[2px] mt-1 whitespace-nowrap">
                Office and Warehouse
                <br />
                Facility Solutions
              </span>

            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-2 xl:gap-3 whitespace-nowrap min-w-0">

            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group text-white/80 hover:text-[#00a6f4] text-[10px] xl:text-[11px] 2xl:text-xs font-semibold tracking-tight py-3 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}

                <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] rounded-full bg-[#00a6f4] shadow-[0_0_10px_#00a6f4] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0 whitespace-nowrap">

            <a
              href="tel:8774831203"
              className="flex items-center gap-1.5 text-white text-[10px] xl:text-xs font-bold px-2 xl:px-3 py-3 rounded-lg border border-white/20 hover:border-[#00a6f4] hover:text-[#00a6f4] transition-all duration-300"
            >
              <FaPhoneAlt className="text-[#00a6f4] text-xs" />
              877-483-1203
            </a>

            <a
              href="#contact"
              className="group relative flex items-center gap-1.5 px-2 xl:px-3 py-3 rounded-lg bg-[#00a6f4] text-white text-[10px] xl:text-xs font-bold overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,166,244,0.4)] hover:-translate-y-1 active:scale-95"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

              <span className="relative whitespace-nowrap">
                Get A Free Estimate
              </span>

              <FaArrowRight className="relative text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
            </a>

          </div>

          {/* Mobile / Tablet Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex-shrink-0 text-white text-xl p-3 rounded-lg border border-white/10 hover:border-[#00a6f4] hover:text-[#00a6f4] transition-all duration-300"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`lg:hidden overflow-hidden bg-[#10141e] border-t border-white/10 transition-all duration-500 ease-in-out ${
          isOpen
            ? 'max-h-[650px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >

        <div className="px-5 py-5 space-y-2">

          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                transitionDelay: isOpen ? `${index * 60}ms` : '0ms',
              }}
              className={`block px-4 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:bg-[#00a6f4]/10 hover:text-[#00a6f4] hover:translate-x-2 ${
                isOpen
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-5 opacity-0'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Action Buttons */}
          <div className="pt-4 mt-3 border-t border-white/10 space-y-3">

            <a
              href="tel:8774831203"
              className="flex items-center justify-center gap-3 w-full py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-[#00a6f4] hover:text-[#00a6f4] transition-all duration-300"
            >
              <FaPhoneAlt className="text-[#00a6f4]" />
              877-483-1203
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#00a6f4] text-white font-bold hover:shadow-[0_0_20px_rgba(0,166,244,0.4)] transition-all duration-300"
            >
              Get A Free Estimate
              <FaArrowRight />
            </a>

          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
