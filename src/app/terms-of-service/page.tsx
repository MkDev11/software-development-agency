import AboutSectionOne from "@/components/Terms/TermsOfService";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | CodeMonster",
  description: "This is Terms of Service Page",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="TERMS OF SERVICE"
        description="A Product Development firm that brings together some of the best app developers and designers worldwide."
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
