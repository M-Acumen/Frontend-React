import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import rocketAnimation from './rocket.json'; // Replace with the correct path to your rocket.json file

const RocketAnimation = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    // Load the animation
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg', // Set the renderer to 'svg', 'canvas', 'html' based on your preference
      loop: true, // Set to true if you want the animation to loop
      autoplay: true, // Set to true if you want the animation to play automatically
      animationData: rocketAnimation, // Your JSON animation data
    });

    // Clean up on unmount
    return () => {
      anim.destroy();
    };
  }, []);

  return <div ref={animationContainer} />;
};

export default RocketAnimation;
