interface ButtonProps {
  label?: string;
  onClick: () => void;
  variant?: string;
  size?: string;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label = "Take the shot!",
  onClick,
  variant = "primary",
  size = "",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      className={`btn btn-${variant} ${size ? `btn-${size}` : ""} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
