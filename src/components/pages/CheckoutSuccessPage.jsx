import ContinueShoppingButton from "../common/ContinueShoppingButton";
import FirstHeading from "../common/FirstHeading";
import SecondHeading from "../common/SecondHeading";

function CheckoutSuccessPage() {
  return (
    <section className="flex flex-col items-center p-4">
      <FirstHeading additionalClass="text-center block mb-12">Thank you for your order!</FirstHeading>
      <SecondHeading>Checkout was successful.</SecondHeading>
      <p className="mt-1 mb-20">You will receive an email confirmation shortly.</p>
      <ContinueShoppingButton />
    </section>
  );
}

export default CheckoutSuccessPage;
