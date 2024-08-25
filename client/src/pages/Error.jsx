import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className="content">
            <h2 className="header">404</h2>
            <h4>Sorry! Page not found</h4>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui obcaecati omnis ipsum ut eligendi aut aspernatur tempora harum quis voluptates.
            </p>
            <div className="btns">
                <NavLink to="/">Return home</NavLink>
                <NavLink to="/contact">Report problem</NavLink>
            </div>
        </div>
      </section>
    </>
  );
};
