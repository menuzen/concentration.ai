import React from 'react';

interface BehaviorRitualsProfile {
  ritual_preferences: string;
  productivity_style: string;
  ai_energy_mirroring: boolean;
  profile_update_frequency: "monthly" | "quarterly";
}

interface BehaviorRitualsStepProps {
  profile: BehaviorRitualsProfile;
  updateProfile: (data: Partial<BehaviorRitualsProfile>) => void;
  onNext: () => void;
  onBack: () => void;
}

const BehaviorRitualsStep: React.FC<BehaviorRitualsStepProps> = ({
  profile,
  updateProfile,
  onNext,
  onBack
}) => {
  return (
    <div className="flex flex-col w-full max-w-xl mx-auto p-8 bg-white rounded-xl shadow text-gray-900">
      <h2 className="text-2xl font-bold mb-6">Behavior & Rituals</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Ritual Preferences</label>
          <textarea
            value={profile.ritual_preferences}
            onChange={(e) => updateProfile({ ritual_preferences: e.target.value })}
            placeholder="Describe your morning or evening ritual preferences"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Productivity Style</label>
          <textarea
            value={profile.productivity_style}
            onChange={(e) => updateProfile({ productivity_style: e.target.value })}
            placeholder="Describe your productivity style (deep work blocks, fast iterations, etc.)"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={profile.ai_energy_mirroring}
            onChange={(e) => updateProfile({ ai_energy_mirroring: e.target.checked })}
            className="mr-2"
          />
          <label className="text-sm font-medium">Do you want AI to mirror your energy?</label>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Profile Update Frequency</label>
          <select
            value={profile.profile_update_frequency}
            onChange={(e) => updateProfile({ profile_update_frequency: e.target.value as BehaviorRitualsProfile['profile_update_frequency'] })}
            className="w-full p-2 rounded border border-gray-600"
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
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

export default BehaviorRitualsStep; 