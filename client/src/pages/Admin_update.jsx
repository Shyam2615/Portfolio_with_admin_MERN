import { useEffect, useState } from "react";
import { Navigate, redirect, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {useAuth} from "../store/auth";

export const AdminUpdate = () => {
    const {API} = useAuth();
    const navigate = useNavigate();
    const [data, setData] = useState({
        username : "",
        email : "",
        phone : ""
    });

    const params = useParams();
    const token = localStorage.getItem("token");

    const getData = async ()=>{
        try{
            
            const response = await fetch(`${API}/api/admin/users/${params.id}`, {
                method : "GET",
                headers: {
                    Authorization: `Bearer ${token} `,
                  },
            });
            const user = await response.json();
            setData({
                username : user.username,
                email : user.email,
                phone : user.phone
            })
        } catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setData({
            ...data,
            [name] : value
        })
        console.log(data)
    }

    const handleSubmit = async (e)=>{
        try {
            e.preventDefault()
            const response = await fetch(`${API}/api/admin/users/update/${params.id}`, {
                method : "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token} `,
                  },
                  body : JSON.stringify(data),
            });
            const res_data = await response.json();
            if(response.ok){
                toast.success("User updated succesfully");
            }else{
                toast.error("User update failed");
            }
            navigate("/admin/users");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
      <section className="section-content">
        <div className="contact-content container">
          <h1 className="main-heading mb-3">User Update</h1>
        </div>
        <div className="container grid grid-two-cols">
          
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  onChange={handleChange}
                  value={data.username}
                />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  onChange={handleChange}
                  value={data.email}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  required
                  onChange={handleChange}
                  value={data.phone}
                />
              </div>

              <div>
                <button type="submit">Update</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};
