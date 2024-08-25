import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";

export const AdminContacts = () => {
  const {API} = useAuth();
  const [messages, setMessages] = useState([]);
  const token = localStorage.getItem("token");

  const getMessages = async () => {
    try {
      const response = await fetch(
        `${API}/api/admin/contacts`,
        {
          method: "GET",
            headers: {
              Authorization: `Bearer ${token} `,
            },
        }
      );
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMessage = async (id)=>{
    try {
      const response = await fetch(
        `${API}/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const data = await response.json();
      if(response.ok){
        toast.success(data.message);
      }else{
        toast.error("Failed to delete");
      }
      getMessages();

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <section className="admin-contacts-section">
        <h1>Admin Contact data</h1>
        <div className="container admin-users">
            {messages.map((currMsg, index)=>{
                const {username, email, message} = currMsg;
                return(
                    <div key={index}>
                        <p>{username}</p>
                        <p>{email}</p>
                        <p>{message}</p>
                        <button className="btn" onClick={()=>deleteMessage(currMsg._id)}>Delete</button>
                    </div>
                )
            })}
        </div>
      </section>
    </>
  );
};
