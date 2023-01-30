import React from "react";
import { Form } from "../Components/Form";

import { Footer as FooterComponent } from "../Components/Footer";

export const Footer = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
    // logic to handle form submission
  };
  return (
    <FooterComponent>
      {/* {tmpCard} */}
      {/* mailto:johndoe@email.com tel:555-555-5555 */}
      <Form
        id="contact"
        onSubmit={handleSubmit}
        title="Let's Connect"
        // description="I would love to hear from you! Whether you have a question, a project idea, or just want to say hi, please fill out the form below and I'll get back to you as soon as possible."
      >
        <input name="email" type="email" placeholder="Youremail@example.com" />
        <input name="subject" type="subject" placeholder="Subject..." />
        <textarea name="message" placeholder="Your message..." />
      </Form>
      {/* {tmpCard} */}
    </FooterComponent>
  );
};
