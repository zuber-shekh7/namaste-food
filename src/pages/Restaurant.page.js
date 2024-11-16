import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import { getRestaurantInfo } from "../apis/restaurants";
import { CLOUDINARY_URL } from "../constants";

const Restaurant = () => {
  const [data, setData] = useState({
    info: null,
    offers: null,
  });

  const { restaurantId } = useParams();

  useEffect(() => {
    const fetchRestaurantInfo = async () => {
      const data = await getRestaurantInfo({
        lat: "20.60630",
        lng: "72.93560",
        restaurantId,
      });
      setData(data);
    };

    fetchRestaurantInfo();
  }, []);

  const { info, offers } = data;
  return (
    <section className="container mx-auto">
      <section className="grid grid-cols-12 gap-y-10">
        {/* INFORMATION */}
        <section className="col-start-4 col-span-6">
          {info && (
            <section>
              <h1 className="text-2xl font-bold my-4">{info.name}</h1>
              <section className="px-5 py-5 rounded-3xl border-none bg-gray-200 shadow-md">
                <section className="bg-gray-100 px-5 py-5 rounded-3xl border border-gray-300 shadow-2xl">
                  <h4 className="flex items-center font-bold my-1">
                    <FaStar className="text-green-600 mr-1" />
                    {info?.avgRating} ({info?.totalRatingsString}) &middot;{" "}
                    {info?.costForTwoMessage}
                  </h4>
                  <h4 className="my-1 text-sm text-orange-600 underline font-bold">
                    {info.cuisines.join(", ")}
                  </h4>
                  <h4 className="font-semibold text-sm my-1">
                    &middot; Outlet{" "}
                    <span className="font-thin text-gray-500">
                      {info?.areaName}
                    </span>
                  </h4>
                  <h4 className="font-semibold text-sm my-1 lowercase">
                    &middot; {info?.sla?.slaString}
                  </h4>
                </section>
              </section>
            </section>
          )}
        </section>
        {/* OFFERS */}
        <section className="col-start-4 col-span-6">
          {offers && (
            <>
              <h2 className="font-bold text-xl mb-4">Deals for you</h2>
              <section className="flex overflow-scroll">
                {offers.map((item) => {
                  return (
                    <section
                      key={item?.info?.offerIds[0]}
                      className="min-w-72 flex items-center border rounded-2xl mr-2 px-2 py-4 mb-4"
                    >
                      <img
                        src={`${CLOUDINARY_URL}/${item?.info?.offerLogo}`}
                        alt="Offer Logo"
                        className="h-12 w-12 object-cover mr-2"
                      />

                      <section className="w-9/12">
                        <h3 className="font-bold">{item?.info?.header}</h3>
                        <h3 className="text-sm font-medium text-gray-500 truncate">
                          {item?.info?.description}
                        </h3>
                      </section>
                    </section>
                  );
                })}
              </section>
            </>
          )}
        </section>
      </section>
    </section>
  );
};

export default Restaurant;
