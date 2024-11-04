import { SWIGGY_API_URL } from "../constants";

export const getRestaurants = async ({ lat, lng }) => {
  try {
    const url = `${SWIGGY_API_URL}/restaurants/list/v5?lat=${lat}&lng=${lng}`;
    const response = await fetch(url);
    const json = await response.json();

    return json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants
      ? json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      : json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
  } catch (error) {
    console.error("Failed to fetch restaurants: ", error);
    return [];
  }
};

export const searchRestaurantsAndFood = async ({ lat, lng, searchTerm }) => {
  try {
    const url = `${SWIGGY_API_URL}/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${searchTerm}&submitAction=ENTER`;
    const response = await fetch(url);
    const json = await response.json();
    return json?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards;
  } catch (error) {
    console.error("Failed to search restaurants and food: ", error);
    return [];
  }
};
