import { useState } from 'react';
import { Settings, RefreshCw } from 'lucide-react';

export function PromptInput() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="prompt"
          className="block text-sm font-medium text-gray-700"
        >
          Describe your visual idea
        </label>
        <textarea
          id="prompt"
          rows={4}
          className="w-full rounded-lg border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500 resize-none"
          placeholder="A stylish woman walks down a Tokyo street filled with neon signs..."
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
        >
          <Settings className="h-4 w-4" />
          <span>Advanced Settings</span>
        </button>

        <div className="flex space-x-4">
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:border-purple-600 hover:text-purple-600 transition-colors flex items-center space-x-2">
            <RefreshCw className="h-4 w-4" />
            <span>Reset</span>
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Generate
          </button>
        </div>
      </div>

      {showSettings && <AdvancedSettings />}
    </div>
  );
}

function AdvancedSettings() {
  return (
    <div className="bg-gray-50 rounded-lg p-4 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Seed
          </label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            placeholder="Random"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Aspect Ratio
          </label>
          <select className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500">
            <option>16:9</option>
            <option>4:3</option>
            <option>1:1</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="proMode"
            className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
          />
          <label htmlFor="proMode" className="ml-2 text-sm text-gray-700">
            Pro Mode
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Resolution
          </label>
          <select className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500">
            <option>720p</option>
            <option>1080p</option>
            <option>4K</option>
          </select>
        </div>
      </div>
    </div>
  );
}
