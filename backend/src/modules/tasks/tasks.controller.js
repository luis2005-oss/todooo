import { taskService } from "./tasks.service.js";

export const tasksController = {
  createTask: (req, res) => {
    const { title, description, status } = req.body;

    taskService
      .createTask(title, description, status)
      .then((response) =>
        res.status(201).json({ message: "Task created", task: response }),
      )
      .catch((error) => res.status(500).json({ message: error.message }))
      .finally(() => console.log("Termino de ejecutar consulta"));
  },
};
