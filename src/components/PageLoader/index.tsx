import { FC } from "react";
import Image from "next/image";
import { My_Logo } from "../../lib/images";
import { motion } from "framer-motion";

const PageLoader: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-screen h-screen flex items-center justify-center"
    >
      <div className="w-[80px] h-[80px] relative animate-bounce">
        <Image
          alt="website_logo"
          src={My_Logo}
          className="cursor-pointer"
          fill
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </motion.div>
  );
};

export default PageLoader;
