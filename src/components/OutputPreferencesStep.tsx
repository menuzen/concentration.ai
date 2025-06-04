import React from 'react';
import type { Profile } from '../App';

interface OutputPreferencesStepProps {
  profile: Profile['output_preferences'];
  updateProfile: (data: Partial<Profile['output_preferences']>) => void;
  onNext: () => void;
  onBack: () => void;
}

const OutputPreferencesStep: React.FC<OutputPreferencesStepProps> = ({
  profile,
  updateProfile,
  onNext,
  onBack
}) => {
  return (
    <div className="flex flex-col w-full max-w-xl mx-auto p-8 bg-white rounded-xl shadow text-gray-900">
      <h2 className="text-2xl font-bold mb-6">Output Preferences</h2>
      
      <div className="space-y-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={profile.tldr_preference}
            onChange={(e) => updateProfile({ tldr_preference: e.target.checked })}
            className="mr-2"
          />
          <label className="text-sm font-medium">Do you like TL;DRs first?</label>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Preferred Format</label>
          <select
            value={profile.format_preference}
            onChange={(e) => updateProfile({ format_preference: e.target.value as Profile['output_preferences']['format_preference'] })}
            className="w-full p-2 rounded border border-gray-600"
          >
            <option value="bullets">Bullets</option>
            <option value="tables">Tables</option>
            <option value="paragraphs">Paragraphs</option>
            <option value="frameworks">Frameworks</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Response Length</label>
          <select
            value={profile.response_length}
            onChange={(e) => updateProfile({ response_length: e.target.value as Profile['output_preferences']['response_length'] })}
            className="w-full p-2 rounded border border-gray-600"
          >
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="deep_dive">Deep Dive</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={profile.include_next_steps}
            onChange={(e) => updateProfile({ include_next_steps: e.target.checked })}
            className="mr-2"
          />
          <label className="text-sm font-medium">Do you want next steps included?</label>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Recommendation Style</label>
          <select
            value={profile.recommendation_style}
            onChange={(e) => updateProfile({ recommendation_style: e.target.value as Profile['output_preferences']['recommendation_style'] })}
            className="w-full p-2 rounded border border-gray-600"
          >
            <option value="alternatives">Alternatives</option>
            <option value="strong_recommendation">Strong Recommendation</option>
          </select>
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

export default OutputPreferencesStep; 