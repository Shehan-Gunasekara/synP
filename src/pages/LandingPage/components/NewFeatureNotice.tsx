import { X } from 'lucide-react';

interface NewFeatureNoticeProps {
  onClose: () => void;
  onTryIt: () => void;
  onLearnMore: () => void;
}

export function NewFeatureNotice({ onClose, onTryIt, onLearnMore }: NewFeatureNoticeProps) {
  return (
    <div className="fixed top-20 right-4 z-50 w-80 bg-white rounded-lg shadow-lg border border-indigo-100 p-4">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50">
            <span className="text-indigo-600 text-lg">✨</span>
          </span>
          <h3 className="ml-3 text-lg font-semibold text-gray-900">New Feature Added</h3>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-500"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-600">
        Create Consistent Characters with our new AI-powered feature!
      </p>
      <div className="mt-4 flex space-x-3">
        <button
          onClick={onTryIt}
          className="flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Try it
        </button>
        <button
          onClick={onLearnMore}
          className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-100 hover:bg-indigo-50"
        >
          Learn More
        </button>
      </div>
    </div>
  );
} 