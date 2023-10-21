


import "./App.css";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";
import Home from "./components/Home/MainHome";
import Landing from "./pages/Landing";
import Chat from './pages/Chat';
import Grammar from "./pages/Grammar";

import { Routes, Route } from "react-router-dom";
import PomoDoro from "./pages/PomoDoro";
import Quiz from "./pages/Quiz";
import Scramble from "./pages/Scramble";

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
        <Route path="/pomodoro" element={<PomoDoro />} />
        <Route path="/scramble" element={<Scramble />} />
        <Route path="/quiz" element={<Quiz />} />



      </Routes>






    </div>
  );
}

export default App;
