import React, { useEffect, useState } from "react";

import RestaurantList from "../containers/RestaurantList";
import Title from "../components/Title";

import { getRestaurants } from "../apis/restaurants";
import RestaurantListShimmer from "../containers/shimmers/RestaurantListShimmer";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true);
      const data = await getRestaurants({
        lat: "20.60630",
        lng: "72.93560",
      });
      setRestaurants(data);
      setLoading(false);
    };

    fetchRestaurants();
  }, []);

  return (
    <section className="mt-6">
      <section>
        {isLoading ? (
          <RestaurantListShimmer />
        ) : (
          <>
            <Title className="mb-6">Top restaurant chains</Title>
            <RestaurantList restaurants={restaurants} />
          </>
        )}
      </section>
    </section>
  );
};

export default Home;
