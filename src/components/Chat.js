import React, { useState } from "react";
import jimmy from "../images/jimmy.jpeg";

const Chat = () => {
    {/*Use State Hook To Create A Boolean Value That Will Be Used To Open And Close The Chat Window*/}
    const [isOpen, setIsOpen] = useState(false);
    {/* sonst toggleChat toggles the isOpen state*/}  
    const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed bottom-6 right-6">
      <div
        className="bg-transparent sm:bg-orange-200 rounded-full shadow-lg p-0 sm:p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={toggleChat}
      >
        {/* Jimmy Chat Bubble Picture That Opens The Chat Window When Clicked On  */} 
        <img
          src={jimmy}
          alt="Jimmy"
          className="rounded-full w-14 h-14"
        />
      </div>
      {/* Message Box When The Chat Window Is Opened  */} 
      {isOpen && (
        <div className="mt-2 bg-orange-200 rounded-lg shadow-xl p-4 flex items-center relative animate-fade-in">
          <p className="text-gray-800 text-sm font-bold">Find answers quickly</p>
          <button
            className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
            onClick={toggleChat}
          >
            &times;
          </button>
        </div>
      )}
      {/* Chat Window When The Chat Bubble Is Clicked On  */}
      {isOpen && (
        <div className="mt-4 bg-white rounded-lg shadow-xl p-4 w-72 h-96 animate-slide-up">
          <h2 className="text-lg font-bold mb-4 text-amber-950">Chat with Support</h2>
          <div className="h-64 bg-gray-100 rounded-md p-2 overflow-y-auto">
            <p className="text-gray-600">This is the chat window. How can we assist you?</p>
          </div>
          <input
            type="text"
            className="mt-2 w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-950"
            placeholder="Type a message..."
          />
        </div>
      )}
    </div>
    )
}
export default Chat