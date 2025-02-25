import { assets } from "../assets/assets";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-12 px-6 md:px-20 bg-white shadow-md">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={assets.about_image}
          alt="About Narayana Hospital"
          className="rounded-lg shadow-xl w-full h-auto max-w-md object-cover transform hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 md:pl-10 space-y-6 text-gray-800">
        <h2 className="text-4xl font-extrabold text-blue-600 tracking-wide animate-fadeIn">
          About Narayana Hospital
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Narayana Hospital simplifies your healthcare journey by providing a seamless platform for scheduling appointments and managing health records, putting your health first with convenience and ease.
        </p>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-500">
            Advanced Healthcare Technology
          </h3>
          <p className="text-base leading-relaxed text-gray-700">
            Our platform uses state-of-the-art technology to bridge the gap between patients and healthcare providers, ensuring you receive timely, quality care whenever you need it.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-500">
            Our Vision
          </h3>
          <p className="text-base leading-relaxed text-gray-700">
            We envision a healthcare experience where access to care is effortless and accessible, allowing users to prioritize their health with confidence and ease.
          </p>
        </div>

        <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-500 transform hover:-translate-y-1 transition duration-300 ease-in-out">
          Discover Our Services
        </button>
      </div>
    </section>
  );
};

export default About;
