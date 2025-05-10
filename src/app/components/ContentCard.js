'use client';
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

  const formattedDate = new Date(item.dateCreated).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <>
      {/* Prompt Card */}
      <div className="content-card" onClick={() => setIsModalOpen(true)}>
        {item.image ? (
          <div className="card-thumbnail">
            <img src={item.image} alt={item.name} className="thumbnail-image" />
          </div>
        ) : (
          <div className="card-thumbnail card-thumbnail-placeholder">
            <span>No Image</span>
          </div>
        )}
        <div className="card-header">
          <h3 className="card-title">{item.name}</h3>
         
          {item.description && <p className="card-body">{item.description}</p>}
          {item.tags && item.tags.length > 0 && (
            <div className="card-tags">
               <div className="card-meta">
            <span>{item.category}</span>
            {/* <span className="card-meta-divider">•</span>
            <span>{formattedDate}</span> */}
            <span className="card-meta-divider">•</span>
            <span>{item.difficulty}</span>
          </div>
              {item.tags.map((tag, index) => (
                <span key={index} className="card-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{item.name}</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="modal-close"
                aria-label="Close modal"
              >
                <X className="modal-close-icon" />
              </button>
            </div>
            <div className="modal-body">
              {item.image ? (
                <div className="modal-thumbnail">
                  <img src={item.image} alt={item.name} className="modal-thumbnail-image" />
                </div>
              ) : (
                <div className="modal-thumbnail modal-thumbnail-placeholder">
                  <span>No Image</span>
                </div>
              )}
              <div className="modal-meta">
                <span>{item.category}</span>
                <span className="modal-meta-divider">•</span>
                <span>{formattedDate}</span>
                <span className="modal-meta-divider">•</span>
                <span>{item.difficulty}</span>
              </div>
              {item.tags && item.tags.length > 0 && (
                <div className="modal-tags">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="modal-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="modal-content">
                <div className="modal-prompt-label">Prompt:</div>
                <pre className="modal-prompt-text">{item.prompt}</pre>
              </div>
              <div className="modal-footer">
                <button
                  onClick={copyToClipboard}
                  className={`modal-button ${copied ? 'modal-button-copied' : ''}`}
                >
                  {copied ? 'Copied!' : 'Copy Prompt'}
                  <Copy className="modal-button-icon" />
                </button>
                <button className="modal-button modal-button-share">
                  <Share2 className="modal-button-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}