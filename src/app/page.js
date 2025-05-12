"use client";
import { useState, useEffect, useRef } from "react";
import { Search, Sun, Moon } from "lucide-react";
import FilterTabs from "./components/FilterTabs";
import ContentCard from "./components/ContentCard";
import { prompts } from "../lib/prompts";
import { SignUp, useUser } from "@clerk/nextjs";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const CATEGORIES = [
  "All",
  "Software & Web Development",
  "Sales",
  "Marketing & Sales Automation",
  "Design",
  "Chatbots",
  "Data Science & Machine Learning",
  "Research & Analysis",
  "AI & Automation",
  "Online Businesses & Startups",
  "Finance & Analytics",
  "E-commerce",
  "HR & Hiring",
  "Course Creation",
  "Personal Brands",
];

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [theme, setTheme] = useState("dark");
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(!isSignedIn);
  const bottomSheetRef = useRef(null);

  // Store user details in Firestore
  useEffect(() => {
    const syncWithFirestore = async () => {
      if (isLoaded && isSignedIn && user) {
        try {
          const userDocRef = doc(db, "users", user.id);
          await setDoc(
            userDocRef,
            {
              userId: user.id,
              email: user.primaryEmailAddress?.emailAddress || null,
              firstName: user.firstName || null,
              lastName: user.lastName || null,
              fullName: user.fullName || null,
              imageUrl: user.imageUrl || null,
              phoneNumber: user.phoneNumbers?.[0]?.phoneNumber || null,
              createdAt: user.createdAt ? new Date(user.createdAt) : null,
              updatedAt: user.updatedAt ? new Date(user.updatedAt) : null,
              externalAccounts: user.externalAccounts?.map((account) => ({
                provider: account.provider,
                email: account.emailAddress,
                approvedScopes: account.approvedScopes,
              })) || [],
              lastSignInAt: user.lastSignInAt ? new Date(user.lastSignInAt) : null,
            },
            { merge: true }
          );
          console.log("User synced with Firestore:", user.id);
        } catch (error) {
          console.error("Error syncing with Firestore:", error);
        }
      }
    };

    syncWithFirestore();
  }, [isSignedIn, isLoaded, user]);

  // Update localStorage and bottom sheet state
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("isAuthenticated", JSON.stringify(!!isSignedIn));
      } catch (e) {
        console.warn("localStorage is unavailable");
      }
      setIsBottomSheetOpen(!isSignedIn);
    }
  }, [isSignedIn, isLoaded]);

  // Handle click/tap outside to close bottom sheet
  const handleClickOutside = (event) => {
    if (bottomSheetRef.current && !bottomSheetRef.current.contains(event.target)) {
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

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    console.log("Toggled theme to:", newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch (e) {
      console.warn("localStorage is unavailable");
    }
  };

  useEffect(() => {
    let savedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    try {
      savedTheme = localStorage.getItem("theme") || savedTheme;
    } catch (e) {
      console.warn("localStorage is unavailable, using default theme");
    }
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    console.log("Initial theme set to:", savedTheme);
  }, []);

  const filteredPrompts = prompts.filter((prompt) => {
    const matchesKeyword =
      prompt.name.toLowerCase().includes(query.toLowerCase()) ||
      prompt.prompt.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = activeFilter === "All" || prompt.category === activeFilter;
    return matchesKeyword && matchesCategory;
  });

  // Wait for Clerk to load auth state
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          PromptHub
        </a>
        <button
          onClick={() => {
            console.log("Theme toggle clicked");
            toggleTheme();
          }}
          className="theme-toggle"
          aria-label="Toggle theme"
          title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
          {theme === "light" ? <Moon className="theme-icon" /> : <Sun className="theme-icon" />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-headline">Discover premium AI prompts designed for results</h1>
          <p className="hero-subheadline">Search expert-crafted prompts across 100+ categories</p>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <form
            className="search-form"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Search submitted:", query);
            }}
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search prompts (e.g., 'lead generation')"
              className="search-input"
            />
            <button type="submit" className="search-button">
              <Search className="search-icon" />
              Search
            </button>
          </form>
          <FilterTabs filters={CATEGORIES} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>
      </section>

      {/* Content Grid */}
      <main className="main">
        <div className="container">
          {query && !filteredPrompts.length ? (
            <div className="no-results">
              No prompts found matching "{query}"
            </div>
          ) : (
            <div className="content-grid">
              {filteredPrompts.map((prompt) => (
                <ContentCard key={prompt.id} item={prompt} />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Bottom Sheet with Clerk Sign-Up (only for unauthenticated users) */}
      {!isSignedIn && isBottomSheetOpen && (
        <div
          ref={bottomSheetRef}
          className={`bottom-sheet ${isBottomSheetOpen ? "open" : ""}`}
          role="dialog"
          aria-hidden={!isBottomSheetOpen}
        >
          <div className="bottom-sheet-handle"></div>
          <div className="bottom-sheet-content">
            <button
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "transparent",
                border: "none",
                color: "var(--text-color)",
                cursor: "pointer",
                fontSize: "1.25rem",
              }}
              onClick={() => setIsBottomSheetOpen(false)}
              aria-label="Close bottom sheet"
            >
              ✕
            </button>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem", textAlign: "center" }}>
              Sign Up to PromptHub
            </h2>
            <div className="clerk-container">
              <SignUp
                routing="hash"
                signInUrl="/sign-in"
                afterSignUpUrl="/"
                appearance={{
                  elements: {
                    rootBox: "clerk-container",
                    card: "clerk-container",
                    socialButtonsBlockButton: "clerk-container button",
                    formFieldInput: "clerk-container input",
                    headerTitle: { fontSize: "1.5rem", fontWeight: 600 },
                    headerSubtitle: { color: "var(--light-text)" },
                    footerActionLink: { color: "var(--primary-color)" },
                  },
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}