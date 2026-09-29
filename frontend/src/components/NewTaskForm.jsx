import { useState } from "react";

export function NewTaskForm({ toggleModal, addTask }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    state: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTask(form);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 w-full max-w-sm p-2"
    >
      <div className="flex flex-col gap-1">
        <input
          className="w-full border border-slate-600 bg-slate-800 text-white placeholder-slate-500 rounded-lg px-3 py-2 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
          type="text"
          name="title"
          id="idTitle"
          value={form.title}
          onChange={onChange}
          placeholder="Nombre de la tarea"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <input
          className="w-full border border-slate-600 bg-slate-800 text-white placeholder-slate-500 rounded-lg px-3 py-2 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
          type="text"
          name="description"
          id="idDescription"
          value={form.description}
          onChange={onChange}
          placeholder="Descripción de la tarea"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <input
          className="w-full border border-slate-600 bg-slate-800 text-white rounded-lg px-3 py-2 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
          type="date"
          name="date"
          id="idDate"
          value={form.date}
          onChange={onChange}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <input
          className="w-full border border-slate-600 bg-slate-800 text-white rounded-lg px-3 py-2 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
          type="time"
          name="time"
          id="idTime"
          value={form.time}
          onChange={onChange}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <select
          className="w-full border border-slate-600 bg-slate-800 text-white rounded-lg px-3 py-2 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
          name="state"
          id="idState"
          value={form.state}
          onChange={onChange}
        >
          <option value="" disabled>
            Selecciona un estado
          </option>
          <option value="todo">To Do</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="flex-1 bg-violet-600 hover:bg-violet-700 text-white rounded-lg px-4 py-2 font-medium transition-all duration-200"
        >
          Guardar
        </button>

        <button
          type="button"
          onClick={toggleModal}
          className="flex-1 border border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg px-4 py-2 font-medium transition-all duration-200"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
