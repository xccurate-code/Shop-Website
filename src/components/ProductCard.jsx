import { FaShoppingCart } from 'react-icons/fa';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-600 mt-1 group-hover:text-gray-800 transition-colors duration-300">
          {product.description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-primary">₹{product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-primary text-white px-4 py-2 rounded-lg transition-all duration-300 
              hover:bg-opacity-90 hover:shadow-md transform hover:-translate-y-0.5
              flex items-center gap-2"
          >
            <FaShoppingCart className="transition-transform duration-300 group-hover:rotate-12" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;