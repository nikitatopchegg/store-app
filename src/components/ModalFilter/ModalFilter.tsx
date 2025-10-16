import type { FC, ReactNode } from "react";
import { CloseButton, ModalContent, Overlay } from "./ModalFilter.style";
import ReactDOM from "react-dom";

interface ModalFilterProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalFilter: FC<ModalFilterProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export default ModalFilter;
