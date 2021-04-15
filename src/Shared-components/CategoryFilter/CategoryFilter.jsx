import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCards } from "../../Redux/categoryApi/actions";
import { DonationCardCompo } from "../DonationCard/DonationCardCompo";
import { DonationCardDetails } from "../DonationCard/DonationCardDetails";

export function CategoryFilter() {
  const [filters, setFilters] = useState("");

  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { cards, isLoading, isError } = useSelector(
    (state) => state.cards,
    shallowEqual
  );

  useEffect(() => {
    dispatch(getCards(filters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  // console.log(cards)

  const handleButton = (str) => {
    setFilters(str);
  };
  // eslint-disable-next-line array-callback-return
  cards.map((item) => {
    console.log(
      item.supporters.reduce((acc, a) => {
        return acc + a.amount;
      }, 0)
    );
  });

  return (
    <div>
      <h1>category</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button onClick={() => handleButton("all")}>All</button>
        <button onClick={() => handleButton("animals")}>Animal</button>
        <button onClick={() => handleButton("memorial")}>Memorial</button>
        <select onChange={(e) => setFilters(e.target.value)}>
          <option value="medical">Medical</option>
          <option value="emergencies">Emergencies</option>
          <option value="sports">Sports</option>
          <option value="memorial">Memorial</option>
        </select>
      </div>

      <DonationCardCompo>
        {cards.map((item) => (
          <DonationCardDetails
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
        ))}
      </DonationCardCompo>
    </div>
  );
}
