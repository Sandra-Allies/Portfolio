import './App.scss';
import Header from './header/header';
import About from './about/about';
import Cards from './cards/cards';


function App() {
  return (
    <div className="App">
    <Header />
    <About />
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
