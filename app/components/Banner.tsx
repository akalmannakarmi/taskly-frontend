// app/components/Banner.tsx
export default function Banner() {
    return (
      <section className="bg-indigo-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Welcome to Taskly!</h1>
          <p className="text-xl mb-8">Get your task organized with taskly today.</p>
          <button className="bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-800">
            Learn More
          </button>
        </div>
      </section>
    );
  }
  