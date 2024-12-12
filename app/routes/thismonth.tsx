// app/routes/thismonth.tsx
import Navbar from '~/components/Navbar';
import Tasks from '~/components/Tasks';
import Footer from '~/components/Footer';
import ProgressBar from '~/components/ProgressBar';
import { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: "Taskly | This Month's Tasks" },
  ];
};

export default function ThisMonthPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="w-full mx-auto p-6 flex flex-col items-center">

        <div className="mt-8 w-full">

          <Tasks taskType="this Month" />
          
        </div>

      </div>

      <Footer />
      
    </div>
  );
}
