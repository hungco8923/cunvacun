import "./sass/styles.scss";
import Landing from "./pages/Landing";
import "yet-another-react-lightbox/styles.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import PhotoGallery from "./pages/PhotoGallery";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/cunvacun/" element={<Landing />}></Route>
        <Route path="/cunvacun/gallery" element={<PhotoGallery />}></Route>
      </Routes>
    </>
  );
}

export default App;
