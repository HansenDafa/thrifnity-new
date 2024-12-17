"use client"
import { createContext, useContext, useMemo, useState } from "react";
import DropdownTitle from "./DropdownTitle";
import DropdownMenu from "./DropdownMenu";

const DropdownContext = createContext(null);

export function useDropdownContext() {
  const ctx = useContext(DropdownContext);
  if (!ctx) {
    throw new Error(
      "Dropdown-related components must be wrapped by <Dropdown>"
    );
  }
  return ctx;
}

export default function Dropdown({ children, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleItem() {
    setIsOpen((prev) => !prev);
  }

  const contextValue = useMemo(() => ({ isOpen, toggleItem }), [isOpen]);

  return (
    <DropdownContext.Provider value={contextValue}>
      <div
        className={`${className} w-full h-full`}
        onMouseEnter={toggleItem}
        onMouseLeave={toggleItem}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

Dropdown.Title = DropdownTitle;
Dropdown.Menu = DropdownMenu;
