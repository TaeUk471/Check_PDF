"use client";

import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, ReactNode } from "react";
import { ElementType } from "react";

import View, { PolymorphicProps, PolymorphicRef } from "@components/View";
import useToggle from "@hooks/useToggle";
import { cn } from "@utils/cn";

const DropdownVariants = cva(
  `
  flex flex-col relative transition-opacity duration-200
  `,
  {
    variants: {
      color: {
        white: "bg-white text-black",
        gray: "bg-gray-800 text-white",
      },
      variant: {
        solid: "shadow-md",
        bordered: "border border-gray-500",
        transparent: "bg-transparent",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-b-sm",
        md: "rounded-b-md",
        lg: "rounded-b-lg",
        full: "rounded-b-full",
      },
    },
    defaultVariants: {
      color: "gray",
      variant: "bordered",
      radius: "lg",
    },
  },
);

export type DropdownVariant = VariantProps<typeof DropdownVariants>;

export type DropdownProps<T extends ElementType> = PolymorphicProps<T> &
  DropdownVariant & {
    children?: ReactNode;
    trigger?: ReactNode;
  };

const Dropdown = forwardRef(
  <T extends ElementType = "div">(
    {
      as,
      color,
      variant,
      radius,
      placeClassName,
      className,
      trigger,
      children,
      ...props
    }: DropdownProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const { isOpen, toggle } = useToggle();

    return (
      <View
        as={as || "div"}
        className={`relative w-fit h-fit justify-center items-center flex flex-col ${placeClassName}`}
        ref={ref}
        {...props}>
        {/* Trigger */}
        <button className={"flex justify-between items-center"} onClick={() => toggle()}>
          <span>{trigger}</span>
        </button>

        {/* Menu */}
        <div
          className={cn(
            "absolute top-0 w-[330px] left-0 mt-2 py-2 px-3 border border-gray-300 gap-4 rounded-md shadow-lg transition-opacity duration-200",
            DropdownVariants({ color, variant, radius, className }),
            isOpen ? "visible opacity-100" : "invisible opacity-0",
          )}>
          {children}
        </div>
      </View>
    );
  },
);

Dropdown.displayName = "Dropdown";
export default Dropdown;
