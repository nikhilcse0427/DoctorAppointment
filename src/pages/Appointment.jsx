/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

export default function Appointment() {
  const { docId } = useParams();
  const [docInfo, setDocInfo] = useState(null);
  const { doctors } = useContext(AppContext);

  const fetchDocInfo = () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors]);

  return docInfo && (
    <div className="flex flex-col sm:flex-row gap-6 p-6 bg-gradient-to-r from-blue-50 to-blue-100 shadow-2xl rounded-xl max-w-4xl mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200">
      {/* Left: Image Section */}
      <div className="flex-shrink-0 w-full sm:w-1/3">
        <img
          className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-white transition-all duration-300 transform hover:scale-110"
          src={docInfo.image}
          alt="Doctor"
        />
      </div>

      {/* Right: Info Section */}
      <div className="flex-grow sm:ml-6 space-y-4 text-gray-800">
        {/* Doctor Name */}
        <div className="flex items-center space-x-2">
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            {docInfo.name}
          </h2>
          <img src={assets.verified_icon} alt="Verified" className="w-6 h-6" />
        </div>

        {/* Degree and Specialty */}
        <div className="text-lg text-gray-700">
          <p className="font-semibold">{docInfo.degree} - {docInfo.speciality}</p>
          <p className="text-gray-500 text-sm">{docInfo.experience} years of experience</p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-1">
            <span>About</span>
            <img src={assets.info_icon} alt="Info" className="w-5 h-5" />
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {docInfo.about}
          </p>
        </div>
        <span className="font-bold text-2xl">Appointment Fee - {docInfo.fees}</span>
      </div>
    </div>
  );
}
