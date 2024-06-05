import React from 'react';

type TButton = {
  text: string;
} & React.HTMLAttributes<HTMLDivElement>;

function Button(props: TButton) {
  const {text, onClick} = props;
  return (
    <div
      className="cursor-pointer p-3 rounded-full shadow-md place-items-center bg-red-500 text-white"
      onClick={onClick}>
      {text}
    </div>
  );
}

export default Button;
