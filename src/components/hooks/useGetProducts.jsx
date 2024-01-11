import { useState, useEffect } from "react";

export const useGetProducts = (url) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(null);

	useEffect(() => {
		async function getProducts() {
			try {
        setIsError(false);
        setIsLoading(true);
				const response = await fetch(url);

				if (response.ok) {
          const products = await response.json();
          return setProducts(products);
				}

				throw new Error("Error loading products");
			} catch (error) {
				console.log(error);
				setIsError(error.message);
			} finally {
				setIsLoading(false);
			}
		}

		getProducts();
	}, [url]);

	return { products, isLoading, isError };
};
