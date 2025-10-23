import { useCategories } from "@/hooks/use-categories-query";
import { cn } from "@/lib/utils";

type parentProps = {
  showAll: boolean;
};

export const AllCategories = ({ showAll }: parentProps) => {
  const { data } = useCategories(null);

  return (
    <div
      className={cn(
        "absolute opacity-0 rounded-2xl w-full bg-primary-foreground flex flex-col",
        showAll ? "opacity-100 block" : ""
      )}
    >
      {data?.map((item, index) => (
        <div className="flex flex-col">
          <div key={item.id}>
            {/* <span className={cn("", !item.parentId ? "font-bold" : "")}>
                {item.id}
              </span> */}
            <div>
              {item.parentId === null ? (
                <span className="text-xl font-bold">{item.name}</span>
              ) : (
                <></>
              )}
            </div>
            {data.map((subItem, index) => (
              <div>
                {item.id === subItem.parentId ? (
                  <span>{subItem.name}</span>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
