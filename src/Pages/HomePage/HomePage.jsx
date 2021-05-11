import React from "react";
import { CategoryFilter } from "../../Shared-components/CategoryFilter/CategoryFilter";
import Footer from "../../Shared-components/Footer/Footer";
import { Navbar } from "../../Shared-components/Navbar";
import { CarouselCard } from "../../Styled-components/CarouselCard";
import LayoutContainer from "../../Styled-components/LayoutContainer";
import { HomeBanner } from "./HomeBanner";
import Carousel from "react-elastic-carousel";
import data from "../../DB/review.json";
import { MilaapFAQ } from "./MilaapFAQ";
import { Heading } from "@chakra-ui/layout";
import ScrollToTopButton from "../../Shared-components/ScrollToTopButton/ScrollToTopButton";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <LayoutContainer>
        <ScrollToTopButton showBelow={2000} />
        <HomeBanner />
      </LayoutContainer>
      <LayoutContainer>
        <CategoryFilter />
        <br />
        <Link
          style={{
            color: "#9c3353",
            textDecoration: "underline",
            fontWeight: "500",
            fontSize: "20px",
          }}
          to="/donate"
        >
          See more fundraisers
        </Link>
      </LayoutContainer>
      <LayoutContainer>
        <MilaapFAQ />
      </LayoutContainer>
      <LayoutContainer>
        <Heading>What people are saying about Milaap</Heading>
        <div style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
          <Carousel>
            <CarouselCard
              img={data.one.img}
              name={data.one.name}
              review={data.one.description}
            />
            <CarouselCard
              img={data.two.img}
              name={data.two.name}
              review={data.two.description}
            />
            <CarouselCard
              img={data.three.img}
              name={data.three.name}
              review={data.three.description}
            />
          </Carousel>
        </div>
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default HomePage;
