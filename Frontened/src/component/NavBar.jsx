import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const NavBar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const userToken = localStorage.getItem('token');
    if (userToken) {
      setToken(true);
    }
  }, []);

  return (
    <div className="flex items-center justify-between py-5 mb-4 text-base border-b border-b-gray-400">
      <img className="w-52 px-4 cursor-pointer" src={assets.logo} alt="logo" onClick={() => navigate('/')} />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'underline ' : '')}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to='/doctors'
          className={({ isActive }) => (isActive ? 'underline' : '')}
        >
          <li>All Doctors</li>
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'underline' : '')}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) => (isActive ? 'underline' : '')}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer'>
            <img className="w-12 h-12 rounded-full" src={assets.profile_pic} alt="profilepic" />
          </div>
        ) : (
          <button
            onClick={() => navigate('/register')}
            className="bg-blue-700 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hidden md:inline-block"
          >
            Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;