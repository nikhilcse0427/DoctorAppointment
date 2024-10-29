import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const SpecialityMenu = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 py-16 text-black">
        <h1 className="text-3xl font-medium">Discover Expert Healthcare</h1>
        <p className="text-center ">
          Your health, your choice: browse our trusted doctors
          <br /> and secure your appointment, seamlessly and quickly.
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-8 w-full my-5">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => {
              scrollTo(0, 0);
            }}
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center text-center gap-2 cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
          >
            <div className="w-32 h-32 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.speciality}
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </div>
            <p className="text-sm font-medium">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SpecialityMenu;
