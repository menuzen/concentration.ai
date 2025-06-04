import React from 'react';
import type { Profile } from '../App';

interface EmotionalStyleStepProps {
  profile: Profile['emotional_style_and_motivation'];
  updateProfile: (data: Partial<Profile['emotional_style_and_motivation']>) => void;
  onNext: () => void;
  onBack: () => void;
}

const EmotionalStyleStep: React.FC<EmotionalStyleStepProps> = ({
  profile,
  updateProfile,
  onNext,
  onBack
}) => {
  return (
    <div className="flex flex-col w-full max-w-xl mx-auto p-8 bg-white rounded-xl shadow text-gray-900">
      <h2 className="text-2xl font-bold mb-6">Emotional Style & Motivation</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">What Motivates You Most?</label>
          <textarea
            value={profile.motivators.join('\n')}
            onChange={(e) => updateProfile({ motivators: e.target.value.split('\n').filter(m => m.trim()) })}
            placeholder="Enter motivators, one per line"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">What Kills Your Energy Fast?</label>
          <textarea
            value={profile.energy_killers.join('\n')}
            onChange={(e) => updateProfile({ energy_killers: e.target.value.split('\n').filter(k => k.trim()) })}
            placeholder="Enter energy killers, one per line"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">How Should AI Respond When You're Stressed?</label>
          <textarea
            value={profile.response_style_stressed}
            onChange={(e) => updateProfile({ response_style_stressed: e.target.value })}
            placeholder="Describe how you'd like AI to respond when you're stressed"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">How Should AI Respond When You're Celebrating?</label>
          <textarea
            value={profile.response_style_celebrating}
            onChange={(e) => updateProfile({ response_style_celebrating: e.target.value })}
            placeholder="Describe how you'd like AI to respond when you're celebrating"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">How Should AI Respond When You're Stuck?</label>
          <textarea
            value={profile.response_style_stuck}
            onChange={(e) => updateProfile({ response_style_stuck: e.target.value })}
            placeholder="Describe how you'd like AI to respond when you're stuck"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={profile.emotional_nuance}
            onChange={(e) => updateProfile({ emotional_nuance: e.target.checked })}
            className="mr-2"
          />
          <label className="text-sm font-medium">Do you want emotional nuance in your assistant?</label>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmotionalStyleStep; 