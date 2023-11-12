import './App.scss';
import Header from './header/header';
import Menu from './menu/menu';
import About from './about/about';
import Cards from './cards/cards';
import Footer from './footer/footer';
import HomeCard from './homeCard/homeCard';
import HomeCardCitation from './homeCard/homeCardCitation';
import HomeCardCode from './homeCard/homeCardCode';


function App() {
  return (
    <div className="App">
      <Header />
      <Menu />

      {/* Début corp du site */}
      {/* <About /> */}

      <div className="wrapHome">
        <HomeCardCitation />
        <HomeCardCode />
      </div>

      {/* <div className="wrap">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div> */}
      {/* Fin corp du site */}

      <Footer />
    </div>
  );
}

export default App;
