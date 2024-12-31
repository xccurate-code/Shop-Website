function ProductFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <div className="space-x-4">
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-2 rounded-lg ${
            !selectedCategory 
              ? 'bg-primary text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;