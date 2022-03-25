import CardCupcakes from '../components/cards/CardCupcakes';
import HeroHome from '../components/heros/HeroHome';
import '../styles/scss/Home.scss'

const Home = () => {

  const company = {
    title: 'Pancito feliz, La mejor de los panes',
    subtitle: 'La mejor panadería peruana',
    slogan: '🧁 El verdadero lugar con las 4B. Bueno, Bonito, Barato y Bastante. Siempre con fe y humildad 🧁',
    priceNormal: 'S/ 0.50',
    priceOffer: 'S/ 0.20'
  };

  return (
    <>
      <HeroHome
        company={company}
      />
      <CardCupcakes
        title="🧁 Chocolate 🧁"
        filter='?sabor_like=Chocolate'
      />
    </>
  );
}

export default Home;