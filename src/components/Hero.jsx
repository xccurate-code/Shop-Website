function Hero({ onNavigate }) {
  return (
    <div className="relative bg-gray-900 h-[500px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa"
          alt="Kathmandu Valley"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Discover Nepal's Finest
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-xl">
          Authentic Nepali crafts, textiles, and traditional items directly from 
          the heart of the Himalayas.
        </p>
        <button
          onClick={() => onNavigate('products')}
          className="inline-block bg-primary text-white px-4 py-2 rounded-lg transition-all duration-300 
              hover:bg-opacity-90 hover:shadow-md transform hover:-translate-y-0.5
               items-center gap-2"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Hero;