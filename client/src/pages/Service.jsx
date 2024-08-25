import { useAuth } from "../store/auth";

const Service = () => {
  const { services } = useAuth();

  return (
    <section className="section-services">
      <div className="container" style={{"margin-left": "20px"}}>
        <div className="main-heading">
          <h1>Services</h1>
        </div>
      </div>

      <div className="container grid grid-three-cols">
        {Array.isArray(services) && services.length > 0 ? (
          services.map((curElem, index) => {
            const { services, price, description, provider } = curElem;
            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <img src="/images/services.png" alt="Error" width="200" />
                </div>

                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <h2>{services}</h2>
                  <p>{description}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No services available.</p>
        )}
      </div>
    </section>
  );
};

export default Service;
