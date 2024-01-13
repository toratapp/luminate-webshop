import { Footer } from "react-daisyui";

function FooterLayout() {
  return (
    <Footer className="p-10 bg-neutral text-neutral-content mt-10">
      <div>
        <Footer.Title>About us</Footer.Title>
        <p>Branding</p>
        <p>Design</p>
        <p>Marketing</p>
        <p>Advertisement</p>
      </div>
      <div>
        <Footer.Title>Company</Footer.Title>
        <p>About us</p>
        <p>Contact</p>
        <p>Jobs</p>
        <p>Press kit</p>
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
