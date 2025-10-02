import { useCategories } from "@/hooks/use-categories-query";
import { MenuIcon } from "lucide-react";
import { useState, type FC } from "react";
import { Button } from "./ui/button";

export const Categories: FC = () => {
  const [parentId, setParentId] = useState<number | null>(null);
  const { data } = useCategories(parentId);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-15">
          <div>
            <button className="text-lg font-bold font-sans hover:text-primary">
              신상
            </button>
          </div>
          <div>
            <button className="text-lg font-bold font-sans hover:text-primary">
              인기
            </button>
          </div>
          <div
            className="group relative"
            onMouseEnter={() => {
              setParentId(4);
            }}
          >
            <button className="text-lg font-bold font-sans hover:text-primary">
              뷰티
            </button>
            <div className="absolute bg-secondary hidden group-hover:block opacity-100 min-w-2xl h-fit">
              {data?.map((item, index) => (
                <div key={index} className="flex flex-col w-full h-full">
                  <div className="second flex relative">
                    <button className="border-1 p-2 rounded-2xl">
                      {item.name}
                    </button>
                    <div className="hidden second-hover:block">3rd Menu</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="group relative"
            onMouseEnter={() => {
              setParentId(5);
            }}
          >
            <button className="text-lg font-bold font-sans hover:text-primary">
              의류
            </button>
            <div className="absolute hidden group-hover:block opacity-100 min-w-2xl">
              {data?.map((item, index) => (
                <div key={index}>{item.name}</div>
              ))}
            </div>
          </div>
          <div>
            <button className="text-lg font-bold font-sans hover:text-primary">
              세트
            </button>
          </div>
          <div>
            <button className="text-lg font-bold font-sans hover:text-primary">
              럭셔리
            </button>
          </div>
          <div>
            <button className="text-lg font-bold font-sans hover:text-primary">
              이벤트
            </button>
          </div>
          <div>
            <button className="text-lg font-bold font-sans hover:text-primary">
              문의
            </button>
          </div>
        </div>
        <div className="p-0">
          <button className="flex gap-3 items-center hover:text-primary">
            <MenuIcon strokeWidth={2} className="p-0" />
            <span className="text-lg font-bold font-sans">전체메뉴</span>
          </button>
        </div>
      </div>
    </>
  );
};
