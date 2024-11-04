import React from "react";
import SearchResultCard from "../components/SearchResultCard";

const SearchResultList = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="p-6 bg-slate-200 grid grid-cols-12 rounded-xl">
      {data?.map((item, index) => (
        <SearchResultCard
          item={item}
          key={item?.card?.card?.info?.id || index}
        />
      ))}
    </section>
  );
};

export default SearchResultList;
