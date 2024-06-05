import {ReactNode} from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  isIconClose?: boolean;
  containerClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  isIconClose = false,
  children,
  containerClassName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-150 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className={'relative w-auto mx-auto my-6 ' + containerClassName}>
        <div
          className={
            'relative bg-white border-2 border-gray-300 rounded-md shadow-lg '
          }>
          {isIconClose && (
            <button
              onClick={onClose}
              className="w-full text-right p-3 text-xl text-gray-500 hover:text-gray-700">
              &times;
            </button>
          )}
          <div className="p-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
