/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [selectedSpeciality, setSelectedSpeciality] = useState(speciality);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const handleNavigation = (specialityName) => {
    setSelectedSpeciality(specialityName);
    navigate(speciality === specialityName ? '/doctors' : `/doctors/${specialityName}`);
  };

  return (
    <>
      <p className="text-blue-600 font-bold">Explore our range of specialized medical professionals.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="cursor-pointer w-full sm:w-1/4 lg:w-1/5 flex flex-col gap-4 p-4 bg-slate-100 shadow-md rounded-lg">
          
          <p
            onClick={() => handleNavigation('Gynecologist')}
            className={`bg-white w-full pl-2 p-1 border border-gray-300 rounded-sm ${selectedSpeciality === 'Gynecologist' ? 'bg-yellow-400 text-black' : ''}`}
          >
            Gynecologist
          </p>
          <p
            onClick={() => handleNavigation('Dermatologist')}
            className={`bg-white w-full pl-2 p-1 border border-gray-300 rounded-sm ${selectedSpeciality === 'Dermatologist' ? 'bg-yellow-400 text-black' : ''}`}
          >
            Dermatologist
          </p>
          <p
            onClick={() => handleNavigation('Cardiologists')}
            className={`bg-white w-full pl-2 p-1 border border-gray-300 rounded-sm ${selectedSpeciality === 'Cardiologists' ? 'bg-yellow-400 text-black' : ''}`}
          >
            Cardiologists
          </p>
          <p
            onClick={() => handleNavigation('Neurologist')}
            className={`bg-white w-full pl-2 p-1 border border-gray-300 rounded-sm ${selectedSpeciality === 'Neurologist' ? 'bg-yellow-400 text-black' : ''}`}
          >
            Neurologist
          </p>
          <p
            onClick={() => handleNavigation('GeneralPhysician')}
            className={`bg-white w-full pl-2 p-1 border border-gray-300 rounded-sm ${selectedSpeciality === 'GeneralPhysician' ? 'bg-yellow-400 text-black' : ''}`}
          >
            GeneralPhysician
          </p>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className="border border-gray-200 shadow-md rounded-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
            >
              <img
                className="h-45 w-full object-cover rounded-t-lg bg-blue-400"
                src={item.image}
                alt="top-doctors"
              />
              <div className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  <p className="text-green-600 text-sm font-semibold">Available</p>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-1">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Doctors;
