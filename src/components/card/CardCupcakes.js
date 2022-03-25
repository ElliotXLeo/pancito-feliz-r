import { useState, useEffect } from 'react';
import CardCupcake from './CardCupcake';

const CardCupcakes = () => {

  const endpoint = `${process.env.REACT_APP_URL_API}/cupcakes`;

  const [cupcakes, setCupcakes] = useState([]);

  useEffect(() => {
    const obtenerData = async () => {
      try {
        const api = await fetch(endpoint);
        const data = await api.json();
        setCupcakes(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('Se consultó al API');
      }
    };
    obtenerData();
  }, []);

  return (
    <section className="cupcakes cupcakes--pt-4">
      <div className="cupcakes-container">
        <h1 className="cupcakes__title">🧁 Cupcakes 🧁</h1>
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