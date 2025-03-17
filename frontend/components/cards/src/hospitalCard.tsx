import { cva, VariantProps } from "class-variance-authority";
import { ElementType, forwardRef } from "react";

import Button from "@components/buttons/src/button";
import Delete from "@components/modals/src/delete";
import View, { PolymorphicProps, PolymorphicRef } from "@components/View";
import useToggle from "@hooks/useToggle";
import { cn } from "@utils/cn";
import { useMutationStreamLine } from "middleware/reactQuery.middleware";

const HospitalCardVariants = cva(
  `
  flex justify-between items-center border-2 
  hover:ring-2 hover:ring-inherit hover:ring-offset-1 hover:ring-green-700
  transition-all duration-300 gap-8 gap-y-8 cursor-pointer w-full
  px-12 py-6
  `,
  {
    variants: {
      color: {
        default: "border-y-2 border-slate-900",
        disabled: "border-gray-600 opacity-50 cursor-none",
      },
      variant: {
        solid: "",
        bordered: "border-2",
        shadow: " shadow-current shadow-md",
      },
      size: {
        mb: "scale-75 hover:scale-73",
        tb: "hover:scale-99",
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
      color: "default",
      variant: "bordered",
      size: "tb",
      radius: "lg",
    },
  },
);

export type HospitalCardVariant = VariantProps<typeof HospitalCardVariants>;

export type HospitalCardProps<T extends ElementType, D = HospitalCardData> = PolymorphicProps<T> &
  HospitalCardVariant & { data?: D };

type HospitalCardData = {
  hospitalId: number;
};

const HospitalCard = forwardRef(
  <T extends ElementType = "div">(
    { as, color, variant, size, radius, className, data, ...props }: HospitalCardProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const { mutateAsync: deleteHospital } = useMutationStreamLine({
      mutationKey: "deleteHospital",
    });

    const handleDeleteHospital = async () => {
      console.log(data.hospitalId);
      const removedHospital = await deleteHospital({
        hospitalId: Number(`${data.hospitalId}`),
      });
      console.log("삭제 완료?:", removedHospital);
    };

    const { open, close, isOpen } = useToggle();

    return (
      <View
        as={as || "div"}
        className={cn(HospitalCardVariants({ color, variant, size, radius, className }))}
        ref={ref}
        {...props}>
        <div className="font-Interop text-4xl">{data.hospitalName}</div>
        <div className="flex items-center gap-4">
          <div className="font-poppins font-black text-[18px]">{data.hospitalId}</div>
          <Button
            color={"danger"}
            variant={"bordered"}
            size={"default"}
            radius={"full"}
            onClick={open}>
            <i className="fa fa-minus" />
          </Button>
          <Delete isOpen={isOpen} onCloseAction={close} onButtonClickAction={handleDeleteHospital}>
            <p className="font-Interop text-2xl px-4">{data.hospitalName}을 제거하시겠습니까?</p>
          </Delete>
        </div>
      </View>
    );
  },
);

export default HospitalCard;

HospitalCard.displayName = "HospitalCard";
