const { Task } = require("../models");

exports.createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    userId: req.user.id
  });
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.findAll({ where: { userId: req.user.id } });
  res.json(tasks);
};

exports.getTask = async (req, res) => {
  const task = await Task.findOne({
    where: { id: req.params.id, userId: req.user.id }
  });
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOne({
    where: { id: req.params.id, userId: req.user.id }
  });
  if (!task) return res.status(404).json({ message: "Task not found" });

  await task.update(req.body);
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.destroy({
    where: { id: req.params.id, userId: req.user.id }
  });
  res.json({ message: "Task deleted" });
};
