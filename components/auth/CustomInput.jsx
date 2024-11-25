export default function CustomInput({ type, placeholder, className }) {
  return (
    <input
      type={type}
      className={`w-full outline-none border border-custom-white px-3 py-2 rounded-md ${className}`}
      placeholder={placeholder}
    />
  );
}
