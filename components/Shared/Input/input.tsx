import { FC } from "react";

interface InputProps {
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ className, value, onChange }) => {
  return (
    <div>
      <input
        placeholder="Type something ..."
        onChange={(e) => onChange(e)}
        value={value}
        className={`text-gray-400  border-b placeholder:text-gray-600 border-gray-500 py-3  text-sm bg-transparent outline-none w-full ${className}`}
      />
    </div>
  );
};

export default Input;
