const express = require('express');
const app = express();

const problemRouter =  express.Router();
const adminMiddleware = require("../middleware/adminMiddleware")
const createProblem = require("../controllers/userProblem");


// Create
problemRouter.post("/create", adminMiddleware, createProblem);
problemRouter.post("/", adminMiddleware, createProblem); // fallback for direct /problem requests
// problemRouter.patch("/:id", updateProblem);
// problemRouter.delete("/:id",deleteProblem);


// problemRouter.get("/:id",getProblemById);
// problemRouter.get("/", getAllProblem);
// problemRouter.get("/user", solvedAllProblembyUser);


app.use('/problem', problemRouter);

module.exports = problemRouter;

// fetch
// update
// delete


