import ContinueShoppingButton from "../common/ContinueShoppingButton";
import FirstHeading from "../common/FirstHeading";
import SecondHeading from "../common/SecondHeading";

function CheckoutSuccessPage() {
  return (
    <section>
      <FirstHeading>Thank you for your order!</FirstHeading>
      <SecondHeading>Checkout was successful.</SecondHeading>
      <p>You will receive an email confirmation shortly.</p>
      <ContinueShoppingButton />
    </section>
  );
}

export default CheckoutSuccessPage;
