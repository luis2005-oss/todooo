import { PrismaClient } from "#prisma/index.js";

const prisma = new PrismaClient();

export const taskService = {
  createTask: async (title, description, status = "TODO") => {
    const newTask = await prisma.tasks.create({
      data: {
        title,
        description,
        status,
      },
    });

    return newTask;

    getTasks: async (page, limit) => {
      const skip = (page - 1) * limit;
      const [tasks, total] = await prisma.$transaction([
        prisma.tasks.findMany([skip, take: limit, orderBy: { id: "desc"}]),
        prisma.tasks.count(),
      ]);
      return {
        tasks,
        total,
        page,
        totalPages: Math.ceil(total/limit),
      }
    };
  },
};
