import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Router } from "./components/router/router";

import Home from "./components/home/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
