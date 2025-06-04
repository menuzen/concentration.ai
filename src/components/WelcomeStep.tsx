import React, { useState } from 'react';

interface WelcomeStepProps {
  onContinue: (name: string) => void;
}

const WelcomeStep: React.FC<WelcomeStepProps> = ({ onContinue }) => {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto p-8 bg-white rounded-xl shadow text-gray-900 min-h-screen items-center justify-center">
      <div className="flex flex-col items-center w-full">
        {/* Logo and app name */}
        <div className="flex flex-col items-center mb-8">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
            <circle cx="24" cy="24" r="24" fill="#2a2744" />
            <path d="M16 32c0-8 16-8 16 0" stroke="#5b6fff" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M18 20c0-4 12-4 12 0" stroke="#5b6fff" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="24" cy="24" r="8" stroke="#5b6fff" strokeWidth="2.5"/>
          </svg>
          <span className="text-2xl font-semibold tracking-tight">concentration.ai</span>
        </div>
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 leading-tight">
          Let's generate and<br />store a mindfile<br />for you
        </h1>
        {/* Input */}
        <label className="block text-lg text-center mb-2">What should I call you?</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-lg bg-gray-100 text-black text-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Continue button */}
        <button
          onClick={() => onContinue(name)}
          disabled={!name.trim()}
          className="w-full py-3 bg-blue-600 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition disabled:opacity-50 text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default WelcomeStep; 