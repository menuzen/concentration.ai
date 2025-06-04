import React from 'react';
import type { Profile } from '../App';

interface ThinkingStyleStepProps {
  profile: Profile['thinking_style'];
  updateProfile: (data: Partial<Profile['thinking_style']>) => void;
  onNext: () => void;
  onBack: () => void;
}

const ThinkingStyleStep: React.FC<ThinkingStyleStepProps> = ({
  profile,
  updateProfile,
  onNext,
  onBack
}) => {
  return (
    <div className="flex flex-col w-full max-w-xl mx-auto p-8 bg-white rounded-xl shadow text-gray-900">
      <h2 className="text-2xl font-bold mb-6">Thinking Style</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Reasoning Style</label>
          <select
            value={profile.reasoning_style}
            onChange={(e) => updateProfile({ reasoning_style: e.target.value as Profile['thinking_style']['reasoning_style'] })}
            className="w-full p-2 rounded border border-gray-600"
          >
            <option value="first_principles">First Principles</option>
            <option value="analogy">Analogy</option>
            <option value="frameworks">Frameworks</option>
            <option value="narrative">Narrative</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Decision Bias</label>
          <select
            value={profile.decision_bias}
            onChange={(e) => updateProfile({ decision_bias: e.target.value as Profile['thinking_style']['decision_bias'] })}
            className="w-full p-2 rounded border border-gray-600"
          >
            <option value="speed">Speed</option>
            <option value="certainty">Certainty</option>
            <option value="gut">Gut</option>
            <option value="data">Data</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Framing Preference</label>
          <input
            type="text"
            value={profile.framing_preference}
            onChange={(e) => updateProfile({ framing_preference: e.target.value })}
            placeholder="e.g., outcome-first, context-first"
            className="w-full p-2 rounded border border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Problem Solving Style</label>
          <select
            value={profile.problem_solving_style}
            onChange={(e) => updateProfile({ problem_solving_style: e.target.value as Profile['thinking_style']['problem_solving_style'] })}
            className="w-full p-2 rounded border border-gray-600"
          >
            <option value="strategic">Strategic</option>
            <option value="practical">Practical</option>
            <option value="exploratory">Exploratory</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={profile.likes_ai_to_challenge}
            onChange={(e) => updateProfile({ likes_ai_to_challenge: e.target.checked })}
            className="mr-2"
          />
          <label className="text-sm font-medium">Do you like being challenged by AI?</label>
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

export default ThinkingStyleStep; 