import { Heading } from "@chakra-ui/layout";
import React from "react";
import { CategoryFilter } from "../../Shared-components/CategoryFilter/CategoryFilter";
import Footer from "../../Shared-components/Footer/Footer";
import { Navbar } from "../../Shared-components/Navbar";
import LayoutContainer from "../../Styled-components/LayoutContainer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <LayoutContainer>
        <Heading>1 Home Page</Heading> <Heading>Home Page</Heading>{" "}
        <Heading>Home Page</Heading> <Heading>Home Page</Heading>{" "}
        <Heading>Home Page</Heading> <Heading>Home Page</Heading>{" "}
        <Heading>Home Page</Heading> <Heading>Home Page</Heading>{" "}
        <Heading>Home Page</Heading> <Heading>Home Page</Heading>{" "}
        <Heading>Home Page</Heading> <Heading>Home Page</Heading>{" "}
        <Heading>Home Page</Heading> <Heading>Home Page</Heading>{" "}
        <Heading>Home Page</Heading> <Heading>Home Page</Heading>{" "}
        <Heading>Home Page</Heading> <Heading>Home Page</Heading>{" "}
        <Heading>Home Page</Heading>
      </LayoutContainer>
      <LayoutContainer>
        <CategoryFilter/>
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default HomePage;
