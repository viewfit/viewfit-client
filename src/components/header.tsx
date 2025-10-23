import type { FC } from "react";
import { Logo } from "./logo";
import { ModeToggle } from "./theme-togle";
import { SearchBox } from "./search-box";
import { UtilityMenu } from "./utility-menu";
import { MainCategories } from "./categories/new_category";

export const Header: FC = () => {
  return (
    <header className="sticky flex flex-col items-center pt-3 border-b-2">
      <div className="mx-auto flex flex-col w-full max-w-4/5 min-h-fit justify-between">
        <div className="flex justify-end">
          <ModeToggle />
        </div>
        <div className="flex items-center mb-5 w-full">
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
        <div className="mx-auto mt-3 w-full min-h-10 flex items-center">
          <MainCategories />
        </div>
      </div>
    </header>
  );
};
