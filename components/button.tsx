import clsx from "clsx";
import React from "react";

type ButtonProps = {
  variant: "default" | "solid";
  children?: React.ReactNode;
};
export function Button({ variant = "default", children }: ButtonProps) {
  return (
    <button
      className={clsx("h-10 px-5 rounded w-full", {
        "bg-indigo-600  text-white": variant === "solid",
        "text-gray-700 border border-gray-300 bg-white font-semibold": variant === "default",
      })}
    >
      {children}
    </button>
  );
}
