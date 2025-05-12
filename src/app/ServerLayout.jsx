"use client";
import { useState, useEffect, useRef } from "react";
import ServerLayout from "./ServerLayout";

export default function RootLayout({ children }) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const bottomSheetRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Toggle bottom sheet
  const toggleBottomSheet = () => {
    setIsBottomSheetOpen((prev) => !prev);
  };

  // Handle click/tap outside to close bottom sheet
  const handleClickOutside = (event) => {
    if (
      bottomSheetRef.current &&
      !bottomSheetRef.current.contains(event.target) &&
      toggleButtonRef.current &&
      !toggleButtonRef.current.contains(event.target)
    ) {
      setIsBottomSheetOpen(false);
    }
  };

  // Add event listeners for click/tap
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <ServerLayout>
      {children}
      {/* Bottom Sheet Toggle Button */}
      <button
        ref={toggleButtonRef}
        className="bottom-sheet-toggle"
        onClick={toggleBottomSheet}
        aria-label={isBottomSheetOpen ? "Close bottom sheet" : "Open bottom sheet"}
      >
        {isBottomSheetOpen ? "Close Sheet" : "Open Sheet"}
      </button>
      {/* Bottom Sheet */}
      <div
        ref={bottomSheetRef}
        className={`bottom-sheet ${isBottomSheetOpen ? "open" : ""}`}
        role="dialog"
        aria-hidden={!isBottomSheetOpen}
      >
        <div className="bottom-sheet-handle"></div>
        <div className="bottom-sheet-content">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
            Bottom Sheet
          </h2>
          <p>Click or tap outside to close this glassmorphic bottom sheet.</p>
        </div>
      </div>
    </ServerLayout>
  );
}