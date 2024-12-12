// app/routes/signup.tsx
import { Form, json, redirect, useActionData } from '@remix-run/react';
import { useState, useTransition } from 'react';


const apiUrl = import.meta.env.VITE_API_URL;

interface ActionData {
  error?: string;
}

export let action = async ({ request }: { request: Request }) => {
    const formData = new URLSearchParams(await request.text()); // Get form data from the request
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
  
    // Basic form validation (you can add more checks here)
    if (!username || !email || !password) {
      return json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
  
    const apiResponse = await fetch(`${apiUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
  
    if (!apiResponse.ok) {
      return json({ error: 'Failed to create account' }, { status: 500 });
    }
  
    return redirect('/login');
};
  

export default function SignUp() {
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [isSubmitting] = useTransition(); // Destructure the boolean from useTransition
    
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const password = e.target.value;
      const confirmPassword = (document.getElementById('confirm-password') as HTMLInputElement).value;
      if (password !== confirmPassword) {
        setPasswordMatch(false);
      } else {
        setPasswordMatch(true);
      }
    };
  
    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const confirmPassword = e.target.value;
      const password = (document.getElementById('password') as HTMLInputElement).value;
      if (password !== confirmPassword) {
        setPasswordMatch(false);
      } else {
        setPasswordMatch(true);
      }
    };

    const actionData = useActionData<ActionData>();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [Conf_password, setConfPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    
      
    };

    
  
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <img src="/images/1.png" alt="Taskly Logo" className="h-16 mb-4" />
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          
          <Form method="post" className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              
            />
            <button type="button" onClick={togglePasswordVisibility} 
              className="absolute right-3 top-9 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none">
              {showPassword ? (
                // Eye Open Icon (Password Visible)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 translate-y-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

              ) : (
                // Eye Closed Icon (Password Hidden)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 translate-y-1" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>

              )}
            </button>
          </div>
  
            {/* <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                required
                onChange={handleConfirmPasswordChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              /> */}
            <div className="mb-6 relative">
            <label htmlFor="Confirm password" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              name="Confirm password"
              id="Confirm password"
              value={Conf_password}
              onChange={(e) => setConfPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required></input>

              
             
            <button type="button" onClick={togglePasswordVisibility} 
              className="absolute right-3 top-9 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none">
              {showPassword ? (
                // Eye Open Icon (Password Visible)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 translate-y-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

              ) : (
                // Eye Closed Icon (Password Hidden)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 translate-y-1" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>

              )}
            </button>
          </div>
  
            <button
              type="submit"
              disabled={isSubmitting} // Disable button while submitting
              className="w-full mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
            >
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}  {/* Show loading text during submission */}
            </button>
          </Form>
        </div>
      </div>
    );
}
  