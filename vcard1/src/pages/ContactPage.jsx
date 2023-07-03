import React from "react";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <div className="h-screen px-6 bg-[url('robot.png')] bg-contain bg-no-repeat bg-left">
      <h2 className="h2-gray text-center mt-8">Contact Us</h2>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
