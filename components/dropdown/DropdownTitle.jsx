

export default function DropdownTitle({ children, className = "" }) {
  return (
    <p className={`${className} hover:cursor-default flex items-center`}>
      {children}
    </p>
  );
}
