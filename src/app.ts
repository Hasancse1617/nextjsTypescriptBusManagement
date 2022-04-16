import express, {Request,Response} from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db";
import "dotenv/config";
import AdminRoute from "./routes/admin/AdminRoute";
import cors from "cors";

const app = express();
connectDB();
app.use(cors());
app.use(bodyParser.json());
// app.get("/", (req:Request, res:Response):void =>{
//     res.json({data: "Hasan"});
// });
app.use("/api", AdminRoute);
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});