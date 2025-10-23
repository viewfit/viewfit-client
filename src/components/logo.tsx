import { Link } from "@tanstack/react-router";
import type { FC } from "react";

export const Logo: FC = () => {
  return (
    <Link to="/">
      <div className="flex flex-col items-center">
        <div>
          <span className="text-4xl italic font-extrabold text-primary">
            View Fit
          </span>
        </div>
        <div>
          <span className="text-primary text-base font-medium font-lg">
            Beauty and fashion, perfectly mached
          </span>
        </div>
      </div>
    </Link>
  );
};
