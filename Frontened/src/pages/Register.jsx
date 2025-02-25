import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {setDoc,doc} from 'firebase/firestore'
import { db } from '../pages/firebase';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading indication

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    setLoading(true); 

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser
      console.log("User registered successfully");
      // Clear input fields after successful registration (optional)
      if(user){
        await setDoc(doc(db,"Users",user.uid),{
          email:user.email,
          fullName:name,
        })
      }
      navigate('/login'); 
    } catch (error) {
      setError(error.message); 
      console.error("Registration error:", error.message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={onSubmitHandler} className="w-full max-w-md bg-white shadow-lg rounded-lg p-5 space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Create Account</h2>
        <p className="text-center text-gray-600">Please sign up to book an appointment</p>

        {/* Error Message Display */}
        {error && <p className="text-red-600 text-center">{error}</p>}

        {/* Name Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
          <input 
            id="name"
            type="text" 
            onChange={(e) => setName(e.target.value)} 
            value={name} 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" 
            required 
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
          <input 
            id="email"
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" 
            required 
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="password">Password</label>
          <input 
            id="password"
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" 
            required 
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className={`w-full py-3 flex justify-center items-center text-white rounded-lg font-semibold transition duration-200 ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`} 
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
          ) : null}
          {loading ? 'Signing up...' : 'Signup'}
        </button>

        {/* Navigation to Login */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <span 
            onClick={() => navigate('/login')} 
            className="text-blue-600 cursor-pointer underline"
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
