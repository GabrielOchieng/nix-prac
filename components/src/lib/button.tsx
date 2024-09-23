interface ButtonProps {
  label: string;
  onClick: () => void;
  className: string;
}

export function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button className={`${className}`} onClick={onClick}>
      <h1>{label}</h1>
    </button>
  );
}

export default Button;

// FINE_GRAINED_TOKEN- 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


// git remote set-url origin https://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@github.com/GabrielOchieng/lindapay-web