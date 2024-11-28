// app/routes/signup.tsx
import { Form,json,redirect } from '@remix-run/react';
import { useState,useTransition } from 'react';

const apiUrl = import.meta.env.VITE_API_URL;

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
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
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
  
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                onChange={handlePasswordChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
  
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                required
                onChange={handleConfirmPasswordChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              {!passwordMatch && <p className="text-red-500 text-sm mt-1">Passwords do not match</p>}
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
  