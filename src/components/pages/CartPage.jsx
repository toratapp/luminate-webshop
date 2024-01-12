import CheckoutButton from '../cart/CheckoutButton';
import { useProducts } from '../cart/useCartStore';
import FirstHeading from '../common/FirstHeading';
import ContinueShoppingButton from '../common/ContinueShoppingButton';
import CartItem from '../cart/CartItem';

export default function CartPage() {
  const productsInCartFromStore = useProducts();
  
  if (!productsInCartFromStore || productsInCartFromStore.length === 0) {
    return (
      <section className="cart__main p-4">
        <FirstHeading additionalClass="text-center block">Your cart</FirstHeading>
        <p>There are no products in your cart.</p>
        <ContinueShoppingButton />
      </section>
    );
  }

  return (
    <section className="cart__main p-4">
      <FirstHeading additionalClass="text-center block">Your cart</FirstHeading>
      <div className="max-w-md mx-auto mt-16">
        {productsInCartFromStore.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <div className="w-24 block mx-auto"><CheckoutButton /></div>
    </section>
  );
}
