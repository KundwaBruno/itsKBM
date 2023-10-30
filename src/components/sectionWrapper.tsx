import { FC } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper: FC<Props> = ({ children, className, id }) => {
  return (
    <div id={id} className={`py-16 ${className}`}>
      <div className="w-11/12 md:w-[84%] max-w-screen-2xl m-auto md:px-36">{children}</div>
    </div>
  );
};

export default SectionWrapper;
