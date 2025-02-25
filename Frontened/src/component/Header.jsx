import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-200 flex flex-col md:flex-row items-center rounded-lg px-4 md:px-8 lg:px-12 text-gray-800">
      
      {/* Left content */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-2 py-4 md:py-6 text-left">
        <h1 className="text-xl md:text-4xl font-medium text-gray-900">
          Your Health,<br /> One Click Away
        </h1>
        <p className="text-2xl md:text-base max-w-xs text-gray-700">
          Access the best healthcare providers from the comfort of your home.
        </p>
        <button
          onClick={() => navigate('/doctors')}
          className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 mt-3 rounded-full shadow-sm hover:bg-blue-700 transition-all duration-300 text-base"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="arrow-icon" className="w-3 h-3" />
        </button>
      </div>
      
      {/* Right Image Section */}
      <div className="md:w-1/2 mt-3 md:mt-0 flex justify-center">
        <img src={assets.header_img} alt="doctor-header" className="w-2/3 h-auto object-cover rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Header;
