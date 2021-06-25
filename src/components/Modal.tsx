import { useState } from "react";

import {
  StyledModal,
  Overlay,
  Title,
  Text,
  ButtonsSection,
  DeleteButton,
  CancelButton,
  Cancel,
} from "../styles/components/Modal";


const Modal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

        <StyledModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={Overlay}
          contentLabel="Delete Modal"
        >
          <Cancel />
          <Title>Encerrar sala</Title>
          <Text>Tem certeza que deseja encerrar esta sala?</Text>
          <ButtonsSection>
          <CancelButton onClick={closeModal}>Cancelar</CancelButton>
          <DeleteButton>Sim, encerrar</DeleteButton>
          </ButtonsSection>
        </StyledModal>
    </div>
  );
};

export default Modal;
