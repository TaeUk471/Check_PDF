import { cva, VariantProps } from "class-variance-authority";
import { ElementType, forwardRef } from "react";

import View, { PolymorphicProps, PolymorphicRef } from "@components/View";
import { cn } from "@utils/cn";

const tagVariants = cva(
  `
  flex justify-center items-center font-poppins font-bold
  text-base relative shadow-current shadow-md
  `,
  {
    variants: {
      color: {
        waiting: "bg-green-600",
        submit: "bg-sky-600",
        danger: "bg-red-600",
        warning: "bg-orange-20",
      },
      variant: {
        solid: "",
        bordered: "border-2",
        shadow: "",
      },
      size: {
        default: "px-5 py-3",
        mini: "px-2 py-[1px]",
        sm: "px-4 py-2",
        md: "px-6 py-3 text-lg",
        lg: "px-8 py-4 text-2xl",
        xl: "px-12 py-6 text-3xl",
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
      color: "waiting",
      variant: "solid",
      size: "default",
      radius: "lg",
    },
  },
);

export type tagVariant = VariantProps<typeof tagVariants>;

type tagProps<T extends ElementType> = PolymorphicProps<T> & tagVariant;

const Tag = forwardRef(
  <T extends ElementType = "div">(
    { as, color, variant, size, radius, className, children, ...props }: tagProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    return (
      <View
        as={as || "div"}
        className={cn(tagVariants({ color, variant, size, radius, className }))}
        ref={ref}
        {...props}>
        {children}
      </View>
    );
  },
);
export default Tag;

Tag.displayName = "Tag";
