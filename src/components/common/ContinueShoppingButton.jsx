import { Button } from "react-daisyui";
import { useNavigate } from "react-router-dom";

function ContinueShoppingButton() {
  const navigate = useNavigate();
  const continueShopping = () => navigate('/');

  return <Button color="primary" onClick={continueShopping}>Continue shopping</Button>;
}

export default ContinueShoppingButton;
