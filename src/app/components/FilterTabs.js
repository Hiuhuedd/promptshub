export default function FilterTabs({ filters, activeFilter, onFilterChange }) {
  return (
    <div className="filter-tabs">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}