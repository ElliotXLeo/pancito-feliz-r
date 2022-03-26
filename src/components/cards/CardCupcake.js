import PropTypes from "prop-types";

const CardCupcake = ({ id, sabor, color, descripcion, precio, imagen }) => {
  const formatoMonedaSoles = (valor) => {
    return valor.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 });
  }

  return (
    <article className="cupcakes__cupcake">
      <figure className="cupcakes__cupcake-image-container">
        <img src={imagen} alt={descripcion} className="cupcakes__cupcake-image" />
      </figure>
      <div className="cupcakes__cupcake-data">
        <h2 className="cupcakes__cupcake-data-sabor">Sabor: {sabor}</h2>
        <h3 className="cupcakes__cupcake-data-precio">Precio: {formatoMonedaSoles(precio)}</h3>
        <h4 className="cupcakes__cupcake-data-color">Color: {color}</h4>
        <p className="cupcakes__cupcake-data-about">{id}: {descripcion}</p>
      </div>
      <div className="cupcakes__cupcake-button-container">
        <a className="cupcakes__cupcake-button cupcakes__cupcake-button--active">Ver</a>
        <a className="cupcakes__cupcake-button">Comprar</a>
      </div>
    </article>
  );
}

CardCupcake.propTypes = {
  id: PropTypes.number.isRequired,
  sabor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  precio: PropTypes.number,
  imagen: PropTypes.string
}

CardCupcake.defaultProps = {
  imagen: 'https://images.emojiterra.com/google/android-10/512px/1f9c1.png',
  precio: 0
}

export default CardCupcake;