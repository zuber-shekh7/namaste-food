import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { CLOUDINARY_URL } from "../constants";
import VegNonVegDish from "./VegNonVegDish";

const SearchResultCard = ({ item }) => {
  const info = item?.card?.card?.info;
  const restaurant = item?.card?.card?.restaurant?.info;

  if (info) {
    return (
      <section className="col-span-4 bg-white mb-4 mr-4 px-4 py-4 rounded-xl hover:cursor-pointer shadow">
        {/* RESTAURANT INFO */}
        <section className="flex items-center justify-between">
          <section className="text-slate-500">
            <h4 className="font-light text-sm">By {restaurant.name}</h4>
            <h4 className="flex items-center text-sm">
              <FaStar className="text-green-600 mr-1" />
              {restaurant.avgRating} &#x2022; {restaurant.sla?.slaString}
            </h4>
          </section>
          <FaArrowRight />
        </section>
        <hr className="my-4 border-grey-800 border-dashed" />
        {/* DISH INFO */}
        <section className="flex justify-between">
          <section>
            <VegNonVegDish isVeg={info.isVeg} />
            <h4 className="font-bold text-lg text-slate-600">{info.name}</h4>
            <section className="flex items-center">
              {info.price ? (
                <h4
                  className={`mr-2 font-medium ${
                    info.finalPrice ? "line-through text-slate-500" : ""
                  }`}
                >
                  ₹ {info.price / 100}
                </h4>
              ) : null}
              {info.finalPrice ? (
                <h4 className="font-medium">₹ {info.finalPrice / 100}</h4>
              ) : null}
            </section>
          </section>
          <section className="flex flex-col justify-center items-center">
            {info.imageId ? (
              <img
                className="h-24 w-24 rounded-lg object-cover"
                src={`${CLOUDINARY_URL}/${info.imageId}`}
              />
            ) : null}
            <button className="mt-2 bg-white px-4 py-1 rounded-lg text-green-700 border uppercase font-bold hover:bg-slate-50">
              Add
            </button>
          </section>
        </section>
      </section>
    );
  }

  return null;
};

export default SearchResultCard;
