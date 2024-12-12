// app/routes/profile.tsx
import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async () => {
  // Example data or fetch user profile data here
  return json({ message: "Welcome to your profile!" });
};

export default function Profile() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
      <p>{data.message}</p>
    </div>
  );
}
