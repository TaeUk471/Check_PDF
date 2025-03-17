import { cva, VariantProps } from "class-variance-authority";
import { ElementType, forwardRef } from "react";

import Button from "@components/buttons/src/button";
import View, { PolymorphicProps, PolymorphicRef } from "@components/View";
import { cn } from "@utils/cn";

const AlertVariants = cva(
  `
  flex justify-center items-start w-[300px] font-bold
  border-solid border-2 font-Interop relative
  rounded-lg animate-slideDown px-4 py-3
  `,
  {
    variants: {
      color: {
        check: "bg-blue-400 text-gray-800",
        warning: "bg-amber-400 text-gray-800",
        danger: "bg-white text-red-600",
        submit: "bg-white text-purple-600",
      },
      variant: {
        solid: "",
        bordered: "",
        shadow: "",
      },
    },
    defaultVariants: {
      color: "check",
      variant: "solid",
    },
  },
);

export type AlertVariant = VariantProps<typeof AlertVariants>;

type AlertProps<T extends ElementType> = PolymorphicProps<T> & AlertVariant;

const Alert = forwardRef(
  <T extends ElementType = "div">(
    { onClose, as, color, variant, className, children, ...props }: AlertProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    return (
      <View
        as={as || "div"}
        className={cn(AlertVariants({ color, variant }), className)}
        ref={ref}
        {...props}>
        {children}
        <Button
          color={color}
          size={"mini"}
          variant={"bordered"}
          radius={"full"}
          className={"absolute top-[-10px] right-[-10px]"}
          onClose={() => onClose}>
          <i className="fa fa-x" />
        </Button>
      </View>
    );
  },
);

export default Alert;

Alert.displayName = "Alert";
