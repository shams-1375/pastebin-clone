import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PasteView from "./PasteView";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paste/:id" element={<PasteView />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
