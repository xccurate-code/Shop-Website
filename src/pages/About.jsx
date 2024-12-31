import { useEffect } from 'react';
import { FaHeart, FaHistory, FaBullseye, FaAward } from 'react-icons/fa';

function About() {
  useEffect(() => {
    // Add animation classes after component mounts
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center animate-on-scroll">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">About Kathmandu Shop</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Your premier destination for authentic Nepali crafts, textiles, and traditional items.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
          <FaHistory className="text-4xl text-primary mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600">
            Founded by local artisans and cultural enthusiasts, Kathmandu Shop began as a 
            small storefront in Thamel. Today, we've grown into a trusted source for 
            authentic Nepali products while maintaining our commitment to quality and tradition.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
          <FaBullseye className="text-4xl text-primary mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            We strive to preserve and promote Nepali craftsmanship while providing sustainable 
            livelihoods to local artisans. Every product in our collection tells a story of 
            Nepal's rich cultural heritage.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
          <FaAward className="text-4xl text-primary mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quality & Authenticity</h2>
          <p className="text-gray-600">
            Each item in our collection is carefully curated, ensuring the highest quality 
            and authenticity. We work directly with artisans and craftsmen, maintaining 
            traditional techniques while meeting modern quality standards.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
          <FaHeart className="text-4xl text-primary mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <p className="text-gray-600">
            We believe in fair trade, sustainable practices, and preserving traditional 
            craftsmanship. Our commitment to these values ensures that every purchase 
            supports both artisans and cultural preservation.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary bg-opacity-10 py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-on-scroll">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-gray-600">Products</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Artisans</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10k+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;