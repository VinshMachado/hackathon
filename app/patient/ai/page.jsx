"use client";
import React from "react";
import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import axios from "axios";
const page = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = async () => {
    if (messageInput.trim() !== "") {
      try {
        const data = await axios.post(
          "https://hackathonbackend-03v1.onrender.com/ai/detect",
          { question: `${messageInput}` },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!data) {
          data = " i cant find data is your internet on ?";
        }

        console.log(data.data);
        setMessages([
          ...messages,
          { text: messageInput, from: "user" },
          {
            text:
              data.data.score == 25
                ? `mostly you have ${data.data.answer}`
                : `${data.data.answer}`,
            from: "bot",
          },
        ]);
        setMessageInput("");
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-full h-full rounded-lg shadow-lg flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-700 to-green-400 text-white p-4 rounded-t-lg flex">
          <SidebarTrigger />
          <h2 className="pl-20 text-xl font-semibold">Chat with DOC AI</h2>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className={`max-w-xs p-3 rounded-lg  bg-gray-200 text-black`}>
            Enter your symptoms
          </div>
          <div className="flex mt-20 justify-center items-center absolute top-[50px] right-[330px] w-[600px] h-[600px]">
            <img
              src="/gray logo.png"
              alt="ai"
              className="w-full h-auto gray-filter opacity-10"
            />
          </div>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  msg.from === "user"
                    ? "bg-green-600 text-white p-4 rounded-lg shadow-md"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input and Send Button */}
        <div className="p-4 flex items-center space-x-2 border-t">
          <input
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Type a message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="bg-green-500 text-white p-2 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
