import express from "express";
import cors from "cors"; //to provide resources to frontend
import Router from "./routes/studentRoute.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use(Router);

app.listen(5000, () =>{ //port
    console.log("Server running Successfully.");
});