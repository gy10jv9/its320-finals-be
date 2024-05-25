import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => { 
//     res.header("Access-Control-Allow-Origin",  
//                "http://localhost:4200"); 
//     res.header("Access-Control-Allow-Headers",  
//                "Origin, X-Requested-With, Content-Type, Accept"); 
//     next(); 
// });
// app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  	res.send("Gagana na sir!");
});

app.listen(port, () => {
  	console.log(`[server]: Server is running at http://localhost:${port}`);
});