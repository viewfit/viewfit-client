import type { FC } from "react";
import { Logo } from "../logo";
import { ModeToggle } from "../theme-togle";

export const Header: FC = () => {
  return (
    <header className="sticky mx-auto flex flex-col w-full min-h-fit max-w-7xl h-35 justify-between gap-2 pb-3 border-b-1">
      <div className="flex justify-end mt-3">
        <ModeToggle />
      </div>
      <div className="flex justify-between items-center mb-4">
        <Logo />
        <div>Search</div>
        <div>Utility Menu</div>
      </div>
      <div>Categories</div>
    </header>
  );
};
