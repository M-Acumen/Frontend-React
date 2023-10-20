


import "./App.css";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/register" element={<Register />} />
      </Routes>






    </div>
  );
}

export default App;
