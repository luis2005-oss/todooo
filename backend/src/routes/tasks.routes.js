import { Router } from "express";
import { tasksController } from "../modules/tasks/tasks.controller.js";

const tasksRoutes = Router();

tasksRoutes.post("/", tasksController.createTask);

tasksRoutes.get("/", (req, res) => {
  const orderBy = req.query.orderBy;
  return res.status(200).json({ message: "Listando tareas", orderBy });
});

tasksRoutes.delete("/reset", (req, res) => {
  return res.status(200).json({ message: "Eliminando todas las tareas" });
});

tasksRoutes.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, description, date, time } = req.body;

  return res.status(200).json({
    message: `Actualizando tarea con id ${id}`,
    title,
    description,
    date,
    time,
  });
});

tasksRoutes.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  return res.status(200).json({
    message: `Eliminando tarea con id ${id}`,
  });
});

tasksRoutes.patch("/:id/state", (req, res) => {
  const id = Number(req.params.id);
  const { state } = req.body;

  return res.status(200).json({
    message: `Actualizando estado de tarea con id ${id} y estado ${state}`,
  });
});

export { tasksRoutes };
