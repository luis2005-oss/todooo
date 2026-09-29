import { useEffect, useRef } from "react";
import Sortable from "sortablejs";
import { ToDoItem } from "./ToDoItem";

export function TaskColumn({
  title,
  state,
  tasks,
  changeTaskState,
  className,
}) {
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;

    const sortable = Sortable.create(listRef.current, {
      group: "tasks",
      animation: 200,
      ghostClass: "opacity-50",

      onEnd: (event) => {
        if (event.from === event.to) {
          return;
        }

        const taskId = Number(event.item.dataset.id);

        if (!taskId) {
          return;
        }

        changeTaskState(taskId, state);
      },
    });

    return () => {
      sortable.destroy();
    };
  }, [state, changeTaskState]);

  const columnTasks = tasks.filter((task) => task.state === state);

  return (
    <div
      className={`border rounded-xl min-h-96 overflow-hidden shadow-xl ${className}`}
    >
      <div className="border-b border-slate-700 bg-slate-800/70 py-3">
        <h2 className="text-lg text-center font-bold text-slate-200">
          {title}
        </h2>
      </div>

      <div
        ref={listRef}
        className="px-4 py-4 w-full min-h-80 flex flex-col gap-3"
      >
        {columnTasks.map((task) => (
          <ToDoItem
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            time={task.time}
          />
        ))}
      </div>
    </div>
  );
}
