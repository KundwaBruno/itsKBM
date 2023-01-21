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
        className={`text-gray-400  border-b placeholder:text-gray-600 border-gray-500 py-3  text-sm bg-transparent outline-none w-full ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
