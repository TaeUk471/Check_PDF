import { Decorator } from "@storybook/react";
import { useEffect } from "react";

export const WithModalRoot: Decorator = StoryComponent => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      let modalRoot = document.getElementById("modal");

      if (!modalRoot) {
        modalRoot = document.createElement("div");
        modalRoot.id = "modal";
        document.body.appendChild(modalRoot);
      }
    }

    return () => {
      const modalRoot = document.getElementById("modal");
      if (modalRoot && document.body.contains(modalRoot)) {
        document.body.removeChild(modalRoot);
      }
    };
  }, []);

  return <StoryComponent />;
};
