import { FC, HTMLProps } from "react";

interface InputProps {
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps & HTMLProps<HTMLInputElement>> = (props) => {
  const { className } = props;
  return (
    <div>
      <input
        placeholder="Type something ..."
        className={`dark:text-gray-400 text-custom_black border-2 border-custom_gray bg-background_light placeholder:text-custom_gray rounded-xl p-3 w-full ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
