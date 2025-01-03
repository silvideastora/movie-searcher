import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Searcher from "./componentes/Searcher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Buscador de Películas</h1>
      <Searcher />
    </>
  );
}

export default App;
