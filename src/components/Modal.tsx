import { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { RoomParams } from "../models";
import { database } from "../services/firebase";

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

interface ModalProps {
  openModal: boolean;
  setOpenModal(state: boolean): void;
}

const Modal = ({openModal, setOpenModal}:ModalProps) => {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const history = useHistory();

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, [setOpenModal]);

  async function handleEndRoom() {
    await database.ref(`/rooms/${roomId}`).update({
      closedAt: new Date(),
    });

    history.push("/");
  }

  return (
    <StyledModal
      isOpen={openModal}
      onRequestClose={handleCloseModal}
      style={Overlay}
      contentLabel="Delete Modal"
    >
      <Cancel />
      <Title>Encerrar sala</Title>
      <Text>Tem certeza que deseja encerrar esta sala?</Text>
      <ButtonsSection>
        <CancelButton onClick={handleCloseModal}>Cancelar</CancelButton>
        <DeleteButton onClick={handleEndRoom}>Sim, encerrar</DeleteButton>
      </ButtonsSection>
    </StyledModal>
  );
};

export default Modal;
