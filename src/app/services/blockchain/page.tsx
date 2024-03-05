import AboutSectionOne from "@/components/Services/Blockchain/AboutSectionOne";
import AboutSectionTwo from "@/components/Services/Blockchain/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blockchain | CodeMonster",
  description: "This is Blockchain Development Page",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="A Product Development firm that brings together some of the best app developers and designers worldwide."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
