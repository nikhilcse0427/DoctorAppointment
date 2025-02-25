import { useLocation } from "react-router-dom";
import QRCode from "react-qr-code";
import jsPDF from 'jspdf';
import { useState } from "react";

export default function PaymentPage() {
  const location = useLocation();
  const { docInfo, appointmentDate, appointmentTime, appointerName } = location.state;
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCompletePayment = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsPaymentSuccessful(true);
      generateAppointmentSlip();
      setIsSubmitting(false);
    }, 2000); // Simulate payment processing delay
  };

  const generateAppointmentSlip = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.setTextColor(0, 102, 204); // Blue color for heading
    doc.text("Narayana Hospital", 20, 20);
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0); // Black color for text
    doc.text(`Appointment Details`, 20, 40);
    doc.setFontSize(12);
    doc.text(`Doctor Name: ${docInfo.name}`, 20, 60);
    doc.text(`Appointer Name: ${appointerName}`, 20, 70);
    doc.text(`Appointment Fee: ₹${docInfo.fees}`, 20, 80);
    doc.text("Payment Status: Successful", 20, 90);
    doc.text(`Appointment Date: ${appointmentDate}`, 20, 100);
    doc.text(`Appointment Time: ${appointmentTime}`, 20, 110);
    doc.save("Appointment_Slip.pdf");
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 shadow-2xl rounded-2xl max-w-4xl mx-auto border border-gray-200 min-h-[60vh] overflow-y-auto">
      {/* Title & Stethoscope Image */}
      <div className="flex items-center space-x-4 mb-6">
        <img 
          src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-stethoscope-diagnostic-health-medicine-hospital-doctor-tool-vector-illustration-png-image_9112715.png" // Replace with your image path
          alt="Stethoscope" 
          className="w-16 h-16 rounded-full border-4 border-white shadow-md" 
        />
        <h2 className="text-3xl font-bold text-gray-800">Payment Details</h2>
      </div>

      {/* Main Content */}
      <div className="flex w-full space-x-6">
        {/* Left Side: Details */}
        <div className="w-1/2 bg-white p-6 rounded-xl shadow-md">
          <p className="font-semibold text-2xl text-gray-800">Dr. {docInfo.name}</p>
          <p className="text-gray-600">{docInfo.speciality}</p>
          <div className="mt-4 space-y-2">
            <p className="text-gray-800">Date: <span className="font-medium">{appointmentDate}</span></p>
            <p className="text-gray-800">Time: <span className="font-medium">{appointmentTime}</span></p>
            <p className="text-gray-800">Appointer: <span className="font-medium">{appointerName}</span></p>
            <p className="mt-4 text-2xl font-bold text-blue-600">Fee: ₹{docInfo.fees}</p>
          </div>

          {/* Payment Method Selection */}
          <div className="mt-6">
            <label className="font-semibold text-gray-700 block mb-2">Select Payment Method:</label>
            <div className="flex space-x-4">
              <button
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  paymentMethod === "upi" ? "bg-blue-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setPaymentMethod("upi")}
              >
                UPI
              </button>
              <button
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  paymentMethod === "cash" ? "bg-blue-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setPaymentMethod("cash")}
              >
                Cash on Delivery
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: QR Code */}
        {paymentMethod === "upi" && (
          <div className="w-1/2 bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
            <p className="text-gray-700 mb-4">Scan the QR code to pay via UPI:</p>
            <QRCode 
              value={`upi://pay?pa=9798893989@axl&pn=${docInfo.name}&am=${docInfo.fees}&cu=INR`} 
              size={150}
              className="border-4 border-white rounded-lg shadow-md"
            />
            <p className="mt-4 text-sm text-gray-500">Ensure your payment app supports UPI.</p>
          </div>
        )}
      </div>

      {/* Payment Button with Animation */}
      <button
        onClick={handleCompletePayment}
        disabled={isSubmitting}
        className={`mt-6 px-8 py-4 bg-green-600 text-white rounded-xl shadow-lg transition-all transform ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700 hover:scale-105"
        } w-full text-lg font-semibold`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            <span className="ml-2">Processing...</span>
          </div>
        ) : (
          "Complete Payment"
        )}
      </button>

      {/* Payment Success Message */}
      {isPaymentSuccessful && (
        <div className="mt-6 p-6 bg-green-50 border-l-4 border-green-600 rounded-xl shadow-md text-center w-full">
          <p className="text-2xl font-semibold text-green-800">Payment Successful!</p>
          <p className="text-gray-700 mt-2">Your appointment is confirmed.</p>
        </div>
      )}
    </div>
  );
}