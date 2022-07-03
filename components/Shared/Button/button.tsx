import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className='text-gray-400 border p-4 rounded-lg min-w-[120px] text-sm'
    >
      {children}
    </motion.button>
  );
};

export default Button;
