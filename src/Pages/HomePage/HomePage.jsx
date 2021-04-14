import React from "react";
import { CategoryFilter } from "../../Shared-components/CategoryFilter/CategoryFilter";
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
      <LayoutContainer>
        <CategoryFilter />
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default HomePage;
