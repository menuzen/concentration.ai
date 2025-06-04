import React from 'react';
import type { Profile } from '../App';

interface WorkContextStepProps {
  profile: Profile['work_context_and_goals'];
  updateProfile: (data: Partial<Profile['work_context_and_goals']>) => void;
  onNext: () => void;
  onBack: () => void;
}

const WorkContextStep: React.FC<WorkContextStepProps> = ({
  profile,
  updateProfile,
  onNext,
  onBack
}) => {
  return (
    <div className="flex flex-col w-full max-w-xl mx-auto p-8 bg-white rounded-xl shadow text-gray-900">
      <h2 className="text-2xl font-bold mb-6">Work Context & Goals</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Role / Title</label>
          <input
            type="text"
            value={profile.role}
            onChange={(e) => updateProfile({ role: e.target.value })}
            className="w-full p-2 rounded border border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Company</label>
          <input
            type="text"
            value={profile.company}
            onChange={(e) => updateProfile({ company: e.target.value })}
            className="w-full p-2 rounded border border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Industry</label>
          <input
            type="text"
            value={profile.industry}
            onChange={(e) => updateProfile({ industry: e.target.value })}
            className="w-full p-2 rounded border border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tools Used</label>
          <textarea
            value={profile.tools_used.join('\n')}
            onChange={(e) => updateProfile({ tools_used: e.target.value.split('\n').filter(t => t.trim()) })}
            placeholder="Enter tools, one per line (e.g., Slack, Notion, Figma)"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Current Project</label>
          <textarea
            value={profile.current_project}
            onChange={(e) => updateProfile({ current_project: e.target.value })}
            placeholder="What's your biggest project right now?"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Weekly Workflow</label>
          <textarea
            value={profile.weekly_workflow}
            onChange={(e) => updateProfile({ weekly_workflow: e.target.value })}
            placeholder="Describe your typical weekly workflow"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Current Blockers</label>
          <textarea
            value={profile.blockers}
            onChange={(e) => updateProfile({ blockers: e.target.value })}
            placeholder="What's blocking your progress?"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Upcoming Milestones</label>
          <textarea
            value={profile.milestones}
            onChange={(e) => updateProfile({ milestones: e.target.value })}
            placeholder="What are your upcoming deadlines or milestones?"
            className="w-full p-2 rounded border border-gray-600 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Work Sample Upload</label>
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                updateProfile({ work_upload: file.name });
              }
            }}
            className="w-full p-2 rounded border border-gray-600"
          />
          {profile.work_upload && (
            <p className="mt-2 text-sm text-gray-400">Selected: {profile.work_upload}</p>
          )}
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

export default WorkContextStep; 