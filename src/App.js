import './App.scss';
import Header from './header/header';
import Cards from './cards/cards';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="wrap">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

    </div>
  );
}

export default App;
