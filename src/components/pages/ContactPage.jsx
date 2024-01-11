import { useState } from 'react';
import { Button, Input, Textarea } from "react-daisyui";
import FirstHeading from "../common/FirstHeading";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMessage from "../common/errorMessage";
import SuccessMessage from "../common/SuccessMessage";

const schema = yup
  .object({
    fullName: yup.string().min(3, "This is a required field, at least 3 characters.").required("This is a required field, at least 3 characters."),
    subject: yup.string().min(3, "This is a required field, at least 3 characters.").max(60, "Please keep your subject below 60 characters.").required("This is a required field, at least 3 characters."),
    email: yup.string().email("Please provide a valid email address.").required("Please provide a valid email address."),
    contactMessage: yup.string().min(3, "This is a required field, minimum 3, maximum 500 characters.").max(500, "This is a required field, minimum 3, maximum 500 characters.").required("This is a required field, minimum 3, maximum 500 characters."),
  })
  .required();

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  function onSubmit(data) {
    console.log(data);
    setIsSubmitted(true);
    reset();
  }

  return (
    <section className="contact__main">
      <FirstHeading additionalClass="text-center block">Contact us</FirstHeading>
      <div className="flex justify-center">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <div className="form-control w-full max-w-xs items-center">
              <label className="label">
                <span className="label-text">Full name:</span>
              </label>
              <Input as="input" type="text" {...register("fullName")} />
              {errors.fullName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}
            </div>
          </div>
          <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <div className="form-control w-full max-w-xs items-center">
              <label className="label">
                <span className="label-text">Subject:</span>
              </label>
              <Input as="input" type="text" {...register("subject")} />
              {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage>}
            </div>
          </div>
          <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <div className="form-control w-full max-w-xs items-center">
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <Input as="input" type="email" {...register("email")} />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </div>
          </div>
          <div className="flex flex-col w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <label className="label">
              <span className="label-text">Your message:</span>
            </label>
            <Textarea {...register("contactMessage")} />
            {errors.contactMessage && <ErrorMessage>{errors.contactMessage.message}</ErrorMessage>}
          </div>
          {isSubmitted && <div className="flex flex-col w-full component-preview items-center justify-center mt-4">
            <SuccessMessage>Thank you for your message</SuccessMessage>
          </div>}
          <div className="flex flex-col w-full component-preview items-center justify-center mt-7">
            <Button type="submit" color="primary">Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
