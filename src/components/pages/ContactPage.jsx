import { Input, Textarea } from "react-daisyui";
import FirstHeading from "../common/FirstHeading";

function ContactPage() {
  return (
    <section className="contact__main">
      <FirstHeading additionalClass="text-center block">Contact us</FirstHeading>
      <div className="flex justify-center">
        <form className="p-8 w-full">
          <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <div className="form-control w-full max-w-xs items-center">
              <label className="label">
                <span className="label-text">Full name</span>
              </label>
              <Input as="input" type="text" />
              <label className="error-message label">
                <span className="label-text-alt">Error message</span>
              </label>
            </div>
          </div>
          <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <div className="form-control w-full max-w-xs items-center">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <Input as="input" type="text" />
              <label className="error-message label">
                <span className="label-text-alt">Error message</span>
              </label>
            </div>
          </div>
          <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <div className="form-control w-full max-w-xs items-center">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <Input as="input" type="email" />
              <label className="error-message label">
                <span className="label-text-alt">Error message</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <label className="label">
              <span className="label-text">Your message</span>
            </label>
            <Textarea />
            <label className="error-message label">
              <span className="label-text-alt">Error message</span>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
