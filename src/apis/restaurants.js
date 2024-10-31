import { SWIGGY_API_URL } from "../constants";

export const getRestaurants = async ({ lat, lng }) => {
  try {
    const url = `${SWIGGY_API_URL}?lat=${lat}&lng=${lng}`;
    const response = await fetch(url);
    const json = await response.json();

    return json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  } catch (error) {
    console.error("Failed to feth restaurants: ", error);
    return [];
  }
};
