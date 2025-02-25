import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import axios from "axios"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      await axios.post("http://localhost:8000/api/contact", formData);
      alert("Thank you for reaching out! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("There was an error sending the contact form data:", error);
      alert("Thank you for reaching out! We'll get back to you soon.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-start py-12 px-6 md:px-20 bg-gray-50">
      {/* Contact Details Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Reach out to us with any questions or feedback. Our team is here to assist you with your healthcare needs.
        </p>
        
      
        <div className="space-y-4">
          {/* Address */}
          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-blue-600 w-6 h-6" />
            <p className="text-gray-800">
              123 Healthcare Avenue,<br />Bhagalpur, Bihar, India - 812001
            </p>
          </div>
          {/* Phone */}
          <div className="flex items-start space-x-3">
            <FaPhoneAlt className="text-blue-600 w-6 h-6" />
            <p className="text-gray-800">+91 98765 43210</p>
          </div>
          {/* Email */}
          <div className="flex items-start space-x-3">
            <FaEnvelope className="text-blue-600 w-6 h-6" />
            <p className="text-gray-800">support@narayanahospital.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Send Us a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-1">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-600 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows="5"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-500 transition duration-300"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;