function AboutPreview({ onNavigate }) {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa"
              alt="Kathmandu craftsman"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Heritage</h2>
            <p className="text-gray-600 mb-6">
              Discover the rich cultural heritage of Nepal through our carefully curated 
              collection of authentic crafts and textiles. Each piece tells a story of 
              centuries-old traditions and skilled craftsmanship.
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="inline-block bg-primary text-white px-4 py-2 rounded-lg transition-all duration-300 
              hover:bg-opacity-90 hover:shadow-md transform hover:-translate-y-0.5
               items-center gap-2"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPreview;