import { Link } from "@tanstack/react-router";
import type { FC } from "react";

export const Logo: FC = () => {
  return (
    <Link to="/">
      <div className="flex flex-col items-center">
        <div>
          <span className="text-3xl italic font-black text-primary">
            View Fit
          </span>
        </div>
        <div>
          <span className="text-primary text-sm font-medium font-lg">
            Beauty and fashion, perfectly mached
          </span>
        </div>
      </div>
    </Link>
  );
};
