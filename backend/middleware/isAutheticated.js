import jwt from "jsonwebtoken"
import { User } from "../model/User.Model.js"


export const isAutheticated = async(req,res,next)=>{
        console.log("Middleware Started");

    console.log(req.cookies);
    const {token} = req.cookies;
    if(!token) return res.status(401).json({
        success:false,
        message:"you should login first "
    })

    const data = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user = await User.findById({_id:data._id});
    next();
}


// export const isAutheticated = async(req,res,next)=>{
//     console.log("Cookies:", req.cookies);

//     const { token } = req.cookies;
//     console.log("Token: ", token)
//     if(!token){
//         return res.status(401).json({
//             success:false,
//             message:"you should login first"
//         });
//     }

//     next();
// }