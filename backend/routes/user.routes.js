import { Router } from "express";
import { deletedUser, logoutUser, SigniIn, SignUp, userUpdate } from "../controller/User.Controller.js";
import { isAutheticated } from "../middleware/isAutheticated.js";



const route = Router();

route.post("/user/signup",SignUp)
route.post("/user/signin",SigniIn)
 route.put("/user/update/:id",isAutheticated, userUpdate);
 route.get("/user/logout",logoutUser);
 route.delete("/user/delete/:id", isAutheticated,deletedUser)

export default route;