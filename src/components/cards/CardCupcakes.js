import useApi from '../../hooks/useApi';
import CardCupcake from './CardCupcake';

const CardCupcakes = ({ title, filter }) => {

  const recurso = `/cupcakes${filter}`;

  const [cupcakes, error] = useApi(recurso);
  if (error) {
    console.log(error);
    return <span>Error</span>
  } else {
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
}

export default CardCupcakes;