import { useNavigate } from 'react-router-dom';
import { Button } from 'react-daisyui';
import { useCartActions } from './useCartStore';

export default function CheckoutButton() {
  const navigate = useNavigate();
  const { clearCart } = useCartActions();

  const handleCheckout = () => {
    clearCart();
    navigate('/checkout-success');
  };

  return <Button color="primary" onClick={handleCheckout}>Checkout</Button>;
}
