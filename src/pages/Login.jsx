import { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('signUp');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={onSubmitHandler} className="w-full max-w-md bg-white shadow-lg rounded-lg p-5 space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          {state === 'signUp' ? 'Create Account' : 'Login'}
        </h2>
        <p className="text-center text-gray-600">
          Please {state === 'signUp' ? 'sign up' : 'login'} to book an appointment
        </p>

        {state === 'signUp' && (
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
        )}

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

        <button type="submit" className="w-full py-3 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
          {state === 'signUp' ? 'Create Account' : 'Login'}
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          {state === 'signUp' ? (
            <>
              Already have an account?{' '}
              <span 
                onClick={() => setState('login')} 
                className="text-blue-600 cursor-pointer underline"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Dont have an account?{' '}
              <span 
                onClick={() => setState('signUp')} 
                className="text-blue-600 cursor-pointer underline"
              >
                Sign up here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
