import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cursor from "./components/cursor/Cursor";
import StarCursor from "./components/starCursor/starCursor";
import BtnToWandComponents from "./sections/btnToWandComponents/BtnToWandComponents";
import Header from "./sections/header/Header";
import HowAreMade from "./sections/howAreMade/HowAreMade";
import Intro from "./sections/intro/Intro";
import Process from "./sections/process/Process";
import AllWandsComponents from "./sections/allWandsComponents/AllWandsComponents";
import Footer from "./sections/footer/Footer";
import WandGenerator from "./sections/wandGenerator/WandGenerator";

function MainContent() {
  return (
    <>
      <Intro />
      <Process />
      <HowAreMade />
      <BtnToWandComponents />
    </>
  );
}
function App() {
  return (
    <Router>
      <>
        <Cursor />
        <StarCursor />
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />

          <Route
            path="/all-wands-components"
            element={<AllWandsComponents />}
          />
          <Route path="/wand-generator" element={<WandGenerator />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
