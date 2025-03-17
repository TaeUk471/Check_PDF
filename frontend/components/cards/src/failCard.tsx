import { cva, VariantProps } from "class-variance-authority";
import { ElementType, forwardRef } from "react";

import Tag from "@components/tags/src/tag";
import View, { PolymorphicProps, PolymorphicRef } from "@components/View";
import { cn } from "@utils/cn";

const FailCardVariants = cva(
  `                                              
  grid border-2 hover:ring-2 hover:ring-inherit hover:ring-offset-1
  transition-all duration-300 gap-8 gap-y-8 cursor-pointer
  px-12 py-6
  `,
  {
    variants: {
      color: {
        danger: "border-red-600",
        warning: "border-orange-500",
        waiting: "border-green-800",
      },
      variant: {
        solid: "",
        bordered: "border-2",
        shadow: " shadow-current shadow-lg",
      },
      size: {
        mb: "scale-75 hover:scale-73",
        tb: "hover:scale-97",
        pc: "scale-125 hover:scale-121",
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
      color: "danger",
      variant: "bordered",
      size: "pc",
      radius: "lg",
    },
  },
);

export type FailCardVariant = VariantProps<typeof FailCardVariants>;

export type FailCardProps<T extends ElementType> = PolymorphicProps<T> & FailCardVariant;

const FailCard = forwardRef(
  <T extends ElementType = "div">(
    { as, color, variant, size, radius, className, tagColor, data, ...props }: FailCardProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    return (
      <View
        as={as || "div"}
        className={cn(FailCardVariants({ color, variant, size, radius, className }))}
        ref={ref}
        style={{
          gridTemplateColumns: "1fr 1fr",
          gridTemplateAreas: `
            "hospitalName errorTitle tag"
            "fileName fileName fileName"
            "problemMessage problemMessage problemMessage"
          `,
        }}
        {...props}>
        <h2 className="font-Interop font-bold text-3xl" style={{ gridArea: "hospitalName" }}>
          {data.hospitalName}
        </h2>
        <h3 className="font-Interop font-medium text-2xl" style={{ gridArea: "errorTitle" }}>
          {data.errorTitle}
        </h3>
        <p className="font-Interop font-semibold text-xl" style={{ gridArea: "fileName" }}>
          {data.fileName}
        </p>
        {/* 태그 컬러 임의 지정가능 해당 영역에 대한 상위 컴포넌트 지정은 재량에 맡김 */}
        <Tag
          color={tagColor}
          variant={"bordered"}
          size={"mini"}
          radius={"full"}
          style={{ gridArea: "tag" }}>
          {data.tagMessage}
        </Tag>
        <p className="font-Interop font-light text-lg" style={{ gridArea: "problemMessage" }}>
          {data.problemMessage}
        </p>
      </View>
    );
  },
);

export default FailCard;

FailCard.displayName = "FailCard";
