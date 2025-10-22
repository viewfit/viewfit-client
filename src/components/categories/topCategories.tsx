import { MenuIcon } from "lucide-react";
import { Suspense, useState, type FC } from "react";
import { SecCategories } from "./secCategories";
import { cn } from "@/lib/utils";
import { Spinner } from "../ui/spinner";

export const Categories: FC = () => {
  const [parentId, setParentId] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const mainCategories = [
    { id: 1, label: "신상" },
    { id: 2, label: "인기" },
    { id: 4, label: "뷰티" },
    { id: 5, label: "의류" },
    { id: 6, label: "세트" },
    { id: 7, label: "럭셔리" },
    { id: 8, label: "이벤트" },
    { id: 9, label: "문의" },
  ];

  return (
    <div
      className="flex flex-col group relative border-b-1 shadow-xs max-h-full pb-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between">
        <div className="flex gap-15">
          {mainCategories.map(({ id, label }) => (
            <div
              key={label}
              onMouseEnter={() => {
                setParentId(id);
                setIsHovered(true);
              }}
              className={cn(
                "pl-1 pr-1",
                parentId === id && isHovered ? "border-b-2 border-primary" : ""
              )}
            >
              <button className="text-lg font-bold font-sans hover:text-primary">
                {label}
              </button>
            </div>
          ))}
        </div>

        <div className="p-0">
          <button className="flex gap-3 items-center hover:text-primary">
            <MenuIcon strokeWidth={2} className="p-0" />
            <span className="text-lg font-bold font-sans">전체메뉴</span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "absolute w-full transition-opacity duration-300 top-9",
          parentId !== null && isHovered && parentId >= 3
            ? "opacity-100"
            : "opacity-0 pointer-events-auto"
        )}
      >
        <Suspense
          fallback={
            <div className="absolute bg-secondary hidden group-hover:block opacity-100 min-w-full pt-1 pb-1">
              <div className="flex flex-col justify-center items-center gap-3">
                <Spinner className="size-10 text-primary" />
                <span className="text-primary text-2xl">Loading...</span>
              </div>
            </div>
          }
        >
          <SecCategories parentId={parentId} />
        </Suspense>
      </div>
    </div>
  );
};
