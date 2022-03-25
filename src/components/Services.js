import useApi from '../hooks/useApi';
import Service from './Service';
import PropTypes from "prop-types";

const Services = ({ title, filter }) => {

  const recurso = `/servicios${filter}`;

  const [services] = useApi(recurso);

  return (
    <section className="services">
      <div className="services-container">
        <h1 className="services__title">{title}</h1>
        {
          services.length === 0
            ?
            (
              <section className="spinner">
                <div className="spinner-container">
                  <div className="spinner__double-bounce1"></div>
                  <div className="spinner__double-bounce2"></div>
                </div>
              </section>
            )
            :
            (
              <div className="services__services">
                {
                  services.map((service) => {
                    return (
                      <Service
                        key={service.id}
                        service={service}
                      />
                    );
                  })
                }
              </div>
            )
        }
      </div>
    </section>
  );
}

Services.propTypes = {
  title: PropTypes.string,
  filter: PropTypes.string,
}

export default Services;