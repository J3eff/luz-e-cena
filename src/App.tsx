import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Newslatter from "./components/Newsletter";

function App() {
  return (
    <>
      <Header />
      <Banner src="./banner-desktop.png" alt="Banner" />
      <MovieSection />
      <Banner src="./banner-combo-desktop.png" alt="Combo" />
      <Newslatter />
      <Footer />
    </>
  );
}

export default App;
