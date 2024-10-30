import { Route, Routes } from 'react-router-dom'
import Footer from './component/Footer'
import NavBar from './component/NavBar'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Doctors from './pages/Doctors'
import Home from './pages/Home'
import Login from './pages/Login'
import MyAppointment from './pages/MyAppointment'
import MyProfile from './pages/MyProfile'
import Contact from './pages/contact'
function App() {

  return (
    <div className="mx-10 sm:max-[20%]:">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/doctors" element={<Doctors />}></Route>
      <Route path="/doctors/:speciality" element={<Doctors />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/myAppointment" element={<MyAppointment />}></Route>
      <Route path='/appointment/:docId' element={<Appointment />} ></Route>
      <Route path="/myProfile" element={<MyProfile />}></Route>
    </Routes>
    <Footer />
    </div>
  )
}

export default App
