import { cva, VariantProps } from "class-variance-authority";
import { ElementType, forwardRef } from "react";

import View, { PolymorphicProps, PolymorphicRef } from "@components/View";
import { cn } from "@utils/cn";

const NotificationCardVariants = cva(
  `
  grid font-Interop 
  p-8 gap-x-12 gap-y-4 
  `,
  {
    variants: {
      color: {
        danger: "text-red-400",
        warning: "text-amber-500",
        waiting: "text-green-600",
      },
      variant: {
        solid: "",
        bordered: "border-y-2 border-current",
        shadow: " shadow-current shadow-md",
      },
      size: {
        sm: "p-4 gap-x-4 gap-y-3",
        md: "p-8 gap-x-12 gap-y-4 ",
        lg: "p-10 gap-x-16 gap-y-6 text-3xl",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      {
        color: "danger",
        variant: "solid",
        className: "bg-red-400 text-black drop-shadow-[0_0_0.6px_rgba(0,0,0,0.6)] ",
      },
      {
        color: "warning",
        variant: "solid",
        className: "bg-amber-500 text-black drop-shadow-[0_0_0.6px_rgba(0,0,0,0.6)]",
      },
      {
        color: "waiting",
        variant: "solid",
        className: "bg-green-600 text-black drop-shadow-[0_0_0.6px_rgba(0,0,0,0.6)]",
      },
    ],

    defaultVariants: {
      color: "danger",
      variant: "solid",
      size: "md",
      radius: "lg",
    },
  },
);

export type NotificationCardVariant = VariantProps<typeof NotificationCardVariants>;

export type NotificationCardProps<T extends ElementType> = PolymorphicProps<T> &
  NotificationCardVariant;

const NotificationCard = forwardRef(
  <T extends ElementType = "div">(
    { as, color, variant, size, radius, className, data, ...props }: PolymorphicProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    return (
      <View
        as={as || "div"}
        className={cn(NotificationCardVariants({ color, variant, size, radius, className }))}
        ref={ref}
        style={{
          gridTemplateColumns: "1fr 1fr",
          gridTemplateAreas: `
            "hospitalName title"
            ". createAt"
          `,
        }}
        {...props}>
        <p
          className="flex justify-start items-center font-semibold text-3xl;"
          style={{ gridArea: "hospitalName" }}>
          {data.hospitalName}
        </p>
        <p
          className="flex justify-end items-center font-black text-2xl"
          style={{ gridArea: "title" }}>
          {data.title}
        </p>
        <p
          className="flex justify-end text-xl drop-shadow-[0_0_0.6px_rgba(0,0,0,0.3)]"
          style={{ gridArea: "createAt" }}>
          {data.createAt}
        </p>
      </View>
    );
  },
);

export default NotificationCard;

NotificationCard.displayName = "NotificationCard";
