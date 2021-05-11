/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCards } from "../../Redux/categoryApi/actions";
import { DonationCardCompo } from "../../Shared-components/DonationCard/DonationCardCompo";
import { DonationCardDetails } from "../../Shared-components/DonationCard/DonationCardDetails";
import Footer from "../../Shared-components/Footer/Footer";
import { Navbar } from "../../Shared-components/Navbar";
import LayoutContainer from "../../Styled-components/LayoutContainer";
import { RefineSearchBtn } from "./RefineSearchBtn";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import ScrollToTopButton from "../../Shared-components/ScrollToTopButton/ScrollToTopButton";
import StyledButton from "../../Styled-components/Button";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Loader from "../../Styled-components/Loader";
import { useHistory } from "react-router-dom";

export function Donate() {
  const [filters, setFilters] = useState("all");
  const [value, setValue] = useState("all");
  const [sort, setSort] = useState("asc");
  const [order, setOrder] = useState("asc");

  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { cards, isLoading, isError } = useSelector(
    (state) => state.cards,
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCards(filters,""));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);
  if (order === "desc") {
    cards.sort((a, b) => {
      return b.target - a.target;
    });
  }

  if (order === "asc") {
    cards.sort((a, b) => {
      return a.target - b.target;
    });
  }

  return (
    <div>
      <Navbar />
      <LayoutContainer>
        <ScrollToTopButton showBelow={250} />
        <RefineSearchBtn ref={btnRef} onClick={onOpen} text="Refine Search" />

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Refine your Search</DrawerHeader>

              <DrawerBody>
                <div>Filter by Category</div>
                <hr />
                <br />
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction="column">
                    <Radio value="all">All</Radio>
                    <Radio value="animals">Animals</Radio>
                    <Radio value="memorial">Memorials</Radio>
                    <Radio value="education">Education</Radio>
                    <Radio value="medical">Medical</Radio>
                  </Stack>
                </RadioGroup>
                <br /> <br />
                <div>Sort</div>
                <hr />
                <br />
                {/* <input type="radio" name="sort" value="sort" onChange={()=>setSort("none")} checked/>
          <label>None</label><br/> */}
                <input
                  type="radio"
                  name="sort"
                  value={sort}
                  onChange={() => setSort("asc")}
                />
                <label>Low to high</label>
                <br />
                <br />
                <input
                  type="radio"
                  name="sort"
                  value={sort}
                  onChange={() => setSort("desc")}
                />
                <label>High to low</label>
              </DrawerBody>

              <DrawerFooter
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <StyledButton
                  text="Cancel"
                  style={{
                    color: "#9c3353",
                  }}
                  onClick={onClose}
                />

                <StyledButton
                  onClick={() => {
                    setFilters(value);
                    setOrder(sort);
                    onClose();
                  }}
                  style={{
                    backgroundColor: "#9c3353",
                  }}
                  text="Submit"
                />
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </LayoutContainer>

      <LayoutContainer>
        <DonationCardCompo>
          {isLoading ? (
            <Loader />
          ) : (
            cards.map((item) => (
              <DonationCardDetails
                onClick={() => history.push(`/fundraisers/${item.id}`)}
                id={item.id}
                label={item.title}
                imageUrl={item.image}
                amount={item.target}
                creater={item.createdBy}
                percentage={(
                  (item.supporters.reduce((ac, v) => {
                    return ac + v.amount;
                  }, 0) /
                    item.target) *
                  100
                ).toFixed(1)}
              ></DonationCardDetails>
            ))
          )}
        </DonationCardCompo>
      </LayoutContainer>

      <Footer />
    </div>
  );
}
