import React from "react";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <section id="services" className="services-section py-8">
      <Helmet>
        <title>Services | Simi Dickson</title>
        <meta
          name="description"
          content="Services offered by Your Name: Website Development, Mobile App Development, and UI/UX Design."
        />
      </Helmet>
      <h2 className="text-light-gray text-2xl font-bold py-4 text-center">
        Services I Offer
      </h2>
      <div className="services-container flex flex-wrap justify-center">
        <div className="service-card bg-dark-blue text-white shadow-lg m-4 p-6 rounded-lg max-w-sm">
          <h3 className="text-xl font-semibold mb-2">Website Development</h3>
          <p className="text-gray-700">
            I create responsive and dynamic websites using the latest web
            technologies to ensure optimal performance and user experience.
          </p>
        </div>
        <div className="service-card bg-dark-blue text-white shadow-lg m-4 p-6 rounded-lg max-w-sm">
          <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
          <p className="text-gray-700">
            I develop cross-platform mobile applications that provide seamless
            performance and intuitive user interfaces across all devices.
          </p>
        </div>
        <div className="service-card bg-dark-blue text-white shadow-lg m-4 p-6 rounded-lg max-w-sm">
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-700">
            I design user interfaces and experiences that are both visually
            appealing and easy to use, ensuring a satisfying user journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
