import React from 'react';
import type { Profile } from '../App';

interface WorkArchetypeStepProps {
  profile: Profile['work_archetype_and_communication'];
  updateProfile: (data: Partial<Profile['work_archetype_and_communication']>) => void;
  onNext: () => void;
  onBack: () => void;
}

const WorkArchetypeStep: React.FC<WorkArchetypeStepProps> = ({
  profile,
  updateProfile,
  onNext,
  onBack
}) => {
  return (
    <div className="flex flex-col w-full max-w-xl mx-auto p-8 bg-white rounded-xl shadow text-gray-900">
      <h2 className="text-2xl font-bold mb-6">Work Archetype & Communication</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Work Archetype</label>
          <select
            value={profile.archetype}
            onChange={(e) => updateProfile({ archetype: e.target.value as Profile['work_archetype_and_communication']['archetype'] })}
            className="w-full p-2 rounded border border-gray-600"
          >
            <option value="visionary">Visionary</option>
            <option value="builder">Builder</option>
            <option value="operator">Operator</option>
            <option value="explorer">Explorer</option>
            <option value="coach">Coach</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Lead or Support</label>
          <select
            value={profile.lead_or_support}
            onChange={(e) => updateProfile({ lead_or_support: e.target.value as Profile['work_archetype_and_communication']['lead_or_support'] })}
            className="w-full p-2 rounded border border-gray-600"
          >
            <option value="lead">Lead</option>
            <option value="support">Support</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Collaboration Style</label>
          <select
            value={profile.collaboration_style}
            onChange={(e) => updateProfile({ collaboration_style: e.target.value as Profile['work_archetype_and_communication']['collaboration_style'] })}
            className="w-full p-2 rounded border border-gray-600"
          >
            <option value="fast_async">Fast & Async</option>
            <option value="deep_sync">Deep & Sync</option>
            <option value="feedback_first">Feedback First</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Communication Style</label>
          <select
            value={profile.communication_style}
            onChange={(e) => updateProfile({ communication_style: e.target.value as Profile['work_archetype_and_communication']['communication_style'] })}
            className="w-full p-2 rounded border border-gray-600"
          >
            <option value="direct_blunt">Direct & Blunt</option>
            <option value="clear_kind">Clear & Kind</option>
            <option value="soft_thoughtful">Soft & Thoughtful</option>
            <option value="fast_minimal">Fast & Minimal</option>
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

export default WorkArchetypeStep; 