import { useState } from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      alert('Subscribed successfully!');
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <footer className="bg-white text-gray-800 py-12 px-5 mt-8 md:px-20">
      <div className="container mx-auto grid gap-8 md:grid-cols-3">
        {/* Website Name & Description */}
        <div className="h-5">
              <img className="w-52 px-4 cursor-pointer pb-5"src={assets.logo} alt="logo" />

          {/* <h2 className="text-3xl font-semibold tracking-wide mb-4 text-blue-600">Narayana Health</h2> */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Delivering compassionate care and health solutions with excellence and integrity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-blue-600">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-800 hover:text-teal-500 transition duration-200">About Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-teal-500 transition duration-200">Our Doctors</a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-teal-500 transition duration-200">Services</a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-teal-500 transition duration-200">Contact Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-teal-500 transition duration-200">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-blue-600">Subscribe to our Newsletter</h3>
          <p className="text-gray-700 text-sm mb-4">Get updates on health tips, services, and news.</p>
          <form onSubmit={handleSubscribe} className="flex items-center bg-gray-100 rounded-full p-2 shadow">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-transparent text-blue-800 placeholder-gray-500 outline-none pl-4"
              required
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-blue-400 text-white rounded-full px-4 py-2 transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <p>© 2024 Narayana Helth. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

