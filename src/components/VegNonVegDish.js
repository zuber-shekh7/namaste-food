import React from "react";

const VegNonVegDish = ({ isVeg }) => {
  const colorName = isVeg ? "green-700" : "red-700";

  return (
    <section className="my-1">
      <section
        className={`h-4 w-4 border border-${colorName} flex justify-center items-center`}
      >
        <section className={`h-3 w-3 rounded-full bg-${colorName}`}></section>
      </section>
    </section>
  );
};

export default VegNonVegDish;
