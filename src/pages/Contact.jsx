import React, { useEffect } from "react";
import ContactUs from "../features/contact-us/ContactUs";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <div>
      <ContactUs />
    </div>
  );
};

export default Contact;
