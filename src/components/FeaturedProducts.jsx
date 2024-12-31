import ProductCard from './ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Traditional Nepali Tea',
    description: 'Authentic Himalayan black tea blend',
    price: 299,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574'
  },
  {
    id: 2,
    name: 'Handwoven Pashmina Shawl',
    description: 'Premium quality pashmina wool shawl',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26'
  }
];

function FeaturedProducts() {
  return (
    <div id="featured-products" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;