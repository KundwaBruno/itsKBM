import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: "large" | "small";
  disabled?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  size,
  className,
}) => {
  return (
    <motion.button
      type="submit"
      whileTap={{ scale: !disabled ? 0.9 : 1 }}
      disabled={disabled}
      onClick={onClick}
      className={`button ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
