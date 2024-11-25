export default function MainButton({ children, className, type }) {
  return (
    <button
      type={type}
      className={`bg-custom-sage text-white px-4 py-2 hover:bg-teal-700 ${className}`}
    >
      {children}
    </button>
  );
}
