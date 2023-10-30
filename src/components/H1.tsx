import { FC } from "react";

import { cn } from "@/lib/utils";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const H1: FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h1
      {...props}
      className={cn(
        "line scroll-m-20 text-center font-semibold leading-10 tracking-[-0.08em] [font-size:clamp(2.25rem,_4.5vw,_8rem)] md:leading-normal",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default H1;
