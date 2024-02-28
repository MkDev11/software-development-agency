import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | CodeMonster",
  description: "This is Contact Page for CodeMonster",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Our Support team is just a message away."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
