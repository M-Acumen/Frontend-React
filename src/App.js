<<<<<<< HEAD
import './App.css';


import Routers from './routers/Routers';

function App() {
  return (
    <div>
      <Routers />
=======
import "./App.css";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
>>>>>>> ankit
    </div>
  );
}

export default App;
