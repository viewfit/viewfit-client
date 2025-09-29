import type { FC } from "react";
import { Logo } from "./logo";
import { ModeToggle } from "./theme-togle";
import { SearchBox } from "./search-box";
import { UtilityMenu } from "./utility-menu";
import { Categories } from "./categories";

export const Header: FC = () => {
  return (
    <header className="sticky mx-auto flex flex-col w-full min-h-fit max-w-4/5 h-25 justify-between gap-2 pb-3">
      <div className="flex justify-end mt-1">
        <ModeToggle />
      </div>
      <div className="flex justify-between items-center mb-5 w-full">
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <div className="flex-1 px-6 w-full max-w-5xl justify-center">
          <SearchBox />
        </div>
        <div className="flex-shrink-0">
          <UtilityMenu />
        </div>
      </div>
      <div>
        <Categories />
      </div>
    </header>
  );
};
