import express from "express";
import cors from "cors";
import helmet from "helmet";
import route from "./pages.route.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/", route);

export default app;