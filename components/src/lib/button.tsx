interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button className={`${className}`} onClick={onClick}>
      <h1>{label}</h1>
    </button>
  );
}

export default Button;
