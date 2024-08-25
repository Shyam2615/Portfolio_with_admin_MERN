import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const API = import.meta.env.VITE_SITE_URL;

    const storetokenInLS = (serverToken) =>{
        setToken(serverToken);
        return localStorage.setItem('token', serverToken);
    }

    const LogoutUser = ()=>{
        setToken("");
        return localStorage.removeItem('token');
    }

    let isLoggedin = !!token;

    const userAuthentication = async ()=>{
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method:"GET",
                headers:{
                    "Authorization" : `Bearer ${token}`
                }
            })
            if(response.ok){
                const data = await response.json();
                console.log("User data", data.userData);
                setUser(data.userData);
                setIsLoading(false);
            }else{
                console.log("Error fetching user data");
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    }


    const getServices = async ()=>{
        try {
            const response = await fetch("http://localhost:5000/api/data/service", {
                method:"GET",
            });
    
            if(response.ok){
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        userAuthentication();
        getServices();
      }, []);

    return (
    <AuthContext.Provider value={{storetokenInLS, LogoutUser, isLoggedin, user, services, isLoading, API}}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
}