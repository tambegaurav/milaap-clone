import React from "react";
import { CategoryFilter } from "../../Shared-components/CategoryFilter/CategoryFilter";
import Footer from "../../Shared-components/Footer/Footer";
import { Navbar } from "../../Shared-components/Navbar";
import { CarouselCard } from "../../Styled-components/CarouselCard";
import LayoutContainer from "../../Styled-components/LayoutContainer";
import { HomeBanner } from "./HomeBanner";
import { MilaapFAQ } from "./MilaapFAQ";
import Carousel from 'react-elastic-carousel';
import data from "../../DB/review.json"


const HomePage = () => {
  console.log(data.one)
  return (
    <>
      <Navbar />
      <LayoutContainer>
        <HomeBanner />
      </LayoutContainer>
      <LayoutContainer>
        <CategoryFilter />
      </LayoutContainer>

      <LayoutContainer>
        <Carousel>
        <CarouselCard img={data.one.img}
        name={data.one.name}
        review={data.one.description}
        />
        <CarouselCard img={data.two.img}
        name={data.two.name}
        review={data.two.description}
        />
        <CarouselCard img={data.three.img}
        name={data.three.name}
        review={data.three.description}
        />
        </Carousel>
      </LayoutContainer>
      <LayoutContainer>
        <MilaapFAQ />
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default HomePage;
