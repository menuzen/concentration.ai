import React from "react";

type WelcomeStepProps = {
  name: string;
  setName: (v: string) => void;
  onContinue: () => void;
};

const WelcomeStep: React.FC<WelcomeStepProps> = ({ name, setName, onContinue }) => (
  <div className="flex flex-col items-center w-full max-w-md p-8">
    {/* Logo + Title */}
    <div className="flex items-center mb-8">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
        <circle cx="24" cy="24" r="24" fill="#23214a" />
        <path d="M16 24C16 19.58 19.58 16 24 16C28.42 16 32 19.58 32 24C32 28.42 28.42 32 24 32C19.58 32 16 28.42 16 24Z" fill="#3b82f6" />
      </svg>
      <span className="text-3xl font-bold tracking-tight">concentration.ai</span>
    </div>
    {/* Headline */}
    <h1 className="text-4xl font-bold text-center mb-4 leading-tight text-white">
      Let's generate and<br />store a mindfile<br />for you
    </h1>
    {/* Subtext */}
    <p className="text-lg text-center mb-8">What should I call you?</p>
    {/* Input */}
    <input
      type="text"
      placeholder="Your name"
      value={name}
      onChange={e => setName(e.target.value)}
      className="w-full px-4 py-3 rounded-lg text-black text-xl mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    {/* Button */}
    <button
      className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold shadow transition"
      disabled={!name.trim()}
      onClick={onContinue}
    >
      Continue
    </button>
  </div>
);

export default WelcomeStep; 