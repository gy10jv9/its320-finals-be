import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// -----[ PARA SA CORS ]-----
app.use(cors({
    origin: 'http://localhost:4200',
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
}));

app.use(express.json());

// -----[ PARA SA ROOT / PARA MABAL AN NGA GAGANA ]-----
app.get("/", (req: Request, res: Response) => {
  	res.send("Hello World!");
});

// -----[ PARA SA USER ]-----
app.use("/user", userRouter);

// -----[ PARA SA CONSOLE LOG ]-----
app.listen(port, () => {
  	console.log(`[server]: Server is running at http://localhost:${port}`);
});