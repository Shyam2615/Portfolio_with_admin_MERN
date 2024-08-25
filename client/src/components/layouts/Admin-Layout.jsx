import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";

export const AdminLayout = () => {

  const navigate = useNavigate();
  const {user} = useAuth();
  const {isLoading} = useAuth();
  console.log(user)

  if(isLoading) {
    return <h1>loading ...</h1>
  }

  if(!user.isAdmin){
    return <Navigate to="/"/>
  }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
              <NavLink to="/admin/users">
                    <FaUser /> Users
                </NavLink>
                </li>
              <li>
                <NavLink to="/admin/contacts">
                    <RiContactsBook2Fill /> Contacts
                </NavLink>
                </li>
              <li>
                <NavLink to="/admin/services">
                    <FaServer /> Services
                </NavLink>
                </li>
              <li>
              <NavLink to="/">
                    <FaHome /> Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
       <Outlet/> {/*used to show the content of nested routes */}
    </>
  );
};
