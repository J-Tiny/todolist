import { Router } from "express";
import TaskModel from "../models/tasks";
const router = Router();

//get all task
router.get("/", async (req, res) => {
  try {
    const tasks = await TaskModel.fetchAll();
    res.status(200).json({ message: "success", data: tasks });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

//add new task
router.post("/add", async (req, res) => {
  try {
    const status = "todo"
    const data = {...req.body, status};
    const task = await TaskModel.forge().save(data);
    return res.status(200).json({
      message: "success",
      data: task,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

//delete task
router.delete<{ taskId: number }>("/delete/:taskId", async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await TaskModel.where({ id: taskId }).fetch();
    await task.destroy();
    res.status(200).json({
      message: "deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

//edit task
router.patch("/edit/:taskId", async(req,res) =>{
  try {
    const { taskId } = req.params;
    const task = await TaskModel.where({ id: taskId }).fetch();
    await task.save(req.body)
    return res.status(200).json({
      message: "success",
      data: task,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
})

//edit taskStatus
router.patch("/status/:taskId", async(req,res) =>{
  try {
    const { taskId } = req.params;
    const task = await TaskModel.where({ id: taskId }).fetch();
    await task.save(req.body)
    return res.status(200).json({
      message: "success",
      data: task,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
})

export default router;
