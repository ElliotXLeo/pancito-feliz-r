import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cupcakes from './pages/Cupcakes';
import Footer from './components/Footer';
import './App.css';
import Error404 from './pages/Error404';

function App() {

  const credits = {
    author: 'Elliot Garamendi',
    currentYear: new Date().getFullYear()
  };

  return (
    <Router>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/cupcakes" element={<Cupcakes />} />
          <Route path="/nosotros" element={<section className="section animate__animated animate__fadeIn">Nosotros</section>} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer
        credits={credits}
      />
    </Router>
  );
}

export default App;
