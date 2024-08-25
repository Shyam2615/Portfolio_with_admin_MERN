import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home";
// we cant do this because we are using export default if we use only export then we can do this
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./components/layouts/Admin-Layout";
import { AdminContacts } from "./pages/Admin-contacts";
import { AdminUsers } from "./pages/Admin-users";
import { AdminUpdate } from "./pages/Admin_update";

const App = () =>{
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error/>} />
          <Route path="/admin" element={<AdminLayout/>}>
            <Route path="users" element={<AdminUsers/>}/>
            <Route path="users/:id/edit" element={<AdminUpdate/>}/>
            <Route path="contacts" element={<AdminContacts/>}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;