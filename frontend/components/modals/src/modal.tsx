"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Button from "@components/buttons/src/button";

type ButtonColor = "default" | "warning" | "submit" | "danger" | "check" | "close";

export interface ModalProps {
  title?: string;
  children?: ReactNode;
  onCloseAction: () => void;
  buttonName?: string;
  buttonColor?: ButtonColor;
  onButtonClickAction: () => void;
  zIndex?: number;
}

export default function Modal({
  title,
  children,
  onCloseAction,
  buttonName,
  buttonColor,
  onButtonClickAction: onButtonClickAction,
  zIndex = 50,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseAction();
      }
    };
    document.addEventListener("keydown", handleEsc);

    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        onButtonClickAction();
      }
    };
    document.addEventListener("keydown", handleEnter);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("keydown", handleEnter);
    };
  }, [onButtonClickAction, onCloseAction]);

  if (typeof window === "undefined") return null;

  const modalElement = document.getElementById("modal");

  return mounted && modalElement
    ? createPortal(
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 0.3, type: "spring" }}
          className={"fixed inset-0 bg-black/60 flex justify-center items-center"}
          style={{ zIndex }}
          onClick={onCloseAction}
          role="dialog"
          aria-labelledby="modal-title"
          aria-hidden={!mounted}>
          <div
            className="px-6 py-24 min-w-[320px] bg-white rounded-lg relative font-Interop shadow-2xl shadow-black"
            onClick={event => event.stopPropagation()}>
            <Button
              className="absolute top-4 right-4 font-black"
              size={"sm"}
              radius={"full"}
              onClick={onCloseAction}>
              <i className="fa fa-x" />
            </Button>
            <h2 id="modal-title" className="absolute top-6 left-8 text-3xl font-bold font-Interop">
              {title}
            </h2>
            {children}
            {buttonName && (
              <Button
                className="absolute bottom-2 right-4 font-black"
                size={"md"}
                color={buttonColor}
                variant={"bordered"}
                radius={"full"}
                onClick={onButtonClickAction}>
                {buttonName}
              </Button>
            )}
          </div>
        </motion.div>,
        modalElement,
      )
    : null;
}
