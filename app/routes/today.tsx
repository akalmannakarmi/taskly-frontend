// app/routes/today.tsx
import Tasks from '~/components/Tasks';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
import ProgressBar from "~/components/ProgressBar";
import { MetaFunction } from '@remix-run/react';


export default function Today() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="w-full mx-auto p-6 flex flex-col items-center">

        <div className="mt-8 w-full">

          <Tasks taskType="Today" />
          
        </div>

      </div>

      <Footer />
      
    </div>
  );
}

