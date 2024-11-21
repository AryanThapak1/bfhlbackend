const express=require( "express");
const dotenv=require("dotenv");
const cors=require("cors");
const dataRoute=require("./Routes/dataRoute");
dotenv.config();
const app=express();
const PORT=process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/api/v1",dataRoute);

app.listen(PORT,()=>{
    console.log(`App is Listening on port: ${PORT}`)
})