import { Link } from '@remix-run/react';
export default function Banner() {
  return (
    <section className="bg-indigo-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to Taskly!</h1>
        <p className="text-xl mb-8">Get your tasks organized with Taskly today.</p>

        <div className="flex justify-center">
          <button className="bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 flex items-center gap-2">
            <img width="24" height="24" src="https://img.icons8.com/wired/64/add.png" alt="add"/> Create Task </button>
            <Link to="/Createtask" className="hover:text-indigo-300"></Link>
        </div>
      </div>
    </section>
  );
}
