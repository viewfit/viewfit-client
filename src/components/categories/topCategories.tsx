import { MenuIcon } from "lucide-react";
import { useState, type FC } from "react";
import { SecCategories } from "./secCategories";

export const Categories: FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [parentId, setParentId] = useState<number | null>(null);

  return (
    <div
      onMouseEnter={() => {
        console.log(parentId);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="flex flex-col group"
    >
      <div className=" flex justify-between">
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
            onMouseEnter={() => {
              setParentId(4);
            }}
            onMouseLeave={() => {
              setParentId(null);
            }}
          >
            <button className="text-lg font-bold font-sans hover:text-primary">
              뷰티
            </button>
          </div>
          <div
            onMouseEnter={() => {
              setParentId(5);
            }}
            onMouseLeave={() => {
              setParentId(null);
            }}
          >
            <button className="text-lg font-bold font-sans hover:text-primary">
              의류
            </button>
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
      <div
        className={`transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <SecCategories parentId={parentId} />
      </div>
    </div>
  );
};
