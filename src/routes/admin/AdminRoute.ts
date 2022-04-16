import app from "express";
import { AdminLogin } from "../../controllers/admin/AdminController";

const router = app.Router();

router.post("/login", AdminLogin);

export default router;