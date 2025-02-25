import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Adjust path as needed
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error(error.message);
      setIsSubmitting(false); // Stop animation on error
    }
  };

  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={onSubmitHandler} className="w-full max-w-md bg-white shadow-lg rounded-lg p-5 space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Login</h2>
        <p className="text-center text-gray-600">Please login to book an appointment</p>

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

        <button
          type="submit"
          className={`w-full py-3 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 ${
            isSubmitting ? 'animate-pulse' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Dont have an account?{' '}
          <span className="text-blue-600 cursor-pointer underline" onClick={() => navigate('/register')}>
            Sign up here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
