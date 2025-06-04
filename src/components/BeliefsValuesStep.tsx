import React from 'react';

interface BeliefsValuesProfile {
  core_values: string[];
  strong_opinions: string[];
  communication_avoidance: string[];
  dealbreakers: string[];
}

interface BeliefsValuesStepProps {
  profile: BeliefsValuesProfile;
  updateProfile: (data: Partial<BeliefsValuesProfile>) => void;
  onNext: () => void;
  onBack: () => void;
}

const BeliefsValuesStep: React.FC<BeliefsValuesStepProps> = ({
  profile,
  updateProfile,
  onNext,
  onBack
}) => {
  return (
    <div className="flex flex-col w-full max-w-xl mx-auto p-8 bg-white rounded-xl shadow text-gray-900">
      <h2 className="text-2xl font-bold mb-6">Beliefs & Values</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Core Values (3-5)</label>
          <textarea
            value={profile.core_values.join('\n')}
            onChange={(e) => updateProfile({ core_values: e.target.value.split('\n').filter(v => v.trim()) })}
            placeholder="Enter your core values, one per line"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Strong Opinions</label>
          <textarea
            value={profile.strong_opinions.join('\n')}
            onChange={(e) => updateProfile({ strong_opinions: e.target.value.split('\n').filter(o => o.trim()) })}
            placeholder="Enter your strong opinions, one per line"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Communication to Avoid</label>
          <textarea
            value={profile.communication_avoidance.join('\n')}
            onChange={(e) => updateProfile({ communication_avoidance: e.target.value.split('\n').filter(c => c.trim()) })}
            placeholder="Enter things to avoid (buzzwords, passive voice, etc.), one per line"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Dealbreakers</label>
          <textarea
            value={profile.dealbreakers.join('\n')}
            onChange={(e) => updateProfile({ dealbreakers: e.target.value.split('\n').filter(d => d.trim()) })}
            placeholder="Enter your dealbreakers or red flags, one per line"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
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

export default BeliefsValuesStep; 