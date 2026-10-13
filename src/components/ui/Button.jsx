import './Button.css';

export function Button({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`button button--${variant}`}
    >
      {children}
    </button>
  );
}