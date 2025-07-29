import { Router } from "express";
import { getUsers, getUserById, createUser } from "../handlers/users";

const router = Router();

// GET /users route
router.get("/", getUsers);

// GET /users/:id route
router.get('/:id', getUserById);

// POST /users route
router.post("/", createUser);

export default router;
