import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className=" mt-8 flex flex-col items-center justify-center h-[400px] bg-gray-100  text-center p-8 md:p-12 rounded-xl shadow-xl">
      <h1 className="text-3xl md:text-5xl font-bold text-blue-600 leading-tight mb-3">
        Book Your Appointment with Trusted Doctors
      </h1>
      <p className="text-lg md:text-xl text-black font-light mb-6 max-w-xl">
        Experience personalized care with highly qualified specialists across a range of medical fields.
      </p>
      <button onClick={()=>{navigate('/login');scrollTo(0,0)}}className="bg-blue-400 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:bg-blue-800 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        Create Account
      </button>
    </div>
  );
};

export default Banner;
