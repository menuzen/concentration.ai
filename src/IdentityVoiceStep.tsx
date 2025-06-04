import React, { useState } from "react";

type IdentityVoiceStepProps = {
  name: string;
  setName: (v: string) => void;
};

const IdentityVoiceStep: React.FC<IdentityVoiceStepProps> = ({ name, setName }) => {
  const [tone, setTone] = useState(50);
  const [energy, setEnergy] = useState(50);
  const [structure, setStructure] = useState<'bullet' | 'narrative' | null>(null);
  const [emoji, setEmoji] = useState<'never' | 'light' | 'expressive'>('light');
  const [lovePhrase, setLovePhrase] = useState('');
  const [avoidPhrase, setAvoidPhrase] = useState('');
  const [humor, setHumor] = useState<'none' | 'dry' | 'sarcastic' | 'playful'>('dry');

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto p-8 bg-white rounded-xl shadow text-gray-900">
      <h2 className="text-2xl font-bold mb-6">Identity & Voice</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <label className="font-semibold">Name / Nickname</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label className="font-semibold">Preferred tone</label>
          <input
            type="range"
            min={0}
            max={100}
            value={tone}
            onChange={e => setTone(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Chill</span>
            <span>Direct</span>
          </div>
          <label className="font-semibold">Energy level</label>
          <input
            type="range"
            min={0}
            max={100}
            value={energy}
            onChange={e => setEnergy(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Low</span>
            <span>High</span>
          </div>
          <label className="font-semibold">Structure</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input type="checkbox" checked={structure === 'bullet'} onChange={() => setStructure(structure === 'bullet' ? null : 'bullet')} />
              Bullet points
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" checked={structure === 'narrative'} onChange={() => setStructure(structure === 'narrative' ? null : 'narrative')} />
              Narrative
            </label>
          </div>
          <label className="font-semibold">Emoji use</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input type="radio" checked={emoji === 'never'} onChange={() => setEmoji('never')} /> never
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" checked={emoji === 'light'} onChange={() => setEmoji('light')} /> light
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" checked={emoji === 'expressive'} onChange={() => setEmoji('expressive')} /> expressive
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="font-semibold">Phrases you love or say often</label>
          <input
            type="text"
            value={lovePhrase}
            onChange={e => setLovePhrase(e.target.value)}
            className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label className="font-semibold">Phrases to avoid</label>
          <input
            type="text"
            value={avoidPhrase}
            onChange={e => setAvoidPhrase(e.target.value)}
            className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label className="font-semibold">Humor style</label>
          <div className="flex gap-4 flex-wrap">
            <label className="flex items-center gap-1">
              <input type="radio" checked={humor === 'none'} onChange={() => setHumor('none')} /> one
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" checked={humor === 'dry'} onChange={() => setHumor('dry')} /> dry
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" checked={humor === 'sarcastic'} onChange={() => setHumor('sarcastic')} /> sarcastic
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" checked={humor === 'playful'} onChange={() => setHumor('playful')} /> playful
            </label>
          </div>
          <div className="bg-gray-100 rounded p-4 mt-4">
            <div className="font-semibold mb-1">Live preview</div>
            <div className="text-gray-700 text-sm">
              Here's how you sound so far...<br />
              {lovePhrase ? `${lovePhrase}! ` : ''}I'm excited to get started.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityVoiceStep; 