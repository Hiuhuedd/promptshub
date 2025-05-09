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
  'Design',
  'AI & Chatbots',
  'Marketing & Sales Automation',
  'Online Businesses & Startups',
  'Finance & Analytics',
  'E-commerce & Online Stores',
  'HR & Hiring',
  'Course Creators & Coaches',
  'Creator & Personal Brands',
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 flex justify-between items-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <a href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          PromptHub
        </a>
        <button
          onClick={() => {
            console.log('Theme toggle clicked');
            toggleTheme();
          }}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
          aria-label="Toggle theme"
          title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 px-4 text-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Discover High-Value AI Prompts</h1>
          <p className="text-lg md:text-xl opacity-90">Search expert-crafted prompts across 10+ categories</p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <form className="flex gap-2 mb-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full p-2 shadow-md">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search prompts (e.g., 'lead generation')"
              className="flex-1 px-4 py-2 rounded-full bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search
            </button>
          </form>
          <FilterTabs filters={CATEGORIES} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>
      </section>

      {/* Content Grid */}
      <main className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {query && !filteredPrompts.length ? (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              No prompts found matching "{query}"
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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