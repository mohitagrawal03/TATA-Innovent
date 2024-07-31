import React, { useState } from "react";
import axios from "axios";
import cars from "../assets/data.js";
import { useParams } from "react-router-dom";

const ChatComponent = () => {
  const params = useParams();

  const car = cars.find((car) => car.id === params.id);
  const carName = car.name;

  // console.log(params.id);

  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      setMessages([...messages, userMessage]);
      setInput("");

      try {
        console.log("Sending request to API with prompt:", input);
        // Replace 'YourCarName' with the actual car name or parameter you need to pass
        const response = await axios.get(
          "https://6cc2-34-125-149-39.ngrok-free.app/generate",

          {
            params: { prompt: input, car: carName },

            headers: { "ngrok-skip-browser-warning": true },
          }
        );
        console.log("Received response from API:", response.data);

        const botMessage = {
          text: response.data.generated_text,
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error("Error fetching response:", error);
        const errorMessage = {
          text: "Sorry, something went wrong. Please try again.",
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-white rounded-lg shadow-md">
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex flex-col gap-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${
                msg.sender === "bot"
                  ? "bg-blue-100 self-start"
                  : "bg-green-100 self-end"
              }`}
            >
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onKeyDown={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;

// import React, { useState } from "react";
// import axios from "axios";

// const ChatComponent = ({ carName }) => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today?", sender: "bot" },
//   ]);
//   const [input, setInput] = useState("");

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   const handleSend = async () => {
//     if (input.trim()) {
//       const userMessage = { text: input, sender: "user" };
//       setMessages([...messages, userMessage]);
//       setInput("");

//       try {
//         console.log("Sending request to API with prompt:", input);
//         const response = await axios.get(
//           "https://5a0b-34-125-67-21.ngrok-free.app/generate",

//           {
//             params: { prompt: input, car: carName },
//             headers: { "ngrok-skip-browser-warning": true },
//           }
//         );
//         console.log("Received response from API:", response.data);

//         const botMessage = {
//           text: response.data.generated_text,
//           sender: "bot",
//         };
//         setMessages((prevMessages) => [...prevMessages, botMessage]);
//       } catch (error) {
//         console.error("Error fetching response:", error);
//         const errorMessage = {
//           text: "Sorry, something went wrong. Please try again.",
//           sender: "bot",
//         };
//         setMessages((prevMessages) => [...prevMessages, errorMessage]);
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col h-full w-full bg-white rounded-lg shadow-md">
//       <div className="flex-1 p-4 overflow-y-auto">
//         <div className="flex flex-col gap-2">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`p-2 rounded-lg ${
//                 msg.sender === "bot"
//                   ? "bg-blue-100 self-start"
//                   : "bg-green-100 self-end"
//               }`}
//             >
//               <p>{msg.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="p-4 border-t border-gray-200">
//         <div className="flex gap-2">
//           <input
//             type="text"
//             value={input}
//             onKeyDown={handleKeyDown}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-1 p-2 border border-gray-300 rounded-lg"
//           />
//           <button
//             onClick={handleSend}
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;
