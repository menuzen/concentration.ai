import React from 'react';
import type { Profile } from '../App';

interface PreviewStepProps {
  profile: Profile;
  onBack: () => void;
}

const PreviewStep: React.FC<PreviewStepProps> = ({
  profile,
  onBack
}) => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(profile, null, 2));
  };

  const handleDownload = (format: 'json' | 'txt') => {
    const content = format === 'json' 
      ? JSON.stringify(profile, null, 2)
      : JSON.stringify(profile);
    
    const blob = new Blob([content], { type: format === 'json' ? 'application/json' : 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mindfile.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto p-8 bg-white rounded-xl shadow text-gray-900">
      <h2 className="text-2xl font-bold mb-6">Preview & Finish</h2>
      
      <div className="space-y-6">
        <div className="p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Live Preview</h3>
          <pre className="text-sm overflow-auto max-h-96">
            {JSON.stringify(profile, null, 2)}
          </pre>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm">Character count:</span>
            <span className="text-sm">{JSON.stringify(profile).length}</span>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleCopyToClipboard}
              className="flex-1 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              Copy to Clipboard
            </button>
            <button
              onClick={() => handleDownload('json')}
              className="flex-1 px-4 py-2 bg-green-600 rounded hover:bg-green-700"
            >
              Download JSON
            </button>
            <button
              onClick={() => handleDownload('txt')}
              className="flex-1 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700"
            >
              Download TXT
            </button>
          </div>
        </div>

        <div className="text-center text-green-400">
          <p className="text-lg">✅ Your mindfile is ready!</p>
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
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Start Over
        </button>
      </div>
    </div>
  );
};

export default PreviewStep; 