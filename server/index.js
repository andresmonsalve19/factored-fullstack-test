import express from "express";
import {PORT} from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import employeeRoutes from "./routes/employees.routes.js";

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use(employeeRoutes);

app.listen(PORT);
console.log(`server listening on port ${PORT}`);
