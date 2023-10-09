import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import Icon from '../Icon';

interface CollapsableProps {
  children: ReactNode;
  isCollapsed: boolean;
  items: { name: string; data: any; icon: string }[];
  onClose: () => void;
}

const Collapsable: FC<CollapsableProps> = ({ children, items, isCollapsed, onClose }) => {
  const router = useRouter();

  return (
    <div role="button" className="relative" onClick={onClose}>
      {isCollapsed && (
        <motion.ul
          initial="hidden"
          animate="visible"
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
          className="absolute bottom-[50px] inset-x-0">
          {items.map((item, index) => {
            return (
              <motion.li
                onClick={() => router.replace(item.data)}
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                  },
                }}
                className="bg-white rounded-full w-9 h-9 flex justify-center shadow-md items-center my-3">
                <Icon name={item.icon} />
              </motion.li>
            );
          })}
        </motion.ul>
      )}
      <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-custom_black dark:border-custom_border_dark text-custom_gray active:bg-[#393939]">
        {children}
      </div>
    </div>
  );
};

export default Collapsable;
