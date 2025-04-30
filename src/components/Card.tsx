import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        "relative z-0 overflow-hidden after:z-10  after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:pointer-events-none ",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5 "
        style={{
        }}
      ></div>
      {children}
    </div>
  );
};
