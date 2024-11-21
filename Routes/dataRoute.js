const express=require("express");
const dataController=require("./../Controller/dataController")
const router=express.Router();

router.route("/bfhl").get(dataController.sendOperationCode).post(dataController.sendData);

module.exports=router;