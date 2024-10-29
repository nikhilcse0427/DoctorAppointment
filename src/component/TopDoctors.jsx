import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
const TopDoctors = () => {
  const navigate = useNavigate();
  const {doctors} =useContext(AppContext)
  return (
    <>
      <div className="flex flex-col items-center gap-4 py-12 mt-11">
        <h1 className="text-3xl font-medium">Book Trusted Doctors Now</h1>
        <p className="text-center ">
          Effortlessly find and schedule appointments
          <br /> with top-rated healthcare professionals.
        </p>
      </div>

      <div className="w-full flex justify-center">
        <div className="grid sm:grid-cols-5 place-content-center gap-2 gap-y-8">
          {doctors.slice(0, 10).map((item, index) => (
            <div onClick={()=>{
              navigate(`/appointment/${item._id}`)
            }}
              key={index}
              className="min-w-[200px] border border-gray-200 shadow-md rounded-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
            >
              <img
                className="h-45 w-full object-cover rounded-t-lg bg-blue-400"
                src={item.image}
                alt="top-doctors"
              />
              <div className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  <p className="text-green-600 text-sm font-semibold">
                    Available
                  </p>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-1">
                  {item.name}
                </p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div onClick={()=>{navigate('/doctors'); scrollTo(0,0)}}className="mt-8 flex justify-center items-center w-full h-8">
        <button className="px-5 py-2 text-gray-700 bg-yellow-400 rounded-lg shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition duration-300">
          More
        </button>
      </div>
    </>
  );
};

export default TopDoctors;
