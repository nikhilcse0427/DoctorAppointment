import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
const NavBar = () => {

  const navigate = useNavigate()

  const [token,setToken] = useState(true)
  return (
    <div className="flex items-center justify-between py-5 mb-4 text-base border-b border-b-gray-400">
    <img className="w-52 px-4 cursor-pointer" src={assets.logo} alt="logo" />
    <ul className="hidden md:flex item:start gap-5 font-medium">
        <NavLink to='/'>
          <li>Home</li>
          <hr className="border-none outline-none h-0.5  bg-violet-900 hidden" />
        </NavLink>
        <NavLink to='/doctors'>
          <li>All Doctors</li>
          <hr className=" border-none outline-none h-0.5 bg-violet-900 hidden"/>
        </NavLink>
        <NavLink to='/about'>
          <li>About</li>
          <hr className="border-none outline-none h-0.5 bg-violet-900 hidden"/>
        </NavLink>
        <NavLink to='/contact'>
          <li>Contact</li>
          <hr className="border-none outline-none h-0.5 bg-violet-900 hidden"/>
        </NavLink>
      </ul>
            <div className="flex items-center gap-4">
  { token ?
    <div className='flex items-center gap-2 cursor-pointer group relative'>
      <img className="w-12 h-12 rounded-full" src={assets.profile_pic} alt="profilepic" />
      <img className="w-5" src={assets.dropdown_icon} alt="dropdown icon" />

  <div className='absolute top-12 right-0 pt-2 text-base text-gray-700 z-20 hidden group-hover:block'>
    <div className='min-w-48 bg-slate-100 rounded flex flex-col gap-5 p-4'>
      <p onClick={()=>navigate('/myProfile')}className='hover:font-bold cursor-pointer'>MyProfile</p>
      <p onClick={()=>navigate('/myAppointment')}className='hover:font-bold cursor-pointer'>MyAppointment</p>
      <p onClick={()=>setToken(false)}className='hover:font-bold cursor-pointer'>Logout</p>
    </div>
  </div>
</div>:
            <button onClick={()=>navigate('/login')}className=" bg-blue-700 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hidden md:inline-block">Create Account</button>
        }

      </div>
    </div>
  )
}

export default NavBar
