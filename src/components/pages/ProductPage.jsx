import { useParams } from "react-router-dom";
import FirstHeading from "../common/FirstHeading";
import { url } from "../constants/api";
import { useEffect, useState } from "react";
import Review from "../products/Review";

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

  const { imageUrl, title, discountedPrice, price, reviews } = product;

  return (
    <section className="max-w-screen-2xl mx-auto p-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <img src={imageUrl} alt={title} />
        <div>
          <FirstHeading>{title}</FirstHeading>
          <div>
            <p>{discountedPrice}</p>
            <p className="line-through text-gray-800">{price}</p>
          </div>
        </div>
      </div>
      <div className="product__reviews mt-10 mb-56">
        {reviews.length > 0 && (
          <div>
            {reviews.map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductPage;
