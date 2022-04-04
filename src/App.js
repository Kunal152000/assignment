import Category from "./components/category/category";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Review from "./components/review/review";
import Section from "./components/section/section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section />
      <Review />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
