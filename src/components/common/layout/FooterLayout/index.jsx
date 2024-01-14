import { Footer } from "react-daisyui";

function FooterLayout() {
  return (
    <Footer className="p-10 bg-slate-900 text-neutral-content max-w-full w-auto overflow-hidden">
      <div>
        <Footer.Title>Luminate</Footer.Title>
        <p>Our history</p>
        <p>Sustainability</p>
        <p>Our staff</p>
        <p>Size guide</p>
      </div>
      <div>
        <Footer.Title>Help</Footer.Title>
        <p>FAQ</p>
        <p>Contact</p>
        <p>Delivery</p>
        <p>Returns</p>
      </div>
      <div>
        <Footer.Title>Legal</Footer.Title>
        <p>Terms of use</p>
        <p>Privacy policy</p>
        <p>Cookie policy</p>
      </div>
    </Footer>
  );
}

export default FooterLayout;
