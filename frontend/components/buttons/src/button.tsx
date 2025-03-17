import { cva, VariantProps } from "class-variance-authority";
import { ElementType, forwardRef } from "react";

import View, { PolymorphicProps, PolymorphicRef } from "@components/View";
import { cn } from "@utils/cn";

const ButtonVariants = cva(
  `
  flex items-center justify-center isolate
  bg-gray-950 text-white cursor-pointer
  rounded-sm font-black text-base border-solid
  transition-all duration-300 ease-in-out font-Interop
  `,
  {
    variants: {
      color: {
        default: "bg-white text-gray-900 hover:bg-gray-900 hover:text-white transition-colors",
        warning:
          "bg-amber-400 text-gray-800 hover:bg-gray-800 hover:text-amber-400 transition-colors",
        danger: "bg-white text-red-600 hover:bg-red-500 hover:text-gray-800 transition-colors",
        submit:
          "bg-white text-purple-600 hover:bg-purple-500 hover:text-gray-800 transition-colors",
        check: "bg-white text-blue-600 hover:bg-blue-500 hover:text-gray-800 transition-colors",
        close: "bg-gray-900 text-white hover:bg-red-500 hover:text-white transition-colors",
      },
      variant: {
        solid: "border-none",
        bordered: "border-2",
        shadow: "border-none shadow-md shadow-current",
      },
      size: {
        default: "p-6",
        mini: "px-2 py-[1px]",
        sm: "px-4 py-2",
        md: "px-8 py-4 text-lg",
        lg: "px-12 py-6 text-2xl",
        xl: "px-20 py-6 text-2xl",
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
      color: "default",
      variant: "solid",
      size: "default",
      radius: "sm",
    },
  },
);

export type ButtonVariant = VariantProps<typeof ButtonVariants>;

export type ButtonProps<T extends ElementType> = PolymorphicProps<T> & ButtonVariant;

const Button = forwardRef(
  <T extends ElementType = "button">(
    { as, color, variant, size, radius, className, children, ...props }: ButtonProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    return (
      <View
        as={as || "button"}
        className={cn(ButtonVariants({ color, variant, size, radius, className }))}
        ref={ref}
        {...props}>
        {children}
      </View>
    );
  },
);

export default Button;

Button.displayName = "Button";
