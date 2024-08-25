import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const About = () => {

  const {user} = useAuth();

  return (
    <>
    <section>
      <div className="container grid grid-two-cols">
      <div className="hero-content about">
          <p>Welcome, {user? `${user.username} to our website` : " to our website"}</p>
          <h1>Why choose us?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            voluptates unde dolore pariatur aliquid libero
          </p>
          <p>
            perspiciatis dolores ipsa vitae minima, quasi maiores. Ab molestiae Lorem ipsum dolor sit amet.
          </p>
          <p>
            aliquam fuga voluptatem consectetur, excepturi rerum, sequi quasi
            asperiores repellendus. Omnis sint
          </p>
          <p>
            soluta earum vero atque nulla voluptatem quidem similique nihil
            doloribus? Sunt enim ipsam
          </p>
          <div className="btn btn-group">
            <NavLink to="/contact">
              <button className="btn">Connect now</button>
            </NavLink>
            <NavLink to="/service">
              <button className="btn secondary-btn">Learn more</button>
            </NavLink>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/about.png" alt="Error" width="400" height="500" />
        </div>
      </div>
    </section>

    {/* 2nd section */}
    <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>registered company</p>
          </div>
          <div className="div1">
            <h2>100,00+</h2>
            <p>Happy clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well known developers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Services</p>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default About;
