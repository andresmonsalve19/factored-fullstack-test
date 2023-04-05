import {Router} from "express";
import {
    getEmployees,
    getEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployee);

export default router;
