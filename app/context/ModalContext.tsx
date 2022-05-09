import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export type ModalProps = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
};

export const ModalContext = createContext<null | ModalProps>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);
  const toggleModal = useCallback(() => setOpen(!isOpen), [isOpen]);

  const value = useMemo(() => {
    return {
      isModalOpen: isOpen,
      openModal,
      closeModal,
      toggleModal,
    };
  }, [isOpen, openModal, closeModal, toggleModal]);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error(`useModal must be used within a ModalContext provider.`);
  return context;
};
