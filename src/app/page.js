'use client';
import { useState, useEffect } from 'react';
import { Search, Sun, Moon } from 'lucide-react';
import FilterTabs from './components/FilterTabs';
import ContentCard from './components/ContentCard';
import { prompts } from '../lib/prompts';

export const CATEGORIES = [
  'All',
  'Software & Web Development',
  'Sales',
  'Marketing & Sales Automation',
  'Design','Chatbots','Images','Videos','Ads',
  
  'Data Science & Machine Learning',
  'Research & Analysis',
  'AI & Automation',
  'Online Businesses & Startups',
  'Finance & Analytics',
  'E-commerce',
  'HR & Hiring',
  'Course Creation',
  'Personal Brands',
];

export default function Home() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    console.log('Toggled theme to:', newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (e) {
      console.warn('localStorage is unavailable');
    }
  };

  useEffect(() => {
    let savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    try {
      savedTheme = localStorage.getItem('theme') || savedTheme;
    } catch (e) {
      console.warn('localStorage is unavailable, using default theme');
    }
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    console.log('Initial theme set to:', savedTheme);
  }, []);

  const filteredPrompts = prompts.filter((prompt) => {
    const matchesKeyword =
      prompt.name.toLowerCase().includes(query.toLowerCase()) ||
      prompt.prompt.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = activeFilter === 'All' || prompt.category === activeFilter;
    return matchesKeyword && matchesCategory;
  });

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          PromptHub
        </a>
        <button
          onClick={() => {
            console.log('Theme toggle clicked');
            toggleTheme();
          }}
          className="theme-toggle"
          aria-label="Toggle theme"
          title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? <Moon className="theme-icon" /> : <Sun className="theme-icon" />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-headline">Discover High-Value AI Prompts</h1>
          <p className="hero-subheadline">Search expert-crafted prompts across 100+ categories</p>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <form className="search-form">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search prompts (e.g., 'lead generation')"
              className="search-input"
            />
            <span type="" className="search-button">
              <Search className="search-icon" />
              Search
            </span>
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
    </div>
  );
}
