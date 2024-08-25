import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';


const Login = ()=>{

    const {API} = useAuth();

    const [user, setUser] = useState({
        email : "",
        password : ""
    })

    const navigate = useNavigate();
    const {storetokenInLS} = useAuth();

    const handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name] : value
        });
        console.log(user);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            let response = await fetch(`${API}/api/auth/login`, {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })
            const res_data = await response.json();
            if(response.ok){
                storetokenInLS(res_data.token);
                setUser({
                    email:"",
                    password:""
                })
                toast.success("Login Succesfull");
                navigate("/");
            } else{
                toast.error(res_data.extraDetails? res_data.extraDetails : res_data.message);
            }
            console.log(response);
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/images/login.png" alt="Error" width="500" height="500"/>
                        </div>

                <div className="registration-form">
                <h1 className="main-heading mb-3">Login</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email"placeholder="email" id="email" required autoComplete="off" onChange={handleChange} value={user.email}/>
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password"placeholder="password" id="password" required autoComplete="off" onChange={handleChange} value={user.password}/>
                  </div>

                  <br />

                  <button type="submit" className="btn btn-submit">Login</button>
                </form>
              </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
}

export default Login;