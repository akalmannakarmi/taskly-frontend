// app/routes/ThisMonth.tsx
import { useState } from "react";

type Task = {
  id: number;
  title: string;
  date: string; // Date in the format "2024-12-01"
  completed: boolean;
};

export default function ThisMonth() {
  // Example tasks data (in a real app, this would come from an API or database)
  const tasks: Task[] = [
    { id: 1, title: "Finish the project proposal", date: "2024-12-01", completed: false },
    { id: 2, title: "Team meeting at 10 AM", date: "2024-12-02", completed: true },
    { id: 3, title: "Complete code review", date: "2024-12-05", completed: false },
    { id: 4, title: "Write blog post", date: "2024-12-08", completed: false },
    { id: 5, title: "Prepare for presentation", date: "2024-12-12", completed: true },
    { id: 6, title: "Attend client call", date: "2024-12-15", completed: false },
    { id: 7, title: "Submit weekly report", date: "2024-12-20", completed: false },
    { id: 8, title: "End of month review", date: "2024-12-30", completed: false },
  ];

  // Group tasks by date (using the day of the month)
  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.date]) {
      acc[task.date] = [];
    }
    acc[task.date].push(task);
    return acc;
  }, {} as Record<string, Task[]>);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Tasks for This Month</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(groupedTasks).map((date) => (
          <div key={date} className="border border-gray-300 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{date}</h2>
            <ul className="space-y-2">
              {groupedTasks[date].map((task) => (
                <li key={task.id} className="flex justify-between items-center">
                  <span
                    className={`${
                      task.completed ? "line-through text-gray-500" : "text-gray-900"
                    }`}
                  >
                    {task.title}
                  </span>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => {
                      // Handle task completion state toggle
                      task.completed = !task.completed;
                    }}
                    className="ml-4 cursor-pointer"
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
