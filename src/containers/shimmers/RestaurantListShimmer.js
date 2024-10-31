import React from "react";

const RestaurantListShimmer = () => {
  return (
    <section className="animate-pulse">
      <section className="mb-6 w-72 h-8 bg-slate-300 rounded-lg"></section>
      <section className="flex overflow-scroll">
        {new Array(10).fill("")?.map((_item, index) => {
          return (
            <section className="mb-6" key={index}>
              <section className="mr-6 w-72 h-48 rounded-lg bg-slate-300"></section>
              <section className="mt-3">
                <section className="mr-6 mt-2 w-24 h-3 rounded-lg bg-slate-300"></section>
                <section className="mr-6 mt-2 w-36 h-3 rounded-lg bg-slate-300"></section>
                <section className="mr-6 mt-2 w-32 h-3 rounded-lg bg-slate-300"></section>
              </section>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default RestaurantListShimmer;
