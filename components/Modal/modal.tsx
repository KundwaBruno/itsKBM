import { FC, ReactNode, useRef } from "react";
import useOutsideClick from "../../lib/hooks/useOutsideClick";
import { motion } from "framer-motion";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, isOpen, handleClose }) => {
  const modalRef = useRef<any>();
  useOutsideClick(modalRef, handleClose);
  return (
    <motion.div
      className={` ${
        isOpen ? "flex" : "hidden"
      } fixed inset-0 backdrop-blur-[2px] w-screen h-screen  items-center justify-center z-[1000] overflow-auto`}
    >
      {isOpen && (
        <motion.div
          initial={{ scale: 0, rotate: 30 }}
          animate={{ scale: 1, rotate: 0 }}
          className='bg-white rounded-lg p-5'
          ref={modalRef}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Modal;
