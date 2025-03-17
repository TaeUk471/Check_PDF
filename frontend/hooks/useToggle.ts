import { useCallback, useState } from "react";

const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return { isOpen, close, open, toggle };
};

export default useToggle;
