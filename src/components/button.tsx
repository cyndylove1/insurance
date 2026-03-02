interface ButtonProps {
  className?: string;
  text?: string;
  type?: "button" | "submit";
}
export default function Button({ className, text, type }: ButtonProps) {
  return (
    <>
      <button
        type={type}
        className={`rounded-md text-[15px] font-[500] transition-all duration-300 
        hover:shadow-2xl hover:scale-105  ${className}`}
      >
        {text}
      </button>
    </>
  );
}
