// app/routes/index.tsx
import Navbar from '~/components/Navbar';
import Tasks from '~/components/Tasks';
import Footer from '~/components/Footer';
import { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
    return [
      { title: "Taskly | Today's Tasks" },
    ];
  };

export default function Home() {
  return (
    <div>
        <Navbar />

        <Tasks taskType="Year"/>

        <Footer />
    </div>
  );
}
