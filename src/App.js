import './App.scss';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Future from './components/future/Future';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Future />
      <Footer />

      <div className="bg_circles">
        <svg height="1800" width="100vw">
          <circle cx="900" cy="900" r="900" stroke="#FFF" strokeWidth="1.4" fill="none" />
          <circle cx="900" cy="900" r="700" stroke="#FFF" strokeWidth="1.4" fill="none" />
          <circle cx="900" cy="900" r="500" stroke="#FFF" strokeWidth="1.4" fill="none" />
          <circle cx="900" cy="900" r="300" stroke="#FFF" strokeWidth="1.4" fill="none" />
          Sorry, your browser does not support inline SVG.
        </svg>
      </div>
    </div >
  );
}

export default App;
