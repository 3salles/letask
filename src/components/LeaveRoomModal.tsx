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

const LeaveRoomModal = ({openModal, setOpenModal}:ModalProps) => {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const history = useHistory();

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, [setOpenModal]);

  async function handleLeaveRoom() {
    history.push("/");
  }

  return (
    <StyledModal
      isOpen={openModal}
      onRequestClose={handleCloseModal}
      style={Overlay}
      contentLabel="Leave Room Modal"
    >
      <Cancel />
      <Title>Encerrar sala</Title>
      <Text>Deseja realmente sair da sala?</Text>
      <ButtonsSection>
        <CancelButton onClick={handleCloseModal}>Cancelar</CancelButton>
        <DeleteButton onClick={handleLeaveRoom}>Sair</DeleteButton>
      </ButtonsSection>
    </StyledModal>
  );
};

export default LeaveRoomModal;
