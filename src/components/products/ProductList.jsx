import { url } from "../constants/api";
import { useEffect, useState } from 'react';
import ProductItem from "./ProductItem";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          return setProducts(json);
        }

        throw new Error("Error loading products");        
      }
      catch(error) {
        setIsError(true);
      }
      finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, []);

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return <p>Error loading products</p>;
  }

  return  (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-56">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
          );
}

export default ProductList;
