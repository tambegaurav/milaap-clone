import { Heading } from "@chakra-ui/layout";
import React from "react";
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
      <Footer />
    </>
  );
};

export default HomePage;
