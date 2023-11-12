import './App.scss';
import Header from './header/header';
import Menu from './menu/menu';
import About from './about/about';
import Cards from './cards/cards';
import Footer from './footer/footer';


function App() {
  return (
    <div className="App">
    <Header />
    <Menu />
{/* Début corp du site */}
    <About />
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
