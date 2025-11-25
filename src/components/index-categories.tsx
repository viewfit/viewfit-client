import type { FC } from "react";
import lipstick from "@/assets/lipstick.png";
import cusion from "@/assets/cushion.png";
import foamCleanser from "@/assets/foam-cleanser.png";
import skin from "@/assets/skin.png";
import shadow from "@/assets/shadow.png";
import tShirt from "@/assets/t-shirt.png";
import skirt from "@/assets/skirt.png";
import React from "react";
import { TableProperties } from "lucide-react";

export const IndexCategories: FC = () => {
  type indexCategories = {
    image: string;
    name: string;
  };

  const data: indexCategories[] = [
    {
      image: lipstick,
      name: "Lipstick",
    },
    {
      image: cusion,
      name: "Cusion",
    },
    {
      image: foamCleanser,
      name: "Foam Cleanser",
    },
    {
      image: skin,
      name: "Skin",
    },
    {
      image: shadow,
      name: "Shadow",
    },
    {
      image: tShirt,
      name: "T-Shirt",
    },
    {
      image: skirt,
      name: "Skirt",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3 items-center">
        <TableProperties size={24} color="#315578" strokeWidth={3} />
        <div className="flex gap-2">
          <span className="text-xl text-primary font-bold">카테고리</span>
          <span className="text-lg text-gray-400 font-black italic">
            Categories
          </span>
        </div>
      </div>
      <div className="rounded-full bg-primary-foreground h-40 flex justify-evenly items-center">
        {data.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="group flex flex-col gap-4 items-center cursor-pointer">
              <img className="size-20" src={item.image} />
              <span className="font-medium text-foreground group-hover:underline group-hover:text-primary">
                {item.name}
              </span>
            </div>
            {idx < data.length - 1 && (
              <div className="h-20 border-r border-gray-300"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
