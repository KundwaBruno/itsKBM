import { FC, ReactNode } from "React";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <motion.button
      whileTap={{ scale: 1.05 }}
      onClick={onClick}
      className='text-gray-400 border p-4 rounded-lg min-w-[120px] '
    >
      {children}
    </motion.button>
  );
};

export default Button;
