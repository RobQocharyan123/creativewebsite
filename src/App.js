import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Delivering } from "./Components/Sections/Delivering/Delivering";
import { FineImages } from "./Components/Sections/FineImages/FineImages";
import { Pricing } from "./Components/Sections/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="sections">
        <FineImages />

        <Delivering />
        <Pricing />
      </div>

      <Footer />
    </div>
  );
}

export default App;
