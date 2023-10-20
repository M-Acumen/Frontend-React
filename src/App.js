


import "./App.css";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";
import Home from "./components/Home/MainHome";
import Landing from "./pages/Landing";
import Chat from './pages/Chat';
import Grammar from "./pages/Grammar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatme" element={<Chat />} />
        <Route path="/grammar" element={<Grammar />} />


      </Routes>






    </div>
  );
}

export default App;
