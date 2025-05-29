"use client";
import React from "react";
import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import axios from "axios";
const page = () => {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    if (!messageInput.trim()) return;

    const apiKey = process.env.NEXT_PUBLIC_API;
    const endpoint =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

    const requestBody = {
      systemInstruction: {
        role: "system",
        parts: [
          {
            text: "You are a health assistant. Reply with simple remedies and avoid long explanations.",
          },
        ],
      },
      contents: [
        {
          role: "user",
          parts: [
            {
              text: messageInput,
            },
          ],
        },
      ],
    };

    try {
      const res = await fetch(`${endpoint}?key=${apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();

      const botReply =
        data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";

      setMessages((prev) => [
        ...prev,
        { role: "user", text: messageInput },
        { role: "bot", text: botReply },
      ]);
      setMessageInput("");
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "user", text: messageInput },
        { role: "bot", text: "Error: Could not connect to API." },
      ]);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-full h-full rounded-lg shadow-lg flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-400 text-white p-4 rounded-t-lg flex">
          <SidebarTrigger />
          <h2 className="pl-20 text-xl font-semibold">Synergetic Health</h2>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className={`max-w-xs p-3 rounded-lg  bg-gray-200 text-black`}>
            Hi there im a health bot could you please enter your symptoms
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
              className={`flex w-full ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white p-4  rounded-lg shadow-md"
                    : "bg-gray-200  text-black"
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
            className="bg-blue-500 text-white p-2 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
