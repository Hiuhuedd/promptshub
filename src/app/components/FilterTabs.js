export default function FilterTabs({ filters, activeFilter, onFilterChange }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4 py-4 mt-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-2 border rounded-full text-sm font-medium cursor-pointer transition-all duration-200 whitespace-nowrap
            ${
              filter === activeFilter
                ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                : 'bg-gray-100 dark:bg-gray-700 border-gray-300 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105 hover:shadow-md'
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
