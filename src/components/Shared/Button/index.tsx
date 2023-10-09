import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

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
      className='bg-custom_black p-3 rounded-lg px-5 text-white disabled:opacity-90'
    >
      {children}
    </motion.button>
  );
};

export default Button;
