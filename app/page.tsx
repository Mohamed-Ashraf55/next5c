"use client"

import { useState } from "react"
import Image from "next/image";





export default function Home() {
  const [task,setTask] = useState("")
  const [tasks,setTasks]  = useState<string[]>([]);

  const addTask =()=> {
    if (task.trim()=== "")return
    setTasks([...tasks, task])
    setTask("")
  }

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">To-Do App</h1>

      {/* إدخال مهمة جديدة */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="اكتب المهمة..."
          className="border rounded px-3 py-2 w-64"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          إضافة
        </button>
      </div>

      {/* عرض المهام */}
      <ul className="space-y-2 w-64">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white shadow p-2 rounded"
          >
            <span>{t}</span>
            <button
              onClick={() => removeTask(index)}
              className="text-red-500 hover:text-red-700"
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
