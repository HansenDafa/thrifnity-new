import { useDropdownContext } from "./Dropdown";

export default function DropdownMenu({ children, className = "" }) {
  const { isOpen } = useDropdownContext();
  return isOpen ? (
    <div className={`${className} absolute`}>{children}</div>
  ) : (
    <div className={`${className} hidden`}>{children}</div>
  );
}
