


import "./App.css";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";
import Home from "./components/Home/MainHome";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />

      </Routes>






    </div>
  );
}

export default App;
