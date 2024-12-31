import { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutPreview from '../components/AboutPreview';

function Home({ onNavigate }) {
  useEffect(() => {
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

  return (
    <div className="space-y-12">
      <div className="animate-on-scroll">
        <Hero onNavigate={onNavigate} />
      </div>
      <div className="animate-on-scroll">
        <FeaturedProducts />
      </div>
      <div className="animate-on-scroll">
        <AboutPreview onNavigate={onNavigate} />
      </div>
    </div>
  );
}

export default Home;