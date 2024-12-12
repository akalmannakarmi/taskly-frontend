// app/routes/thisweek.tsx
import Navbar from '~/components/Navbar';
import Tasks from '~/components/Tasks';
import Footer from '~/components/Footer';
import ProgressBar from '~/components/ProgressBar';
import { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: "Taskly | This Week's Tasks" },
  ];
};

export default function ThisWeekPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="w-full mx-auto p-6 flex flex-col items-center">

        <div className="mt-8 w-full">

          <Tasks taskType=" this Week" />
          
        </div>

      </div>

      <Footer />
      
    </div>
  );
}
