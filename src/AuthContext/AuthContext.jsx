import { createContext, useRef, useState } from "react"

export const AuthContext=createContext();
export default function AuthContextProvider({children}) {
    const [token,setToken]=useState(null)
    const handleToken=(value)=>{
        setToken(value);
    }
    return(
        <AuthContext.Provider value={{token,handleToken}}>
            {children}
        </AuthContext.Provider>
    )
};
