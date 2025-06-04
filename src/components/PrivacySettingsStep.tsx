import React from 'react';

interface PrivacySettingsProfile {
  export_chatgpt: boolean;
  export_claude: boolean;
  export_json: boolean;
  redact_emotional: boolean;
  redact_memory: boolean;
  strip_names: boolean;
  export_presets: "stealth" | "writing_assistant" | "full_you";
}

interface PrivacySettingsStepProps {
  profile: PrivacySettingsProfile;
  updateProfile: (data: Partial<PrivacySettingsProfile>) => void;
  onNext: () => void;
  onBack: () => void;
}

const PrivacySettingsStep: React.FC<PrivacySettingsStepProps> = ({
  profile,
  updateProfile,
  onNext,
  onBack
}) => {
  return (
    <div className="flex flex-col w-full max-w-xl mx-auto p-8 bg-white rounded-xl shadow text-gray-900">
      <h2 className="text-2xl font-bold mb-6">Privacy & Export Settings</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-4">Export Options</label>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={profile.export_chatgpt}
                onChange={(e) => updateProfile({ export_chatgpt: e.target.checked })}
                className="mr-2"
              />
              <span>Allow export to ChatGPT</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={profile.export_claude}
                onChange={(e) => updateProfile({ export_claude: e.target.checked })}
                className="mr-2"
              />
              <span>Allow export to Claude</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={profile.export_json}
                onChange={(e) => updateProfile({ export_json: e.target.checked })}
                className="mr-2"
              />
              <span>Allow export to JSON</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-4">Privacy Options</label>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={profile.redact_emotional}
                onChange={(e) => updateProfile({ redact_emotional: e.target.checked })}
                className="mr-2"
              />
              <span>Redact emotional layer</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={profile.redact_memory}
                onChange={(e) => updateProfile({ redact_memory: e.target.checked })}
                className="mr-2"
              />
              <span>Redact memory</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={profile.strip_names}
                onChange={(e) => updateProfile({ strip_names: e.target.checked })}
                className="mr-2"
              />
              <span>Strip names or job information</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Export Presets</label>
          <select
            value={profile.export_presets}
            onChange={(e) => updateProfile({ export_presets: e.target.value as PrivacySettingsProfile['export_presets'] })}
            className="w-full p-2 rounded border border-gray-600"
          >
            <option value="stealth">Stealth Mode</option>
            <option value="writing_assistant">Writing Assistant Mode</option>
            <option value="full_you">Full You</option>
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

export default PrivacySettingsStep; 