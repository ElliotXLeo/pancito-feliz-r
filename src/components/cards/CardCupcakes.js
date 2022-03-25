import Swal from 'sweetalert2';
import useApi from '../../hooks/useApi';
import CardCupcake from './CardCupcake';

const CardCupcakes = ({ title, filter }) => {

  const recurso = `/cupcakes${filter}`;

  const [cupcakes, error] = useApi(recurso);
  if (error) {
    Swal.fire({
      position: 'center',
      title: '¡Ha ocurrido un error! Contactar con soporte.',
      text: error,
      icon: 'error',
      confirmButtonText: 'Aceptar',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }
  return (
    <section className={`cupcakes ${filter ? '' : 'cupcakes--pt-4'}`}>
      <div className="cupcakes-container">
        <h1 className="cupcakes__title">{title}</h1>
        {
          cupcakes.length === 0
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
              <div className="cupcakes__cupcakes">
                {
                  cupcakes.map((cupcake) => {
                    return (
                      <CardCupcake
                        key={cupcake.id}
                        cupcake={cupcake}
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

export default CardCupcakes;