import { FC } from 'react';

interface Props {
  title: string;
  description: string;
}

const SectionHeader: FC<Props> = ({ title, description }) => {
  return (
    <div className="m-auto text-center">
      <h2 className="dark:text-custom_white text-custom_black font-extrabold mb-8 tracking-tighter text-3xl md:text-5xl">
        {title}
      </h2>
      <p
        className="dark:text-custom_gray text-custom_black m-auto mb-16  flex-1 text-center max-w-[600px]"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default SectionHeader;
