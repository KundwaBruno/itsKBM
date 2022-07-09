import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: "large" | "small";
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled, size }) => {
  return (
    <motion.button
      type='submit'
      whileTap={{ scale: !disabled ? 0.9 : 1 }}
      disabled={disabled}
      onClick={() => !disabled && onClick && onClick()}
      className={`text-gray-400 border disabled:bg-gray-800 disabled:border-gray-800 disabled:cursor-not-allowed ${
        size === "small" ? "p-3 text-sm " : "p-4 text-sm min-w-[120px]"
      }  rounded-lg`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
