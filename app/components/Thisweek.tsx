// app/routes/ThisWeek.tsx
import { useState } from "react";

type Task = {
  id: number;
  title: string;
  day: string; // Day of the week: "Monday", "Tuesday", etc.
  completed: boolean;
};

export default function ThisWeek() {
  // Example tasks data (in a real app, this would come from an API or database)
  const tasks: Task[] = [
    { id: 1, title: "Finish project documentation", day: "Monday", completed: false },
    { id: 2, title: "Team meeting at 10 AM", day: "Tuesday", completed: true },
    { id: 3, title: "Complete code review", day: "Wednesday", completed: false },
    { id: 4, title: "Write blog post", day: "Thursday", completed: false },
    { id: 5, title: "Prepare for presentation", day: "Friday", completed: true },
  ];

  // Group tasks by day of the week
  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.day]) {
      acc[task.day] = [];
    }
    acc[task.day].push(task);
    return acc;
  }, {} as Record<string, Task[]>);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Tasks for This Week</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(groupedTasks).map((day) => (
          <div key={day} className="border border-gray-300 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{day}</h2>
            <ul className="space-y-2">
              {groupedTasks[day].map((task) => (
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
