import express from "express";
import {PORT} from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import employeeRoutes from "./routes/employees.routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(employeeRoutes);

app.listen(PORT);
console.log(`server listening on port ${PORT}`);
