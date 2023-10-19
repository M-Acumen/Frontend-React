import React, { useState } from 'react';
import axios from 'axios';

const ChatApp = () => {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/', {
        // prompt: inputText
      });
      setResponse(response.data);
      console.log(response.data); // assuming the response format is { message: 'response text' }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div className="chat-container">
      <form onSubmit={handleSubmit}>
        <label>
          Enter your message:
          <input type="text" value={inputText} onChange={handleInputChange} />
        </label>
        <button type="submit">Send</button>
      </form>
      {response && <div className="response-container">{response}</div>}
    </div>
  );
};

export default ChatApp;
