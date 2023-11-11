import './App.scss';
import Header from './header/header';
import Menu from './menu/menu';
import About from './about/about';
import Cards from './cards/cards';


function App() {
  return (
    <div className="App">
    <Header />
    <Menu />
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
