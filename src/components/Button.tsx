import { FC, ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  _isFullSize?: boolean;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  _isFullSize,
  children,
}) => {
  return (
    <button
      className={`btn ${
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary"
          : "btn-outline"
      } hover:cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
