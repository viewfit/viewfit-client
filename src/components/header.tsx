import type { FC } from "react";
import { Logo } from "./logo";
import { ModeToggle } from "./theme-togle";
import { SearchBox } from "./search-box";
import { UtilityMenu } from "./utility-menu";
import { Categories } from "./categories";

export const Header: FC = () => {
  return (
    <header className="sticky mx-auto flex flex-col w-full min-h-fit max-w-7xl h-25 justify-between gap-2 pb-3">
      <div className="flex justify-end mt-1">
        <ModeToggle />
      </div>
      <div className="flex justify-between items-center mb-3">
        <div className="max-w-lg">
          <Logo />
        </div>
        <div className="w-full max-w-2xl h-fit">
          <SearchBox />
        </div>
        <div>
          <UtilityMenu />
        </div>
      </div>
      <div>
        <Categories />
      </div>
    </header>
  );
};
