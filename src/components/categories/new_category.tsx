import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { MenuIcon } from "lucide-react";
import { Suspense, useState, type FC } from "react";
import { AllCategories } from "./all-categories";
import { Spinner } from "../ui/spinner";

export const MainCategories: FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);

  function handleShowAll(prev: boolean) {
    setShowAll(!prev);

    console.log(showAll);
  }

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-20">
        <button
          className={cn(
            "flex max-h-fit align-middle gap-1 items-center hover:text-primary",
            showAll ? "text-primary" : ""
          )}
          onClick={() => handleShowAll(showAll)}
        >
          <MenuIcon size={25} strokeWidth={2} className="pt-1" />
          <span className="min-h-full align-middle font-medium">전체보기</span>
        </button>
        <nav>
          <ul className="flex items-center gap-10">
            <li className="hover:font-medium hover:text-primary">
              <Link to="/">신상</Link>
            </li>
            <li className="hover:font-medium hover:text-primary">
              <Link to="/">인기</Link>
            </li>
            <li className="hover:font-medium hover:text-primary">
              <Link to="/">뷰티</Link>
            </li>
            <li className="hover:font-medium hover:text-primary">
              <Link to="/">의류</Link>
            </li>
            <li className="hover:font-medium hover:text-primary">
              <Link to="/">세트</Link>
            </li>
            <li className="hover:font-medium hover:text-primary">
              <Link to="/">럭셔리</Link>
            </li>
            <li className="hover:font-medium hover:text-primary">
              <Link to="/">이벤트</Link>
            </li>
            <li className="hover:font-medium hover:text-primary">
              <Link to="/">문의</Link>
            </li>
          </ul>
        </nav>
      </div>
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
        <AllCategories showAll={showAll} />
      </Suspense>
    </div>
  );
};
