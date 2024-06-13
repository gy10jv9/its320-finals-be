import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user";
import listRouter from "./routes/list";
import taskRouter from "./routes/task";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// -----[ PARA SA CORS ]-----
app.use(cors({
    origin: ['http://localhost:4200', 'https://its320-finals-be.onrender.com', 'https://angular-juneco-brown.vercel.app'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

app.use(express.json());

// -----[ PARA SA ROOT / PARA MABAL AN NGA GAGANA ]-----
app.get("/", (req: Request, res: Response) => {
  	res.send("Hello World!");
});

// -----[ ROUTERS ]-----
app.use("/user", userRouter);
app.use("/list", listRouter);
app.use("/task", taskRouter);

// -----[ PARA SA CONSOLE LOG ]-----
app.listen(port, () => {
  	console.log(`[server]: Server is running at http://localhost:${port}`);
});