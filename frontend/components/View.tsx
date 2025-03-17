import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  Ref,
  forwardRef,
} from "react";

export type Asprop<T extends ElementType> = {
  as?: T;
};

export type PolymorphicRef<T extends ElementType> = Ref<ComponentPropsWithRef<T>["ref"]>;

// without Ref
export type PolymorphicProps<T extends ElementType, Props = unknown> = Asprop<T> &
  ComponentPropsWithoutRef<T>["ref"] &
  Props;

const View = forwardRef(
  <T extends ElementType = "div">(
    { as, className, children, ...props }: PolymorphicProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const Element = as || "div";
    return (
      <Element ref={ref} className={className} {...props}>
        {children}
      </Element>
    );
  },
);

export default View;

View.displayName = "View";
