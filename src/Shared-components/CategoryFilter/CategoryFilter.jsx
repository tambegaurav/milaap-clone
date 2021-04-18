import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCards } from "../../Redux/categoryApi/actions";
import { CategoryCard } from "../../Styled-components/CategoryCard";
import Loader from "../../Styled-components/Loader";
import { DonationCardCompo } from "../DonationCard/DonationCardCompo";
import { DonationCardDetails } from "../DonationCard/DonationCardDetails";

export function CategoryFilter() {
  const [filters, setFilters] = useState("all");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { cards, isLoading, isError } = useSelector(
    (state) => state.cards,
    shallowEqual
  );

  useEffect(() => {
    dispatch(getCards(filters, ""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  // console.log(cards)
  const history = useHistory();

  const handleButton = (str) => {
    setFilters(str);
  };
  // eslint-disable-next-line array-callback-return
  const handleSearch = () => {
    dispatch(getCards("", search));
  };
  return (
    <div>
      <Input
        style={{
          width: "40%",
          margin: "20px",
          marginRight: "10px",
          borderRadius: "20px",
          border: "1px solid #9c3353",
        }}
        placeholder="Search fundraisers"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <Button
        style={{
          background: "#9c3353",
          color: "white",
          borderRadius: "50px",
        }}
        onClick={handleSearch}
      >
        Search
      </Button>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
          marginBottom: "35px",
        }}
      >
        <CategoryCard
          text="All"
          onClick={() => handleButton("all")}
          img="https://www.shareicon.net/data/512x512/2015/08/22/89164_all_512x512.png"
        />

        <CategoryCard
          text="Medical"
          onClick={() => handleButton("medical")}
          img="https://image.flaticon.com/icons/png/512/3/3862.png"
        />

        <CategoryCard
          text="Animal"
          onClick={() => handleButton("animals")}
          img="https://www.freeiconspng.com/uploads/animal-paw-vector-icon-animals-icons-icons-download-0.png"
        />

        <CategoryCard
          text="Memorial"
          onClick={() => handleButton("memorial")}
          img="https://static.thenounproject.com/png/1382987-200.png"
        />

        <CategoryCard
          text="Education"
          onClick={() => handleButton("education")}
          img="https://upload.wikimedia.org/wikipedia/commons/e/e8/Education%2C_Studying%2C_University%2C_Alumni_-_icon.png"
        />

        {/* <select onChange={(e) => setFilters(e.target.value)}>
          <option value="medical">Medical</option>
          <option value="emergencies">Emergencies</option>
          <option value="sports">Sports</option>
          <option value="memorial">Memorial</option>
        </select> */}
      </div>

      <DonationCardCompo>
        {isLoading ? (
          <Loader />
        ) : (
          cards.map(
            (item, i) =>
              i < 6 && (
                <DonationCardDetails
                  onClick={() => history.push(`/fundraisers/${item.id}`)}
                  id={item.id}
                  label={item.title}
                  imageUrl={item.image}
                  amount={item.supporters.reduce((ac, v) => {
                    return ac + v.amount;
                  }, 0)}
                  creater={item.createdBy}
                  percentage={
                    (item.supporters.reduce((ac, v) => {
                      return ac + v.amount;
                    }, 0) /
                      item.target) *
                    100
                  }
                ></DonationCardDetails>
              )
          )
        )}
      </DonationCardCompo>
    </div>
  );
}
