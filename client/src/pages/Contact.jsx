import { useState } from "react";
import { useAuth } from "../store/auth";

const Contact = () => {

  const {API} = useAuth();

    const [message, setMessage] = useState({
        username : "",
        email : "",
        message : ""
    })

    const [userData, setUserData] = useState(true);

    const {user} = useAuth();

    if(user && userData){
      setMessage({
        username : user.username,
        email : user.email,
        message : ""
      })

      setUserData(false);
    }

    const handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setMessage({
            ...message,
            [name] : value
        });
        console.log(message);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(message);

        try {
          const response = await fetch(`${API}/api/form/contact`, {
            method:"POST",
            headers:{
              "Content-Type": "application/json",
            },
            body:JSON.stringify(message)
          });
  
          if(response.ok){
            const data = await response.json();
            console.log(data);
          }
        } catch (error) {
          console.log(error);
        }
    }

  return (
    <>
      <section className="section-content">
        <div className="contact-content container">
            <h1 className="main-heading mb-3">Contact us</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-image">
            <img
              src="/images/support.png"
              alt="Error"
              width="400"
              height="500"
            />
          </div>
          <section className="section-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" id="username" required onChange={handleChange} value={message.username}/>
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" required onChange={handleChange} value={message.email}/>
                </div>
                <div>
                    <label htmlFor="message">message</label>
                    <textarea type="text" name="message" id="message" required onChange={handleChange} cols="30" rows="5"/>
                </div>
                
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
          </section>
        </div>
        <section className="mb-3">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.738430016005!2d77.704217173888!3d12.730479587563186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6e511486348b%3A0xd89a0e9710f980c7!2sAlliance%20University!5e0!3m2!1sen!2sin!4v1723099721059!5m2!1sen!2sin" width="100%" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </section>
      </section>
    </>
  );
};

export default Contact;
