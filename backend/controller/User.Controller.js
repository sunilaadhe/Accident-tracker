import { User } from "../model/User.Model.js";
import {hashSync,compareSync} from "bcryptjs";
// import { json } from "body-parser";
import jwt from "jsonwebtoken";

export const SignUp = async(req,res)=>{
    const{name,email,password} = req.body;
    const isUserExist = await User.findOne({email})
      
      if(isUserExist){
        return res.status(400).json({
            success:false,
            message:"User Already Exits"
        })
      }

      const bcryptjspasswod = await hashSync(password,10)

      const NewUser = await User.create({
        email,name,password:bcryptjspasswod
      })

      return res.status(201).json({
        success:true,
        message:" User created succefully ",
        user:NewUser
      })



}

export const SigniIn = async (req,res)=>{
  const {email,password} = req.body;
    const isUserExist = await User.findOne({email})
    if(!isUserExist){
      return res.status(404).json({
        success:false,
        message:"User not Exist"
      })
    }

    const isValidpassword = compareSync(password,isUserExist.password)

    if(!isValidpassword){
      return res.status(400).json({
        success:false,
        message:"Invalid email or password"
      })
    }

    const token = jwt.sign({_id:isUserExist._id},process.env.JWT_SECRET_KEY);

     return res.cookie("token",token,{
      httpOnly:true,
      maxAge:24 * 60 * 60 * 1000,
      sameSite:"lax",

     }).status(200).json({
       success:true,
       message:"User login successfully",
       user:isUserExist
     })

}

export const userUpdate = async (req,res,next)=>{
  try{

     if (req.user.id !== req.params.id){
    return res.status(401).json({
      success:false,
      message:"you can update only your profile"
    })
  }

    if (req.body.email) {

  const userExist = await User.findOne({
    email: req.body.email
  });

  if (
    userExist &&
    userExist._id.toString() !== req.params.id
  ) {
    return res.status(404).json({
      success: false,
      message: "user email already exist"
    });
  }

}
      
    

   if(req.body.password){
        req.body.password = hashSync(req.body.password,10);

   }
 
   const {id} = req.params;
   
   const updatedUser = await User.findByIdAndUpdate(id,{
    $set:{
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
    }
   },


   {
    new:true
   }
  );
   
  const {password,...rest} = updatedUser._doc;
  
  res.status(202).json({
    success:true,
    message:"Upadate user successsfully ",
   user:rest
  });

}
  catch(error){
    return res.status(400).json({
        suceess:false,
        message:"Error while upadte user"  
    })
  }



}

export const  logoutUser = (req,res,next)=>{
  try{
    res.clearCookie("token").status(200).json({
      success:true,
      message:"user logout successfully"
    });
  }catch(error){
    next();
  }

}

export const deletedUser = async (req, res) => {

    try {

        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
  
  };