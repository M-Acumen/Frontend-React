import React from "react";
import Lottie from "react-lottie";
import animationData from "./eggs.json"; // Replace with the path to your JSON animation file

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData, // Your JSON animation data
};
function MicAnimation() {
  return (
    <div>
      <Lottie
        options={lottieOptions}
        height={300} // Set the height as needed
        width={300} // Set the width as needed
      />
    </div>
  );
}

function App() {
  return <MicAnimation />;
}

export default App;
