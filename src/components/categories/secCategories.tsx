import { useCategories } from "@/hooks/use-categories-query";

type parentComponent = {
  parentId: number | null;
};

export const SecCategories = ({ parentId }: parentComponent) => {
  const { data } = useCategories(parentId);

  console.log(parentId);

  return (
    <div className="absolute bg-secondary hidden group-hover:block opacity-100 min-w-2xl h-fit pt-1 pb-1">
      {data?.map((item, index) => (
        <div key={index} className="flex flex-col w-full h-full">
          <div className="second-group flex relative">
            <button className="border-1 p-3 rounded_2xl basis-1/3 hover:bg-primary hover:duration-75">
              {item.name}
            </button>
            <div className="absolute hidden second-group-hover:block opacity-100 basis-2/3">
              <span>3rd Menu</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
