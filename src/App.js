import Header from './components/Header'
import Home from './pages/Home';

import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/cupcakes" element={<section>Cupcakes</section>} />
          <Route path="/nosotros" element={<section>Nosotros</section>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;