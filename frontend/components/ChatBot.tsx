"use client"

import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now(),
        text: "This is a simulated response from Lenda.",
        sender: 'bot',
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="flex">
      <div className="flex-1 flex items-center justify-end p-8">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">Meet Lenda</h2>
          <p className="text-lg text-gray-700">
            This is my AI assistant Lenda. You can ask anything about me, and Lenda will be happy to help!
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-start p-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
          <div className="bg-purple-600 text-white p-4">
            <h2 className="text-xl font-bold">Chat with Lenda</h2>
          </div>
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-purple-500 text-white' 
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-2 border rounded"
                placeholder="Ask Lenda anything..."
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;