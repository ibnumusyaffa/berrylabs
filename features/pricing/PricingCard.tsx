import React from "react";
import clsx from "clsx";

type PricingCardProps = {
  gray: boolean;
  data: {
    name: string;
    isBestSeller: boolean;
    description: string;
    price: string;
    features: (string | React.JSX.Element)[];
  };
};
export function PricingCard({ data, gray }: PricingCardProps) {
  return (
    <div
      className={clsx("grid relative grid-rows-[150px_1fr] rounded-xl ", {
        "border-2 border-indigo-500": data.isBestSeller,
      })}
    >
      {data.isBestSeller ? (
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white rounded-full px-3 py-1 text-sm">
          Best Seller
        </div>
      ) : null}

      <div
        className={clsx("text-center space-y-3 pt-5 rounded-t-2xl", {
          "bg-gray-50": gray,
        })}
      >
        <div className="text-lg text-gray-700 font-medium">{data.name}</div>
        <div className="text-sm text-gray-700">{data.description}</div>
        <div className="text-3xl font-bold">{data.price}</div>
      </div>
      <div className="grid relative grid-rows-[80px_50px_50px_50px_50px_50px_50px_50px_80px]">
        {data.features.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "flex text-sm text-gray-700 items-center justify-center last:rounded-b-2xl px-10",
                {
                  "bg-gray-50": index === 0 ? !gray : gray,
                }
              )}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
