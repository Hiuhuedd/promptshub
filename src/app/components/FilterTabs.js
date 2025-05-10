export default function FilterTabs({ filters, activeFilter, onFilterChange }) {
  return (
    <div className="filter-tabs">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`filter-tab ${filter === activeFilter ? 'active' : ''}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
