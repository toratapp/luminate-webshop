import FirstHeading from "../common/FirstHeading";
import SecondHeading from "../common/SecondHeading";
import SearchInput from "../HomePageContent/SearchInput";
import ProductList from "../products/ProductList";

function HomePage() {
  return  <section className="max-w-screen-2xl mx-auto p-4">
            <FirstHeading additionalClass="text-center block">Welcome to our webshop!</FirstHeading>
            <div className="flex gap-5 items-center">
              <SecondHeading>All products</SecondHeading>
              <SearchInput />
            </div>
            <ProductList />
          </section>;
}

export default HomePage;
