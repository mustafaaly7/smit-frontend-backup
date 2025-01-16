import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { appRoutes } from "../constant/constant";

export const authContext = createContext()


export default function AuthProvider({children}){
const [user,setuser] = useState(null)




useEffect(()=>{
if(!user){
    const token =  Cookies.get("token")
    if(token){
        getUser()
    }
}
},[user])
// useEffect(() => {
//     const token = Cookies.get("token");
//     console.log("Token from cookies in useEffect: ", token); // Log token
//     if (token) {
//       getUser();
//     }
//   }, []);

  const  getUser=()=>{
    axios
    .get(appRoutes.myinfo,{
        headers:{
            Authorization:`Bearer ${Cookies.get("token")}`
        },
    })
    .then((res) => {
        console.log("response from get my info API=>", res.data);
        setuser(res?.data?.data)
    })
    .catch((err)=>{
        console.log("error" , err.message);
        
    })
    
    }


return(

<authContext.Provider value={{user,setuser}}>

{children}
</authContext.Provider>
)


}