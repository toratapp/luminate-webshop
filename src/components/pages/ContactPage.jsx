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
    <section className="p-4 flex flex-col max-w-md items-center mx-auto mb-12">
      <FirstHeading>Contact us</FirstHeading>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full p-4 font-sans">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Full name:</span>
            </label>
            <Input as="input" type="text" {...register("fullName")} />
            {errors.fullName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}
          </div>
        </div>
        <div className="w-full p-4 font-sans">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Subject:</span>
            </label>
            <Input as="input" type="text" {...register("subject")} />
            {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage>}
          </div>
        </div>
        <div className="w-full p-4 font-sans">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <Input as="input" type="email" {...register("email")} />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </div>
        </div>
        <div className="w-full p-4 font-sans">
          <label className="label">
            <span className="label-text">Your message:</span>
          </label>
          <Textarea className="w-full" {...register("contactMessage")} />
          {errors.contactMessage && <ErrorMessage>{errors.contactMessage.message}</ErrorMessage>}
        </div>
        {isSubmitted && <div className="mt-4">
          <SuccessMessage>Thank you for your message</SuccessMessage>
        </div>}
        <div className="w-80 mt-7 flex flex-col items-center">
          <Button type="submit" color="primary">Submit</Button>
        </div>
      </form>
    </section>
  );
}

export default ContactPage;
