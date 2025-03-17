import { cva, VariantProps } from "class-variance-authority";
import { ElementType, forwardRef } from "react";

import View, { PolymorphicProps, PolymorphicRef } from "@components/View";
import { cn } from "@utils/cn";

const SelectablePDFCardVariants = cva(
  `
  flex cursor-pointer
  `,
  {
    variants: {
      color: {
        normal: "",
        selected: "",
        hover: "",
      },
      size: {
        sm: "",
        normal: "",
        magnified: "",
      },
      radius: {
        none: "",
        sm: "",
        md: "",
        lg: "",
        full: "",
      },
    },
  },
);

export type SelectablePDFCardVariant = VariantProps<typeof SelectablePDFCardVariants>;

export type SelectablePDFCardProps<T extends ElementType> = PolymorphicProps<T> &
  SelectablePDFCardVariant;

const SelectablePDFCard = forwardRef(
  <T extends ElementType = "div">(
    { as, color, size, radius, className, children, ...props }: SelectablePDFCardProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    return (
      <View
        as={as || "div"}
        className={cn(SelectablePDFCardVariants({ color, size, radius, className }))}
        ref={ref}
        {...props}>
        {children}
      </View>
    );
  },
);

export default SelectablePDFCard;

SelectablePDFCard.displayName = "SelectablePDFCard";
