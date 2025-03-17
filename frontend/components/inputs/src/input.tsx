import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, useEffect, useRef, useState } from "react";
import { ElementType, HTMLInputTypeAttribute, ReactNode } from "react";

import View, { PolymorphicProps, PolymorphicRef } from "@components/View";
import { cn } from "@utils/cn";

const InputVariants = cva(
  `flex items-center rounded-sm px-4 py-2 
  focus-within:ring-2 focus-within:ring-offset-1 transition-all font-Interop`,
  {
    variants: {
      color: {
        normal: "bg-white border-b-2 border-gray-400 text-gray-800 focus-within:ring-gray-500",
        error: "bg-white border-b-2 border-red-500 text-gray-800 focus-within:ring-red-500",
        search: "bg-gray-100 border-b-2 border-green-700 text-gray-800 focus-within:ring-gray-500",
      },
      size: {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-3xl px-8 py-3",
      },
      isOutlined: {
        true: "bg-transparent border-2",
        false: "",
      },
      isActivated: {
        true: "focus-within:ring-blue-500",
        false: "",
      },
      disabled: {
        true: "opacity-60 cursor-not-allowed",
        false: "",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full ",
      },
    },
    defaultVariants: {
      color: "normal",
      size: "md",
      isOutlined: false,
      isActivated: false,
    },
  },
);

export type InputVariant = VariantProps<typeof InputVariants>;

export type InputProps<T extends ElementType> = PolymorphicProps<T> &
  InputVariant & {
    type?: HTMLInputTypeAttribute;
    startContent?: ReactNode;
    endContent?: ReactNode;
    onFileSelect?: (files: FileList | null) => void;
    value?: string;
    defaultValue?: string;
    autoFocus?: boolean;
    accept?: string;
  };

const Input = forwardRef(
  <T extends ElementType = "input">(
    {
      as,
      type = "text",
      color,
      size,
      radius,
      disabled,
      isOutlined,
      isActivated,
      startContent,
      endContent,
      className,
      onFileSelect,
      onChangeAction,
      inputClassName,
      value,
      defaultValue,
      autoFocus = false,
      accept,
      ...props
    }: InputProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue || "");

    useEffect(() => {
      if (autoFocus && inputRef.current) {
        inputRef.current.focus();
      }
    }, [autoFocus]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onFileSelect) {
        onFileSelect(e.target.files);
      }
    };

    const handleFileInputClick = () => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };

    if (type === "file" || type === "date") {
      return (
        <div
          className={cn(
            "relative flex items-center rounded-lg px-4 py-2 cursor-pointer",
            InputVariants({ color, size, radius, isOutlined }),
          )}
          onClick={type === "file" ? handleFileInputClick : undefined}>
          {startContent && <span className="mr-4">{startContent}</span>}
          <span className="text-gray-500 font-Interop font-bold">
            {props.placeholder || "파일 선택"}
          </span>
          <input
            type={type}
            ref={inputRef}
            className="hidden"
            onChange={handleFileChange}
            accept={type === "file" ? accept : undefined}
            {...props}
          />
          {endContent && <span className="ml-2">{endContent}</span>}
        </div>
      );
    }

    return (
      <div
        className={cn(
          "relative flex items-center",
          InputVariants({ color, size, radius, isOutlined, isActivated, disabled, className }),
        )}>
        {startContent && <span className="mr-4 pointer-events-none">{startContent}</span>}
        <View
          as={as || "input"}
          type={type}
          ref={node => {
            if (ref) {
              if (typeof ref === "function") {
                ref(node);
              } else {
                ref.current = node;
              }
            }
            inputRef.current = node;
          }}
          className={`flex-grow bg-transparent focus:outline-none ${inputClassName}`}
          disabled={disabled}
          value={value !== undefined ? value : uncontrolledValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (value !== undefined) {
              onChangeAction?.(e);
            } else {
              setUncontrolledValue(e.target.value);
            }
          }}
          {...props}
        />
        {endContent && <span className="ml-2 pointer-events-none">{endContent}</span>}
      </div>
    );
  },
);

export default Input;
Input.displayName = "Input";
