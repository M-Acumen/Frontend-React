import React, { useState } from 'react';

function TextInput() {
  const [inputText, setInputText] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    // Create a JSON object with the user's input
    const data = { text: inputText };

    // Make a POST request to the API endpoint
    fetch('http://localhost:8000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Set the API response message to the state
        setResponseMessage(data.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter your text"
      />
      <button onClick={handleSubmit}>Post to API</button>
      <p>You entered: {inputText}</p>
      <p>API Response: {responseMessage}</p>
    </div>
  );
}

export default TextInput;