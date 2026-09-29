import { useEffect, useState } from "react";
import { NewTaskForm } from "./components/NewTaskForm";
import { TaskColumn } from "./components/TaskColumn";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      try {
        return JSON.parse(savedTasks);
      } catch {
        localStorage.removeItem("tasks");
      }
    }

    return [
      {
        id: 1,
        title: "Tarea 1",
        description: "asda few ",
        date: "2026-11-10",
        time: "14:30",
        state: "todo",
      },
      {
        id: 2,
        title: "Tarea 2",
        description: "asbsbrgbtrn",
        date: "2026-10-10",
        time: "14:00",
        state: "todo",
      },
      {
        id: 3,
        title: "Tarea 3",
        description: "awrbgkuyktfd",
        date: "2026-10-10",
        time: "14:00",
        state: "done",
      },
    ];
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const addTask = (newTask) => {
    const task = {
      ...newTask,
      id: Date.now(),
    };

    setTasks((prevTasks) => [...prevTasks, task]);
    setIsOpen(false);
  };

  const changeTaskState = (taskId, newState) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, state: newState } : task,
      ),
    );
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white transition-colors duration-300">
      <div className="py-6">
        <h1 className="text-3xl text-center font-bold text-violet-400 lg:text-4xl">
          TO-DO APP
        </h1>

        <h3 className="px-4 py-2 text-center text-sm text-slate-400 lg:text-lg">
          Organiza tus tareas de manera sencilla.
        </h3>

        <div className="flex w-full justify-center items-center py-4">
          <button
            onClick={toggleModal}
            className="border border-violet-500 px-4 py-2 text-violet-300 bg-violet-950/50 hover:bg-violet-900 rounded-lg transition-all duration-300"
          >
            + Add Task
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-4 py-2 max-w-7xl mx-auto">
          <TaskColumn
            title="To Do"
            state="todo"
            tasks={tasks}
            changeTaskState={changeTaskState}
            className="bg-slate-900 border-slate-700"
          />

          <TaskColumn
            title="Doing"
            state="doing"
            tasks={tasks}
            changeTaskState={changeTaskState}
            className="bg-slate-900 border-emerald-800"
          />

          <TaskColumn
            title="Done"
            state="done"
            tasks={tasks}
            changeTaskState={changeTaskState}
            className="bg-slate-900 border-green-800"
          />
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/80 px-4">
          <div className="w-full max-w-md bg-slate-900 border border-slate-700 text-white p-6 rounded-xl shadow-2xl">
            <h5 className="text-violet-400 text-center font-bold text-xl mb-4">
              NUEVA TAREA
            </h5>

            <NewTaskForm toggleModal={toggleModal} addTask={addTask} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
