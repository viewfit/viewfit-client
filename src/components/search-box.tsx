import type { FC } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

export const SearchBox: FC = () => {
  return (
    <div className="relative w-full px-15">
      <Input
        className="w-full min-h-15 border-primary border-2 rounded-3xl pr-12 pl-8 font-semibold !text-base text-primary"
        placeholder="검색어를 입력하세요..."
      />
      <button className="absolute right-20 top-1/2 -translate-y-1/2 border-none rounded-xl bg-bakground p-2 w-fit h-fit">
        <Search
          color="#315578"
          strokeWidth={2}
          className="search-icon hover:text-primary"
        />
      </button>
    </div>
  );
};
