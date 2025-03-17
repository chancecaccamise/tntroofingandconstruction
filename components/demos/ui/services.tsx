import React from "react";

const services = [
  { name: "Framing", image: "/framingPicture.jpeg", description: "We build strong and reliable framing structures that provide a solid foundation for any project." },
  { name: "Flooring", image: "/flooringPicture2.JPG", description: "From hardwood to tile, we install high-quality flooring for durability and style." },
  { name: "Roofing", image: "/roofingPicture2.JPG", description: "Protect your home with expert roofing services designed for longevity and security." },
  { name: "Siding", image: "/sidingPicture2.JPG", description: "Upgrade your home's exterior with professional siding installation that enhances curb appeal." },
];

const ServicesSection = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-12">
      <h2 className="text-4xl font-bold text-gray-900 text-center">
        Your Go-To Construction & Repair Specialists
      </h2>
      <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
        Quality craftsmanship that stands the test of time. Whether it&apos;s framing, flooring, roofing, or siding, we bring precision and reliability to every project.
      </p>

      {/* Grid layout for 2 columns */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row items-center bg-white shadow-2xl shadow-gray-500/50 rounded-2xl overflow-hidden p-6 md:p-8 gap-6"
          >
            {/* Larger Uniform Image */}
            <img
              src={service.image}
              alt={service.name}
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-xl"
            />
            
            {/* Text Content */}
            <div className="text-center md:text-left md:ml-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.name}</h3>
              <p className="text-gray-600 mt-2 md:mt-3 text-base md:text-lg leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
