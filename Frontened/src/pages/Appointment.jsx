import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Appointment() {
  const { docId } = useParams();
  const navigate = useNavigate();
  const [docInfo, setDocInfo] = useState(null);
  const { doctors } = useContext(AppContext);
  const [isBooked, setIsBooked] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  useEffect(() => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  }, [doctors]);

  const handleBooking = () => {
    if (appointmentDate && appointmentTime) {
      setIsBooked(true);
    }
  };

  const handlePaymentClick = () => {
    navigate('/payment', {
      state: {
        docInfo,
        appointmentDate,
        appointmentTime
      }
    });
  };

  return (
    docInfo && (
      <div className="flex flex-col sm:flex-row gap-6 p-6 bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg rounded-xl max-w-5xl mx-auto">
        <div className="flex-shrink-0 w-full sm:w-1/3">
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-gray-300"
            src={docInfo.image}
            alt="Doctor"
          />
        </div>

        <div className="flex-grow sm:ml-6 space-y-5 text-gray-800">
          <h2 className="text-4xl font-bold text-gray-800">{docInfo.name}</h2>
          <p className="text-xl font-semibold text-gray-700">
            {docInfo.degree} - {docInfo.speciality}
          </p>
          <p className="text-gray-500 text-sm">{docInfo.experience} years of experience</p>
          <p className="text-gray-600 leading-relaxed">{docInfo.about}</p>
          <div className="font-bold text-2xl">Appointment Fee - ₹{docInfo.fees}</div>

          <div className="flex flex-col space-y-3">
            <label className="font-semibold text-gray-700">Select Appointment Date:</label>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <label className="font-semibold text-gray-700">Select Appointment Time:</label>
            <input
              type="time"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {!isBooked ? (
            <button
              onClick={handleBooking}
              className={`px-6 py-3 text-white rounded-lg shadow ${appointmentDate && appointmentTime ? 'bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
              disabled={!appointmentDate || !appointmentTime}
            >
              Book Appointment
            </button>
          ) : (
            <div className="mt-4 p-5 bg-gray-50 border-l-4 border-blue-600 rounded-lg shadow">
              <p className="text-lg font-semibold text-gray-800">
                Appointment Booked Successfully!
              </p>
              <p className="text-gray-700">
                To proceed with the payment, {" "}
                <button
                  onClick={handlePaymentClick}
                  className="text-blue-600 underline focus:outline-none"
                >
                  click here
                </button>.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  );
}