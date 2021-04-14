import { Heading } from "@chakra-ui/layout";
import React from "react";
import Footer from "../../Shared-components/Footer/Footer";
import { Navbar } from "../../Shared-components/Navbar";
import LayoutContainer from "../../Styled-components/LayoutContainer";
import { HomeBanner } from "./HomeBanner";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <LayoutContainer>
        <HomeBanner />
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default HomePage;
