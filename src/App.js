import Header from './components/Header'
import Homes from './pages/Home';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Homes />
      </main>
    </>
  );
}

export default App;