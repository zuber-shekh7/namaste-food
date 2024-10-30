import React from "react";
import Card from "../components/Card";

const RestaurantList = ({ restaurants }) => {
  return (
    <section className="flex overflow-scroll">
      {restaurants?.map((restaurant) => {
        return <Card key={restaurant.info.id} info={restaurant.info} />;
      })}
    </section>
  );
};

export default RestaurantList;
