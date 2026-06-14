import express from "express";
import dotenv from "dotenv";
import { ConnectMongoDb } from "./database/db.js";
dotenv.config({ path: "./config/.env"});
import UserRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import accidentRoute from "./routes/Accident.Route.js";
import cors from "cors";
import dns from "dns"

dns.setServers(["1.1.1.1","8.8.8.8"])

const app = express();
 ConnectMongoDb();
 
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

 app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("server is running");
});
// console.log("MongoDb Connection String: ", process.env.MONGO_URI)

app.get("/health",(req,res)=>{
    res.send("health is ok!")
})
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));



app.use(express.json());
app.use("/api",UserRoutes)
app.use("/api", accidentRoute);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT} `);
    
})