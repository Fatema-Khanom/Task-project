
import { useEffect, useState } from 'react';

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_PRODUCTS_URL);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  if (!products.length) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-bold mb-4">{product.name}</h2>
              <div className="space-y-2">
                {product.data &&
                  Object.entries(product.data).map(([key, value]) => (
                    <p key={key} className="flex  text-sm gap-2">
                      <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                    </p>
                  ))}
                {product.price && (
                  <p className="flex items-center text-sm gap-2">
                    <strong>Price:</strong> ${product.price}
                  </p>
                )}
                {product.description && (
                  <p className="flex items-center text-sm gap-2">
                    <strong>Description:</strong> {product.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;