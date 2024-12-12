import React, { useState } from "react";
import ProgressBar from "~/components/ProgressBar";

type Task = {
  id: number;
  title: string;
  date: string; // Date in the format "2024-12-01"
  completed: boolean;
};

interface TasksProps {
  taskType: string;
  
}

export default function Tasks({ taskType }: TasksProps) {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Finish the project proposal", date: "2024-12-01", completed: false },
    { id: 2, title: "Team meeting at 10 AM", date: "2024-12-02", completed: true },
    { id: 3, title: "Complete code review", date: "2024-12-05", completed: false },
    { id: 4, title: "Write blog post", date: "2024-12-08", completed: false },
    { id: 5, title: "Prepare for presentation", date: "2024-12-12", completed: true },
    { id: 6, title: "Attend client call", date: "2024-12-15", completed: false },
    { id: 7, title: "Submit weekly report", date: "2024-12-20", completed: false },
    { id: 8, title: "End of month review", date: "2024-12-30", completed: false },
  ]);

  // Group tasks by date
  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.date]) {
      acc[task.date] = [];
    }
    acc[task.date].push(task);
    return acc;
  }, {} as Record<string, Task[]>);

  // Function to toggle task completion
  const toggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
  <div className="w-full min-h-screen p-6  ">
      {/* Background Style */}
    <div className="bg-gray-300 rounded-lg overflow-hidden w-full">
      <div className="top-0 left-0 h-full bg-white" style={{ width: "100%" }}> 
        <h2 className="text-3xl font-bold mb-4  flex flex-col items-center">Tasks for {taskType}</h2>
        <div className="z-10 flex flex-col items-center text-[#1F384D]">
          <p> All tasks should be complete by the end of </p>
        </div>
      </div>
    </div>

    {/* Overlay Content */}
    <div className="z-10 flex flex-col items-center mt-8">
      <h1 className="text-3xl font-bold text-white mb-6"></h1>

      <div className="space-y-6 w-3/4 mx-auto">
        {Object.keys(groupedTasks).map((date) => (
            <ProgressBar initialProgress={30} storyPoints={20} priority="Medium" />
        ))}
      </div>
    </div>
  </div>
  );
}
