import "./styles.css"
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import infoPanel from "./components/infoPanel";
import Navigation from "./components/Navigation";
import Content from "./components/Home/Content";
import findService from "./components/findService/findService"

const App = () => {
  const [visible, setVisible] = useState(true)

  return (
  <BrowserRouter>
  <div className="App">
    <Header/>
    <infoPanel/>
    <Navigation/>
    <Content/>
    <Routes>
      <Route path="/home" element={<Content/>}/>
      <Route path="/findService" element={<findService/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
