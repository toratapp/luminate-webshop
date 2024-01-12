import CheckoutButton from '../cart/CheckoutButton';
import { useProducts } from '../cart/useCartStore';
import FirstHeading from '../common/FirstHeading';
import ContinueShoppingButton from '../common/ContinueShoppingButton';

export default function CartPage() {
  const productsInCartFromStore = useProducts();
  
  if (!productsInCartFromStore || productsInCartFromStore.length === 0) {
    return (
      <section>
        <FirstHeading>Your cart</FirstHeading>
        <p>There are no products in your cart.</p>
        <ContinueShoppingButton />
      </section>
    );
  }

  return (
    <section>
      <FirstHeading>Your cart</FirstHeading>
      <ul>
        {productsInCartFromStore.map((product, index) => (
          <li key={index}>{product.title}</li>
        ))}
      </ul>
      <CheckoutButton />
    </section>
  );
}
