import { useCategories } from "@/hooks/use-categories-query";
import React, { useEffect, useState } from "react";

type parentComponent = {
  parentId: number | null;
};

export const SubCategories = React.memo(({ parentId }: parentComponent) => {
  const { data } = useCategories(parentId);

  return (
    <div className="absolute bg-secondary hidden group-hover:block opacity-100 min-w-full pt-1 pb-1">
      {data?.map((item, index) => (
        <div
          key={index}
          className="second-group flex flex-col w-full h-full hover:cursor-pointer"
        >
          <div className="second-group flex relative">
            <div className="border-1 p-3 rounded_2xl basis-1/5 hover:bg-primary hover:duration-75 font-sans font-bold">
              <button className="align-center text-center w-full hover:text-foreground">
                {item.name}
              </button>
            </div>
            <div className="second-group-hover:block opacity-100 basis-3/5">
              <span>3rd Menu</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});
