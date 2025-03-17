import { cva, VariantProps } from "class-variance-authority";
import { ElementType, forwardRef } from "react";

import View, { PolymorphicProps, PolymorphicRef } from "@components/View";
import { cn } from "@utils/cn";

const DashBoardCardVariants = cva(
  `
  w-[300px] // 임의로 고정
  border-2 px-8 py-4 space-y-8 duration-300
  `,
  {
    variants: {
      color: {
        success: "text-blue-500",
        failure: "text-red-600",
        failure_ratio: " text-orange-500",
        processing: "text-stone-700",
        processing_ratio: "text-gray-500",
      },
      variant: {
        solid: "",
        bordered: "",
        shadow: "border-none shadow-inner-2xl",
      },
      size: {
        sm: " scale-75 hover:scale-73",
        md: "scale-100 hover:scale-97 ",
        lg: "scale-125 hover:scale-121",
        xl: " scale-150 hover:scale-145",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full px-16",
      },
    },
    //확인 요망 (추후에 수정 디자인 부분!)
    compoundVariants: [
      {
        variant: "solid",
        className: (color: string) => {
          console.log("compoundVariant triggered with:", color);
        },
      },
    ],
    defaultVariants: {
      color: "processing",
      variant: "solid",
      size: "xl",
    },
  },
);

export type DashBoardCardVariant = VariantProps<typeof DashBoardCardVariants>;

export type DashBoardCardProps<T extends ElementType> = PolymorphicProps<T> & DashBoardCardVariant;

//만약 data의 타입을 잡아주고 싶다면, data : DashBoardData를 추가해서 data에 한해서 type을 잡아줘야 한다.

const DashBoardCard = forwardRef(
  <T extends ElementType = "div">(
    { as, color, variant, size, radius, className, data, ...props }: DashBoardCardProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    return (
      <View
        as={as || "div"}
        className={cn(DashBoardCardVariants({ color, variant, size, radius, className }))}
        ref={ref}
        {...props}>
        <p className="font-poppins font-black"> {data.title}</p>
        <div className="font-Interop font-light text-black text-lg">{data.description}</div>
        <div className="flex justify-between items-center ">
          <div className="font-Interop font-bold">{data.status}</div>
          <div className="font-Interop font-medium text-4xl">{data.value}</div>
        </div>
      </View>
    );
  },
);

export default DashBoardCard;

DashBoardCard.displayName = "DashBoardCard";
