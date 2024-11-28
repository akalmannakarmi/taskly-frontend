// app/routes/login.tsx
import { Form, useActionData, redirect } from '@remix-run/react';
import { useState } from 'react';

const apiUrl = import.meta.env.VITE_API_URL;

export let action = async ({ request }: { request: Request }) => {
  const formData = new URLSearchParams(await request.text()); // Get form data
  const email = formData.get('email');
  const password = formData.get('password');

  // Simple validation
  if (!email || !password) {
    return { error: 'Both fields are required' };
  }

  // Send credentials to backend for authentication
  const response = await fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (response.ok && data.token) {
    // Store the JWT token in a cookie (you can use a cookie utility here)
    return redirect('/', {
      headers: {
        'Set-Cookie': `token=${data.token}; HttpOnly; Secure; Path=/; SameSite=Strict`,
      },
    });
  } else {
    return { error: data.error || 'Login failed' };
  }
};

type ActionData = {
    error?: string;
  };
export default function Login() {
  const actionData = useActionData<ActionData>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {actionData?.error && (
          <div className="text-red-500 text-sm mb-4">
            {actionData.error}
          </div>
        )}

        <Form method="post" className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            Log In
          </button>
        </Form>
      </div>
    </div>
  );
}
