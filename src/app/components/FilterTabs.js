export default function FilterTabs({ filters, activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            filter === activeFilter
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
