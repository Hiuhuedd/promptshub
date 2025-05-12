'use client';
import { useState } from 'react';
import { X, Copy, Share2 } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { doc, setDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../page'; // Import db from Home.jsx

export default function ContentCard({ item }) {
  const { isSignedIn, user, isLoaded } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  // Debug: Log db and item.category
  console.log('Firestore db:', db);
  console.log('Item category:', item.category);

  const copyToClipboard = async () => {
    try {
      // Validate inputs
      if (!item.category) {
        throw new Error('Prompt category is missing');
      }
      if (!item.name) {
        throw new Error('Prompt name is missing');
      }
      if (!db) {
        throw new Error('Firestore instance is undefined');
      }

      // Copy prompt to clipboard
      await navigator.clipboard.writeText(item.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);

      // Save to Firestore
      if (isLoaded) {
        const email = isSignedIn ? user.primaryEmailAddress?.emailAddress || '' : '';
        const savedDocRef = doc(db, 'saved', item.category);
        await setDoc(
          savedDocRef,
          {
            copies: arrayUnion({
              promptName: item.name,
              email: email,
              timestamp: new Date(),
            }),
          },
          { merge: true }
        );
        console.log(`Saved prompt "${item.name}" to Firestore under category "${item.category}"`);
      }
    } catch (error) {
      console.error('Error copying prompt or saving to Firestore:', error);
      setError(error.message || 'Failed to save prompt');
    }
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
                {error && <div className="modal-error">{error}</div>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}