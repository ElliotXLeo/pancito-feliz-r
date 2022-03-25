import axios from 'axios';
import { useState, useEffect } from 'react';
import CardCupcake from './CardCupcake';

const CardCupcakes = ({ title, filter }) => {

  const endpoint = `${process.env.REACT_APP_URL_API}/cupcakes${filter}`;

  const [cupcakes, setCupcakes] = useState([]);

  useEffect(() => {
    const obtenerData = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: endpoint
        });
        const data = response.data;
        setCupcakes(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('Se consultó al API');
      }
    };
    obtenerData();
  }, [endpoint]);

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