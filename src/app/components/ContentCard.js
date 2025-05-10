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
      <div className="card" onClick={() => setIsModalOpen(true)}>
        {item.image && (
          <div className="card-image">
            <img src={item.image} alt={item.name} />
          </div>
        )}
        <div className="card-content">
          <h3 className="card-title">{item.name}</h3>
          <p className="card-category">{item.category}</p>
          {item.description && <p className="card-description">{item.description}</p>}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{item.name}</h3>
              <button onClick={() => setIsModalOpen(false)} aria-label="Close modal">
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              {item.image && <img src={item.image} alt={item.name} className="modal-image" />}
              <div className="modal-category">{item.category}</div>
              <div className="modal-prompt">
                <div className="prompt-label">Prompt:</div>
                <pre>{item.prompt}</pre>
              </div>
              <div className="modal-actions">
                <button className={`copy-button ${copied ? 'copied' : ''}`} onClick={copyToClipboard}>
                  {copied ? 'Copied!' : 'Copy Prompt'} <Copy size={16} />
                </button>
                <button className="share-button">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
            }
