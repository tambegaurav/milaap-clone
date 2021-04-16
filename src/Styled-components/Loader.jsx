import { Heading } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        placeItems: "center",
        marginTop: "150px",
        gap: "25px",
      }}
    >
      <Heading>Loading...</Heading>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="red.500"
        size="xl"
      />
    </div>
  );
};

export default Loader;
