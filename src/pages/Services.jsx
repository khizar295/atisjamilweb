import React from 'react';
import { FaRegWindowMaximize, FaWrench, FaDesktop, FaRecycle, FaBoxOpen, FaWarehouse, FaArrowRight } from 'react-icons/fa';

const ServicesSection = () => {
  // Data for the 6 boxes based on the image
  const services = [
    {
      id: 1,
      title: 'Space Planning',
      subtitle: 'Optimized workspace design and layout',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop', // Placeholder for blueprint
      icon: <FaRegWindowMaximize className="w-6 h-6 text-[#10140e]" />,
    },
    {
      id: 2,
      title: 'Installation',
      subtitle: 'Professional furniture and equipment setup',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop', // Placeholder for installation
      icon: <FaWrench className="w-6 h-6 text-[#10140e]" />,
    },
    {
      id: 3,
      title: 'Technology Services',
      subtitle: 'IT infrastructure and setup solutions',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop', // Placeholder for server rack
      icon: <FaDesktop className="w-6 h-6 text-[#10140e]" />,
    },
    {
      id: 4,
      title: 'E-Waste Recycling',
      subtitle: 'Sustainable disposal and recycling solutions',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop', // Placeholder for recycling
      icon: <FaRecycle className="w-6 h-6 text-[#10140e]" />,
    },
    {
      id: 5,
      title: 'Liquidation Services',
      subtitle: 'Efficient asset removal and liquidation',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c8627d?q=80&w=800&auto=format&fit=crop', // Placeholder for bins
      icon: <FaBoxOpen className="w-6 h-6 text-[#10140e]" />,
    },
    {
      id: 6,
      title: 'Warehouse Solutions',
      subtitle: 'Comprehensive storage and racking systems',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop', // Placeholder for warehouse
      icon: <FaWarehouse className="w-6 h-6 text-[#10140e]" />,
    }
  ];

  return (
    <section className="w-full bg-[#10140e] py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 tracking-tight">
          What can we do for you
        </h2>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,166,244,0.2)]"
            >
              
              {/* Image Container */}
              <div className="relative w-full h-64 md:h-72 bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Icon Circle */}
                <div className="absolute -bottom-6 left-8 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#00a6f4]">
                  {/* Group-hover text color swaps to white for better contrast against the blue */}
                  <div className="transition-colors duration-300 group-hover:text-white">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="pt-10 pb-8 px-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start gap-4 mt-auto">
                  {/* Text */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#10140e] mb-2 group-hover:text-[#00a6f4] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#10140e]/60 text-sm leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>
                  
                  {/* Arrow Button */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full border border-[#10140e]/20 flex items-center justify-center transition-all duration-300 group-hover:border-[#00a6f4] group-hover:bg-[#00a6f4]">
                      <FaArrowRight className="w-4 h-4 text-[#10140e] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;