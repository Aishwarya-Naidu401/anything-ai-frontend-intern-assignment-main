import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async (title) => {
    await api.post("/tasks", { title });
    loadTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">
            Your Tasks
          </h2>

          <TaskForm onAdd={addTask} />

          <ul className="space-y-3">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex justify-between items-center bg-slate-50 px-4 py-3 rounded-lg"
              >
                <span className="text-gray-800">
                  {task.title}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          {tasks.length === 0 && (
            <p className="text-sm text-gray-500 text-center mt-6">
              No tasks yet. Add one above 👆
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
