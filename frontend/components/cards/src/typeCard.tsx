import { cva, VariantProps } from "class-variance-authority";
import { ElementType, forwardRef } from "react";

import View, { PolymorphicProps, PolymorphicRef } from "@components/View";
import { cn } from "@utils/cn";

const TypeCardVariants = cva(
  `
    bg-slate-100 px-4 py-4 font-roboto 
  `,
  {
    variants: {
      color: {
        normal: "",
        selected: "",
      },
      variant: {
        solid: "",
        bordered: "border-2 border-slate-300",
        shadow: "",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      color: "normal",
      variant: "bordered",
      size: "md",
      radius: "lg",
    },
  },
);

export type TypeCardVariant = VariantProps<typeof TypeCardVariants>;

export type TypeCardProps<T extends ElementType> = PolymorphicProps<T> & TypeCardVariant;

const TypeCard = forwardRef(
  <T extends ElementType = "div">(
    { as, color, variant, size, radius, className, children, ...props }: TypeCardProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    return (
      <View
        as={as || "div"}
        className={cn(TypeCardVariants({ color, variant, size, radius, className }))}
        ref={ref}
        {...props}>
        {children}
      </View>
    );
  },
);

export default TypeCard;

TypeCard.displayName = "TypeCard";
