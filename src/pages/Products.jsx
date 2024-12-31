import { useState, useMemo, useEffect } from 'react';
import { products } from '../data/products';
import ProductFilter from '../components/ProductFilter';
import ProductSort from '../components/ProductSort';
import ProductGrid from '../components/ProductGrid';

function Products({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    // Add animation classes after component mounts
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const categories = useMemo(() => 
    [...new Set(products.map((p) => p.category))],
    []
  );

  const filteredAndSortedProducts = useMemo(() => {
    let result = selectedCategory
      ? products.filter((p) => p.category === selectedCategory)
      : products;

    return result.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [selectedCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 animate-on-scroll">Our Products</h1>
      
      <div className="flex justify-between items-center mb-8 animate-on-scroll">
        <ProductFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <ProductSort
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>

      <div className="animate-on-scroll">
        <ProductGrid 
          products={filteredAndSortedProducts}
          onAddToCart={onAddToCart}
        />
      </div>
    </div>
  );
}

export default Products;
