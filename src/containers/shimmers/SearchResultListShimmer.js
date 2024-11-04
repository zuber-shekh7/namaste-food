import React from "react";

const SearchResultListShimmer = () => {
  return (
    <section className="p-6 bg-slate-300 rounded-xl">
      <section className="grid grid-cols-12">
        {new Array(20).fill("").map((_item) => {
          return (
            <section className="col-span-4">
              <section className="h-64 w- mb-4 mr-4 rounded-xl bg-slate-50 animate-pulse"></section>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default SearchResultListShimmer;
