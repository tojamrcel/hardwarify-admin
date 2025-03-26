function Input({ type }: { type: "email" | "password" | "text" | "number" }) {
  return (
    <input
      type={type}
      className="transition-color h-10 rounded-sm border-2 border-transparent bg-stone-100 px-2 text-gray-800 duration-200 focus:border-red-700 focus:outline-0"
    />
  );
}

export default Input;
