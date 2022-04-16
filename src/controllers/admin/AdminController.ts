import { Request, Response } from "express";
import { Admin } from "../../models/Admin";
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";

const createToken = (user:object, expiresToken:string)=>{
    return jwt.sign({user}, `${process.env.SECRET}`,{
        expiresIn: expiresToken
    });
}

export const AdminLogin = async (req:Request, res:Response) =>{
    const {email,password,remember_me} = req.body;
    const errors = [];
    if(email === ''){
        errors.push({msg: 'Email is required'});
    }else{
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //Email validation
        if(!filter.test(email)){
            errors.push({msg: 'Valid email is required'});
        }
    }
    if(password === ''){
        errors.push({msg: 'Password is required'});
    }
    if(errors.length !== 0){
        return res.status(400).json({errors});
    }
    let expiresToken = '1d';
    if(remember_me){
        expiresToken = '7d';
    }
    try {
        const user = await Admin.findOne({email});
        if(user){
            const matched = await bcrypt.compare(password, user.password);
            if(matched){
                const token = createToken(user,expiresToken);
                return res.status(200).json({'msg':'You have successfully login',token});
            }else{
                return res.status(401).json({errors:[{msg:'Username or Password does not matched'}]});
            }
        }
        else{
             return res.status(404).json({errors:[{msg:'Email not found'}]});
        }
    } catch (error:any) {
        return res.status(500).json({errors: [{msg: error.message}]});
    }
}

// export const AdminRegister = async (req:Request, res:Response) => {
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash('123456', salt);
//     await Admin.create({
//         name:'admin', 
//         email:'admin@gmail.com',
//         admin_type:'Super Admin',
//         image:'image.png',
//         password:hash
//     });
//     console.log("Created");
// }