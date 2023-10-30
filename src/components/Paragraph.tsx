import { FC } from "react";
import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/utils";

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const Paragraph: FC<ParagraphProps> = ({ children, className, ...props }) => {
  return (
    <p {...props} className={cn("leading-7", className)}>
      <Balancer>{children}</Balancer>
    </p>
  );
};

export default Paragraph;
