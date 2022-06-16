import express from "express";
import { MovieGetAll, MovieNew } from "../Controllers/movie";

const router = express.Router();

router.post('/add-new', MovieNew)
router.post('/get-all', MovieGetAll)

export default router;