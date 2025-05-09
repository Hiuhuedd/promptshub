import { useState } from 'react';
import { X, Copy, Share2 } from 'lucide-react';

export default function ContentCard({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(item.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Prompt Card */}
      <div
        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {item.image && (
          <div className="h-40 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.category}</p>
          {item.description && (
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{item.description}</p>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 dark:bg-black/60 flex items-center justify-center p-4 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {item.image && (
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg" />
              )}
              <div className="text-sm text-gray-500 dark:text-gray-400">{item.category}</div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="mb-2 text-gray-500 dark:text-gray-400">Prompt:</div>
                <pre className="whitespace-pre-wrap break-words">{item.prompt}</pre>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={copyToClipboard}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${
                    copied ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
                  } transition-colors`}
                >
                  {copied ? 'Copied!' : 'Copy Prompt'}
                  <Copy className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-center px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}