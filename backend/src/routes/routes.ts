import { Router } from "express";
import { findRoutes } from "../handlers/routes";

const router = Router();

router.post("/find", findRoutes);
export default router;
