const express = require("express");
const tasksController = require("./controllers/taskcontroller");
const taskMiddleware = require("./middlewares/taskMiddleware");
const router = express.Router();

router.get("/tasks", tasksController.getAll);
router.post("/tasks", taskMiddleware.validateBody, tasksController.createTask);
router.delete(
  "/tasks/:id",

  tasksController.deleteTask
);
router.put(
  "/tasks/:id",

  taskMiddleware.validateStatus,
  tasksController.updateTask
);

module.exports = router;
