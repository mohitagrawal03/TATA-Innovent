import React, { useState } from 'react';

const ChatComponent = () => {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault(); 
          handleSend();
        }
      };

  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {

        //ROUTE TO CHAT API

      setMessages([...messages, { text: input, sender: "user" }]);
      setInput('');

        
        //simulating
     
        setMessages(prevMessages => [
          ...prevMessages,
          { text: "Thank you for your message! We'll get back to you soon.", sender: "bot" }
        ]);


    }
  };

  return (
    <div className='flex flex-col h-full w-full bg-white rounded-lg shadow-md'>
      <div className='flex-1 p-4 overflow-y-auto'>
        <div className='flex flex-col gap-2'>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${msg.sender === 'bot' ? 'bg-blue-100 self-start' : 'bg-green-100 self-end'}`}
            >
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='p-4 border-t border-gray-200'>
        <div className='flex gap-2'>
          <input
            type='text'
            value={input}
            onKeyDown={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type your message...'
            className='flex-1 p-2 border border-gray-300 rounded-lg'
          />
          <button
            onClick={handleSend}
            className='px-4 py-2 bg-blue-500 text-white rounded-lg'
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
