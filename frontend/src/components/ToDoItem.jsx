export function ToDoItem({ id, title, description, date, time }) {
  return (
    <div
      data-id={id}
      className="w-full bg-slate-800 text-slate-100 border border-slate-700 rounded-xl p-4 shadow-lg cursor-grab active:cursor-grabbing hover:bg-slate-750 hover:border-violet-500 hover:shadow-violet-950/30 transition-all duration-200"
    >
      <h3 className="font-bold text-lg text-white">{title}</h3>

      <p className="text-sm text-slate-400 mt-1">{description}</p>

      <div className="flex justify-between mt-3 text-xs text-slate-500">
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </div>
  );
}
