import { BellIcon, ShoppingBagIcon, UserRoundIcon } from "lucide-react";
import type { FC } from "react";

export const UtilityMenu: FC = () => {
  return (
    <div className="flex gap-8">
      <div>
        <button>
          <UserRoundIcon className="hover:text-primary" />
        </button>
      </div>
      <div>
        <button>
          <ShoppingBagIcon className="hover:text-primary" />
        </button>
      </div>
      <div>
        <button>
          <BellIcon className="hover:text-primary" />
        </button>
      </div>
    </div>
  );
};
