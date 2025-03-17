import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, ElementType } from "react";

import Bell from "@components/buttons/src/bell";
import Button from "@components/buttons/src/button";
// import Dropdown from "@components/Dropdowns/src/dropdown";
import { PolymorphicProps, PolymorphicRef } from "@components/View";
import { cn } from "@utils/cn";

interface User {
  id: string;
  name: string;
}

const HeaderVariants = cva(
  "sticky top-0 left-0 flex items-center h-24 justify-between shadow-inner-2xl z-20 p-4 border-y-2 border-stone-400",
  {
    variants: {
      isSigned: {
        guest: "",
        admin: "",
      },
    },
  },
);

export type HeaderVariant = VariantProps<typeof HeaderVariants>;

type HeaderProps<T extends ElementType> = PolymorphicProps<T> &
  HeaderVariant & {
    user?: User | null;
    hasProblem?: boolean;
  };

const Header = forwardRef(
  <T extends ElementType = "div">(
    { hasProblem = false, user, isSigned, className, as, ...props }: HeaderProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const Component = as || "header";

    return (
      <Component
        className={cn(HeaderVariants({ isSigned }), className)}
        ref={ref}
        role="banner"
        {...props}>
        <Link href={"/"}>
          <Image src="/logo/Mediage_logo.png" alt="mediage" width={120} height={30} priority />
        </Link>
        {user ? (
          <div className="flex items-center space-x-6">
            <Link href={"/"}>
              <p className="font-poppins text-2xl font-black text-black border-x-2 px-12 rounded-sm">
                Main Page
              </p>
            </Link>
            <Link href={"/hospitals"}>
              <p className="font-poppins text-2xl font-black text-black border-x-2 px-12 rounded-sm">
                Hospital Page
              </p>
            </Link>
            {/* <Dropdown
              placeClassName={"mt-[60px]"}
              className={"flex w-[100px] h-fit items-center justify-center"}
              trigger={
                <div className="font-poppins text-2xl font-black border-x-2 px-12 rounded-lg">
                  Page
                </div>
              }>
              <div>Dummy1</div>
              <div>Dummy2</div>
            </Dropdown> */}
            <Bell hasNotifications={hasProblem} />
            <span className="text-xl font-poppins font-bold">
              안녕하세요,{" "}
              <strong>
                {user.name} ({user.id})
              </strong>
              님
            </span>
            <Button as="button" color="default" variant="bordered" size="md" radius="lg">
              로그아웃
            </Button>
          </div>
        ) : (
          <div className="flex">
            <Button as="a" href="#" color="default" variant="bordered" size="md" radius="lg">
              로그인
            </Button>
            <Button
              as="a"
              href="#"
              className="ml-4"
              color="default"
              variant="bordered"
              size="md"
              radius="lg">
              회원가입
            </Button>
          </div>
        )}
      </Component>
    );
  },
);

Header.displayName = "Header";

export default Header;
