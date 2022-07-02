import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import Icon from "../Icon";

interface CollapsableProps {
  children: ReactNode;
  isCollapsed: boolean;
  items: { name: string; data: any; icon: string }[];
  onClose: () => void;
}

const Collapsable: FC<CollapsableProps> = ({
  children,
  items,
  isCollapsed,
  onClose,
}) => {
  return (
    <div role='button' className='relative' onClick={onClose}>
      {isCollapsed && (
        <motion.ul
          initial='hidden'
          animate='visible'
          variants={{
            hidden: { opacity: 1, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.01,
                staggerChildren: 0.03,
              },
            },
          }}
          className='absolute bottom-[50px] inset-x-0'
        >
          {items.map((item, index) => {
            return (
              <motion.li
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                  },
                }}
                className='bg-white rounded-full w-9 h-9 flex justify-center items-center my-3'
              >
                <Icon name={item.icon} />
              </motion.li>
            );
          })}
        </motion.ul>
      )}
      <div className='w-10 h-10 flex items-center justify-center rounded-full border text-gray-400 active:bg-[#393939]'>
        {children}
      </div>
    </div>
  );
};

export default Collapsable;
