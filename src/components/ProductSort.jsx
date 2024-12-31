function ProductSort({ sortBy, onSortChange }) {
  return (
    <div className="mb-8">
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="p-2 border rounded-lg focus:ring-primary focus:border-primary"
      >
        <option value="name">Name (A-Z)</option>
        <option value="price-low">Price (Low to High)</option>
        <option value="price-high">Price (High to Low)</option>
      </select>
    </div>
  );
}

export default ProductSort;