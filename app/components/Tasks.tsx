// app/components/Tasks.tsx
export default function Tasks() {
    return (
      <main className="py-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Section 1</h3>
              <p className="text-gray-600">This is a placeholder section with some content. Add your actual content here.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Section 2</h3>
              <p className="text-gray-600">This is another placeholder section with content.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Section 3</h3>
              <p className="text-gray-600">This is the third section with placeholder content.</p>
            </div>
          </div>
        </div>
      </main>
    );
  }
  