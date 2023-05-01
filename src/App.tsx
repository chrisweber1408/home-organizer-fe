import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Welcome/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
