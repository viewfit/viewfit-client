import { useCategories } from "@/hooks/use-categories-query";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  BlendIcon,
  BrushIcon,
  FlameIcon,
  GemIcon,
  HeadsetIcon,
  PackagePlus,
  PartyPopperIcon,
  ShirtIcon,
} from "lucide-react";

type parentProps = {
  showAll: boolean;
};

export const AllCategories = ({ showAll }: parentProps) => {
  const { data } = useCategories(null);

  return (
    <div
      className={cn(
        "absolute top-10 hidden rounded-2xl w-full bg-gray-100 p-5",
        showAll ? "block" : ""
      )}
    >
      <div className="flex justify-evenly">
        {data?.map((item, index) => (
          <div
            className={cn(
              "flex flex-col items-center w-fit",
              item.parentId !== null ? "hidden" : ""
            )}
            key={item.id}
          >
            {item.parentId === null ? (
              <div className="mb-2 flex items-center gap-1.5 w-fit">
                {(() => {
                  switch (item.id) {
                    case 1:
                      return (
                        <PackagePlus
                          size={20}
                          color="#315578"
                          strokeWidth={3}
                        />
                      );
                    case 2:
                      return (
                        <FlameIcon size={20} color="#315578" strokeWidth={3} />
                      );
                    case 3:
                      return (
                        <BrushIcon size={20} color="#315578" strokeWidth={3} />
                      );
                    case 4:
                      return (
                        <ShirtIcon size={20} color="#315578" strokeWidth={3} />
                      );
                    case 5:
                      return (
                        <BlendIcon size={20} color="#315578" strokeWidth={3} />
                      );
                    case 6:
                      return (
                        <GemIcon size={20} color="#315578" strokeWidth={3} />
                      );
                    case 7:
                      return (
                        <PartyPopperIcon
                          size={20}
                          color="#315578"
                          strokeWidth={3}
                        />
                      );
                    case 8:
                      return (
                        <HeadsetIcon
                          size={20}
                          color="#315578"
                          strokeWidth={3}
                        />
                      );
                    default:
                      return <div className="hidden"></div>;
                  }
                })()}
                <span className="text-xl text-primary font-bold">
                  {item.name}
                </span>
              </div>
            ) : null}
            <div className="flex flex-col items-center">
              {data.map((subItem, index) => (
                <div
                  className={cn(
                    "mb-2",
                    item.id !== subItem.parentId ? "hidden" : ""
                  )}
                >
                  {item.id === subItem.parentId ? (
                    <Link to="/" className="hover:text-primary">
                      {subItem.name}
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
