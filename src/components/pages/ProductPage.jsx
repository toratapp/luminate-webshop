import { useParams } from "react-router-dom";
import { url } from "../constants/api";
import { useEffect, useState } from "react";
import ProductInfo from "../products/ProductInfo";

function ProductPage() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getProduct(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setProduct(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getProduct(`${url}${id}`);
  }, [id]);

  if (isLoading || !product) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return <p>Error loading products</p>;
  }

  return (
    <section className="max-w-screen-2xl mx-auto p-4 mb-20">
      <ProductInfo product={product} />
    </section>
  );
}

export default ProductPage;
