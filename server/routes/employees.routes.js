import {Router} from "express";
import {
    getEmployee,
    validateForm
} from "../controllers/employees.controller.js";

const router = Router();

router.post("/employees", validateForm);

router.get("/employees/:id", getEmployee);

export default router;
