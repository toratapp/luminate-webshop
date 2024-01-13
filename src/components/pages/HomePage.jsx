import FirstHeading from "../common/FirstHeading";
import SecondHeading from "../common/SecondHeading";
import SearchInput from "../HomePageContent/SearchInput";
import { useGetProducts } from "../hooks/useGetProducts";
import ProductList from "../products/ProductList";
import { url } from "../constants/api";
import { Loading } from "react-daisyui";

function HomePage() {
  const { products, isLoading, isError } = useGetProducts(url);

  if (isLoading) {
    return <Loading className="max-w-screen-2xl mx-auto p-4" />;
  }

  if (isError) {
    return <p className="max-w-screen-2xl mx-auto p-4">Error loading products.</p>;
  }

  return  <section className="max-w-screen-2xl mx-auto p-4">
            <FirstHeading additionalClass="text-center block">Welcome to our webshop!</FirstHeading>
            <div className="flex flex-col md:flex-row md:gap-5 md:items-center pt-4">
              <SecondHeading>All products</SecondHeading>
              <SearchInput products={products}/>
            </div>
            <ProductList  products={products} />
          </section>;
}

export default HomePage;
