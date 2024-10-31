import React from "react";
import { FaStar } from "react-icons/fa";

import { CLOUDINARY_URL } from "../constants";

const Card = ({ info }) => {
  const { areaName, avgRating, cloudinaryImageId, cuisines, name, sla } = info;

  return (
    <section className="mr-6 mb-6 min-w-72 rounded-lg hover:cursor-pointer">
      <section>
        <img
          className="object-cover h-48 w-full rounded-xl"
          src={`${CLOUDINARY_URL}/${cloudinaryImageId}
`}
          alt={name}
        />
      </section>
      <section className="mt-3">
        <h3 className="text-xl font-bold truncate">{name}</h3>
        <h4 className="flex items-center font-medium">
          <FaStar className="text-green-600 mr-1" />
          {avgRating} &#x2022; {sla?.slaString}
        </h4>
        <h4 className="font-light text-gray-500 truncate">
          {cuisines.join(", ")}
        </h4>
        <h4 className="font-light text-gray-500">{areaName}</h4>
      </section>
    </section>
  );
};

export default Card;
