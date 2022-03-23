import Header from './components/Header'
import Home from './pages/home';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
      </main>
    </>
  );
}

export default App;