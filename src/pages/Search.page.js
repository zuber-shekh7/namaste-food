import React, { useEffect, useState } from "react";

import { searchRestaurantsAndFood } from "../apis/restaurants";
import { CLOUDINARY_URL } from "../constants";
import { FaArrowRight, FaCircle, FaStar } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import SearchResultList from "../containers/SearchResultList";
import SearchResultListShimmer from "../containers/shimmers/SearchResultListShimmer";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRestaurants, setSearchRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const searchRestaurantAndFoodFn = async () => {
      setLoading(true);
      const data = await searchRestaurantsAndFood({
        searchTerm: searchTerm,
        lat: "20.60630",
        lng: "72.93560",
      });
      setSearchRestaurants(data);
      setLoading(false);
    };

    let timer;
    if (searchTerm) {
      setLoading(true);
      setSearchRestaurants([]);
      timer = setTimeout(() => {
        searchRestaurantAndFoodFn();
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="container">
      {/* SEARCH */}
      <section className="flex justify-center">
        <input
          className="w-full border py-2 px-3 rounded-lg focus:outline-none"
          type="search"
          placeholder="Search for restaurants and food"
          onChange={handleChange}
          value={searchTerm}
        />
      </section>
      {/* SEARCH RESULTS */}
      <section className="mt-6">
        {isLoading ? (
          <SearchResultListShimmer />
        ) : (
          <SearchResultList data={searchRestaurants} />
        )}
      </section>
    </section>
  );
};

export default Search;
