import { useRouter } from "next/router";
import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import Loader from "../loader/Loader";

const PrivateRoute = (Component:any) =>{
    const privateRoute = (props:any) =>{
        const router = useRouter();
        const [loading,setLoading] = useState(true);
        const { user } = useSelector((state:AppState)=>state.AuthReducer);
        useEffect(()=>{
            const timeout = setTimeout(()=>{
                if(typeof window !== 'undefined' && Object.keys(user).length === 0){
                    console.log("Hasan",user)
                    router.push("/admin/login"); 
                }else{
                    setLoading(false);
                }
            },1000);
            // clearInterval(timeout);
            return ()=>{
                clearInterval(timeout); 
            }
        },[]);
        
        if(loading){
            return <Loader/>;
        }
        if(!loading){
            return <Component {...props}/>;
        }
        
    }
   return privateRoute;
}
export default PrivateRoute;