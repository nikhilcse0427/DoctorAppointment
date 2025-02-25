import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import NavBar from './component/NavBar';
import About from './pages/About';
import Appointment from './pages/Appointment';
import Doctors from './pages/Doctors';
import Home from './pages/Home';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import Contact from './pages/Contact';
import Register from './pages/Register';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <div className="mx-16 sm:max-[10%]">
      <NavBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/contact"
          element={
              <Contact />
          }
        />
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/doctors"
          element={<Doctors />}
        />
        <Route
          path="/doctors/:speciality"
          element={<Doctors />}
        />
        <Route path="/about" element={<About />}
        />
        
        <Route
          path="/appointment/:docId"
          element={<Appointment />}
        />
        <Route path="/payment" element={<PaymentPage />} />

        <Route
          path="/myProfile"
          element={<MyProfile />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;