import React from 'react';

interface PersonalMemoryProfile {
  key_milestones: string[];
  ongoing_work: string[];
  personal_facts: string[];
  frequent_collaborators: string[];
  attached_files: string[];
  memory_tags: string[];
}

interface PersonalMemoryStepProps {
  profile: PersonalMemoryProfile;
  updateProfile: (data: Partial<PersonalMemoryProfile>) => void;
  onNext: () => void;
  onBack: () => void;
}

const PersonalMemoryStep: React.FC<PersonalMemoryStepProps> = ({
  profile,
  updateProfile,
  onNext,
  onBack
}) => {
  return (
    <div className="flex flex-col w-full max-w-xl mx-auto p-8 bg-white rounded-xl shadow text-gray-900">
      <h2 className="text-2xl font-bold mb-6">Personal Memory Layer</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Key Milestones</label>
          <textarea
            value={profile.key_milestones.join('\n')}
            onChange={(e) => updateProfile({ key_milestones: e.target.value.split('\n').filter(m => m.trim()) })}
            placeholder="Enter key milestones (date + note), one per line"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Ongoing Work</label>
          <textarea
            value={profile.ongoing_work.join('\n')}
            onChange={(e) => updateProfile({ ongoing_work: e.target.value.split('\n').filter(w => w.trim()) })}
            placeholder="Enter ongoing work items, one per line"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Personal Facts</label>
          <textarea
            value={profile.personal_facts.join('\n')}
            onChange={(e) => updateProfile({ personal_facts: e.target.value.split('\n').filter(f => f.trim()) })}
            placeholder="Enter personal facts (location, newsletter, business type), one per line"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Frequent Collaborators</label>
          <textarea
            value={profile.frequent_collaborators.join('\n')}
            onChange={(e) => updateProfile({ frequent_collaborators: e.target.value.split('\n').filter(c => c.trim()) })}
            placeholder="Enter people you work with often, one per line"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Files to Learn From</label>
          <input
            type="file"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files || []).map(f => f.name);
              updateProfile({ attached_files: files });
            }}
            className="w-full p-2 rounded border border-gray-600"
          />
          {profile.attached_files.length > 0 && (
            <div className="mt-2">
              <p className="text-sm text-gray-400">Selected files:</p>
              <ul className="text-sm text-gray-400">
                {profile.attached_files.map((file, index) => (
                  <li key={index}>{file}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Memory Tags</label>
          <textarea
            value={profile.memory_tags.join('\n')}
            onChange={(e) => updateProfile({ memory_tags: e.target.value.split('\n').filter(t => t.trim()) })}
            placeholder="Enter memory tags (tone, context, audience relevance), one per line"
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

export default PersonalMemoryStep; 