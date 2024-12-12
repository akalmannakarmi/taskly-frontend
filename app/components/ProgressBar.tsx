import React, { useState } from "react";

interface ProgressBarProps {
  initialProgress?: number; // Initial progress value between 0 and 100
  storyPoints: number; // Story points associated with the task
  priority: "Low" | "Medium" | "High"; // Priority of the task

}

export default function ProgressBar({
  initialProgress = 0,
  storyPoints,
  priority,
}: ProgressBarProps) {
  const [progress, setProgress] = useState(initialProgress);
  const [isRunning, setIsRunning] = useState(false);

  // Function to start the task
  const handleStart = () => {
    setIsRunning(true);
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  // Function to cancel the task
  const handleCancel = () => {
    setIsRunning(false);
    setProgress(0);
  };

  // Get color based on priority
  const getPriorityColor = () => {
    switch (priority) {
      case "Low":
        return "bg-green-300";
      case "Medium":
        return "bg-green-400";
      case "High":
        return "bg-green-500";
      default:
        return "bg-green-300";
    }
  };

  return (
    <div className="relative w-full p-4 rounded-lg overflow-hidden">
      {/* Progress Bar Background */}
      <div className="absolute inset-0 bg-gray-300">
        <div
          className={`h-full ${getPriorityColor()}`}
          style={{ width: `${progress}%`, transition: "width 0.3s ease-in-out" }}
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex justify-between items-center h-full px-4">
        
      {/*Text added */}  
      
        <p className="">
          Priority: {priority} | Story Points: {storyPoints} 
        </p>
      

      {/* Priority and Story Points */}
      
      <div className="d-flex space-x-4"> 
       <p>This should help you get Redis up and running on your system.
      </p>
      </div>  
  

        {/* Control Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleStart}
            disabled={isRunning || progress >= 100}
            className={`px-4 py-2 rounded-lg text-white ${
              isRunning || progress >= 100 ? "bg-gray-400" : "bg-blue-600 hover:bg-[#6366F1]"}`}> Start 
          </button>

          <button onClick={handleCancel} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"> Cancel </button>
        </div>
      </div>
    </div>
  );
}
