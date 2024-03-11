import { FC } from 'react';

interface Props {
  title: string;
  description?: string;
}

const SectionHeader: FC<Props> = ({ title, description }) => {
  return (
    <div className="m-auto text-center mb-16">
      <h2 className="dark:text-custom_white text-custom_black font-extrabold mb-4 tracking-tighter text-2xl md:text-3xl">
        {title}
      </h2>
      {description && (
        <p
          className="dark:text-custom_gray text-custom_black m-auto  flex-1 text-center max-w-[600px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
};

export default SectionHeader;
