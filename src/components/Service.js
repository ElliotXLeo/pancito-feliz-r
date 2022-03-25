import PropTypes from "prop-types";

const Service = ({ service }) => {
  const { id, nombre, descripcion } = service;
  return (
    <article className="services__service">
      <div className="services__service-data">
        <h2 className="services__service-data-nombre">Nombre: {nombre}</h2>
        <p className="services__service-data-about">{id}: {descripcion}</p>
      </div>
      <div className="services__service-button-container">
        <a className="services__service-button services__service-button--active">Ver</a>
        <a className="services__service-button">Comprar</a>
      </div>
    </article>
  );
}
Service.propTypes = {
  service: PropTypes.object
}

export default Service;