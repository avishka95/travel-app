import { Router } from "express";
import { getPlaces } from "../handlers/places";

const router = Router();

router.get("/:name", getPlaces);

export default router;
