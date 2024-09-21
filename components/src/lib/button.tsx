import styles from './button.module.css';

export function Button({ label, onClick, className }: any) {
  return (
    <button className={`${className}`} onClick={onClick}>
      <h1>{label}</h1>
    </button>
  );
}

export default Button;
