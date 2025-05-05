import React from "react";

const LocationSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Google Maps Embed */}
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg h-[450px]">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.2647164539233!2d-78.62137118474523!3d35.70130058019092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf3c7557ad255%3A0x9ed7df26bdb8d3d3!2s500%20Benson%20Rd%20%23222%2C%20Garner%2C%20NC%2027529!5e0!3m2!1sen!2sus!4v1680508984512!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Visit Our Office in Garner, NC
          </h2>
          <p className="text-gray-700 mb-4">
            Our team proudly serves the local community from our convenient
            location at 500 Benson Rd., Suite 222 in Garner. Whether you&apos;re
            looking to discuss a roofing project or just want to meet
            face-to-face, we&apos;re always happy to connect.
          </p>
          <p className="text-gray-700 mb-6">
            Stop by and say hello—or click below to schedule a free
            consultation. We&apos;re here to help your home stay protected and
            beautiful.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-400 text-white font-semibold rounded hover:bg-blue-600 transition"
          >
            Schedule a Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
