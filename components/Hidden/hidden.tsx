import { FC } from "react";
import Image from "next/image";
import { FaInfoCircle } from "react-icons/fa";

interface HiddenProps {}

const Hidden: FC<HiddenProps> = () => {
  return (
    <div className='p-8 py-16 w-[90vw] md:w-[450px]'>
      <div className='text-3xl font-extrabold mb-10 flex items-center gap-2 w-[80%] m-auto'>
        <div>
          <FaInfoCircle className='text-gray-400' />
        </div>
        <div>Tips.</div>
      </div>
      <div className='flex flex-col gap-7'>
        <div className='relative h-[150px] w-full m-auto rounded-lg'>
          <Image
            src='/assets/images/tips.png'
            objectFit='contain'
            layout='fill'
            alt='Tip screenshot'
            className='rounded-lg'
          />
        </div>
        <div className='text-gray-500 w-[80%] m-auto'>
          1. Click on the image icon to view a better quality of my profile.
        </div>
        <div className='text-gray-500 w-[80%] m-auto'>
          2. Click on the transitioning texts to view a full list of my
          techstacks and other informations.
        </div>
      </div>
    </div>
  );
};

export default Hidden;
