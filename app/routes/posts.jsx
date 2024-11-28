const apiUrl = import.meta.env.VITE_API_URL;

export const loader = async () => {
    const response = await fetch(apiUrl);
    const posts = await response.json();
    return posts.slice(0, 5); // Fetch first 5 posts
  };
  
  import { useLoaderData } from "@remix-run/react";
  
  export default function Posts() {
    const posts = useLoaderData();
  
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  