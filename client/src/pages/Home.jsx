import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <section>
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the best IT company</p>
              <h1>Welcome to Shyam's world</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
                minima ex voluptate autem accusantium quae cumque qui
                temporibus, incidunt, quam cum veritatis maxime odit! Expedita
                laboriosam praesentium dicta adipisci voluptatibus.
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
              <img
                src="/images/home.png"
                alt="Error"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

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

      {/* 3rd section  */}

      <section>
          <div className="container grid grid-two-cols">
            <div className="hero-image">
                <img
                  src="/images/design.png"
                  alt="Error"
                  width="400"
                  height="500"
                />
              </div>
            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get started today</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
                minima ex voluptate autem accusantium quae cumque qui
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

            
          </div>
        </section>

    </>
  );
};

export default Home;
