import React from 'react';
import type { Profile } from '../App';

interface IdentityVoiceStepProps {
  profile: Profile['identity_and_voice'];
  updateProfile: (data: Partial<Profile['identity_and_voice']>) => void;
  onNext: () => void;
  onBack: () => void;
}

const toneLabels = ["Chill", "Direct"];
const energyLabels = ["Low", "High"];

const IdentityVoiceStep: React.FC<IdentityVoiceStepProps> = ({
  profile,
  updateProfile,
  onNext,
  onBack
}) => {

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto p-8 bg-white rounded-xl shadow text-gray-900">
      <h2 className="text-2xl font-bold mb-6">Identity & Voice</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          <label className="font-semibold">Name / Nickname</label>
          <input
            type="text"
            value={profile.name}
            onChange={e => updateProfile({ name: e.target.value })}
            className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your name or nickname"
          />
          <label className="font-semibold">Preferred tone</label>
          <input
            type="range"
            min={0}
            max={100}
            value={profile.preferred_tone}
            onChange={e => updateProfile({ preferred_tone: +e.target.value })}
            className="w-full accent-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>{toneLabels[0]}</span>
            <span>{toneLabels[1]}</span>
          </div>
          <label className="font-semibold">Energy level</label>
          <input
            type="range"
            min={0}
            max={100}
            value={profile.energy_level}
            onChange={e => updateProfile({ energy_level: +e.target.value })}
            className="w-full accent-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>{energyLabels[0]}</span>
            <span>{energyLabels[1]}</span>
          </div>
          <label className="font-semibold">Structure</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={profile.structure.includes('bullet_points')}
                onChange={() => {
                  const newVal = profile.structure.includes('bullet_points')
                    ? profile.structure.filter(s => s !== 'bullet_points')
                    : [...profile.structure, 'bullet_points'];
                  updateProfile({ structure: newVal });
                }}
              />
              Bullet points
            </label>
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={profile.structure.includes('narrative')}
                onChange={() => {
                  const newVal = profile.structure.includes('narrative')
                    ? profile.structure.filter(s => s !== 'narrative')
                    : [...profile.structure, 'narrative'];
                  updateProfile({ structure: newVal });
                }}
              />
              Narrative
            </label>
          </div>
          <label className="font-semibold">Emoji use</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input type="radio" checked={profile.emoji_use === 'none'} onChange={() => updateProfile({ emoji_use: 'none' })} /> never
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" checked={profile.emoji_use === 'light'} onChange={() => updateProfile({ emoji_use: 'light' })} /> light
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" checked={profile.emoji_use === 'expressive'} onChange={() => updateProfile({ emoji_use: 'expressive' })} /> expressive
            </label>
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-4">
          <label className="font-semibold">Phrases you love or say often</label>
          <textarea
            value={profile.phrases_to_use.join('\n')}
            onChange={e => updateProfile({ phrases_to_use: e.target.value.split('\n').filter(p => p.trim()) })}
            className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter phrases, one per line"
          />
          <label className="font-semibold">Phrases to avoid</label>
          <textarea
            value={profile.phrases_to_avoid.join('\n')}
            onChange={e => updateProfile({ phrases_to_avoid: e.target.value.split('\n').filter(p => p.trim()) })}
            className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter phrases, one per line"
          />
          <label className="font-semibold">Humor style</label>
          <div className="flex gap-4 flex-wrap">
            <label className="flex items-center gap-1">
              <input type="radio" checked={profile.humor_style === 'none'} onChange={() => updateProfile({ humor_style: 'none' })} /> none
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" checked={profile.humor_style === 'dry'} onChange={() => updateProfile({ humor_style: 'dry' })} /> dry
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" checked={profile.humor_style === 'sarcastic'} onChange={() => updateProfile({ humor_style: 'sarcastic' })} /> sarcastic
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" checked={profile.humor_style === 'playful'} onChange={() => updateProfile({ humor_style: 'playful' })} /> playful
            </label>
          </div>
          <div className="bg-gray-100 rounded p-4 mt-4">
            <div className="font-semibold mb-1">Live preview</div>
            <div className="text-gray-700 text-sm">
              Here's how you sound so far...<br />
              {profile.phrases_to_use.length > 0 ? `${profile.phrases_to_use[0]}! ` : ''}I'm excited to get started.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700 text-white"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default IdentityVoiceStep; 