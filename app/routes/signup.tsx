import { Form, json, redirect, useActionData } from '@remix-run/react';
import { useState, useTransition } from 'react';

// const apiUrl = import.meta.env.VITE_API_URL;
const apiUrl = "http://localhost:8000";

interface ActionData {
  error?: string;
}

export let action = async ({ request }: { request: Request }) => {
  const formData = new URLSearchParams(await request.text());
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

  if (!username || !email || !password) {
    return json({ error: 'All fields are required' }, { status: 400 });
  }

  try {
    const apiResponse = await fetch(`${apiUrl}/user/signup/`, {
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
  } catch (error) {
    return json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
};

export default function SignUp() {
  const [passwordMatch, setPasswordMatch] = useState(true);
  const actionData = useActionData<ActionData>();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <img src="/images/1.png" alt="Taskly Logo" className="h-16 mb-4" />
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        {actionData?.error && (
          <div className="mb-4 text-red-600 text-sm">{actionData.error}</div>
        )}

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
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            Sign Up
          </button>
        </Form>
      </div>
    </div>
  );
}
