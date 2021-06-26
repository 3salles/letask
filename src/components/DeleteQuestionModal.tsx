import { useCallback } from "react";
import { useParams } from "react-router-dom";
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
  questionId: string;
  openModal: boolean;
  setOpenModal(state: boolean): void;
}

const DeleteQuestionModal = ({
  questionId,
  openModal,
  setOpenModal,
}: ModalProps) => {
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, [setOpenModal]);

  async function handleDeleteQuestion(questionId: string) {
    await database.ref(`/rooms/${roomId}/questions/${questionId}`).remove();
    handleCloseModal();
  }

  return (
    <StyledModal
      isOpen={openModal}
      onRequestClose={handleCloseModal}
      style={Overlay}
      contentLabel="Delete Modal"
    >
      <Cancel />
      <Title>Excluir pergunta</Title>
      <Text>Tem certeza que deseja excluir esta pergunta?</Text>
      <ButtonsSection>
        <CancelButton onClick={handleCloseModal}>Cancelar</CancelButton>
        <DeleteButton onClick={() => handleDeleteQuestion(questionId)}>
          Sim, excluir
        </DeleteButton>
      </ButtonsSection>
    </StyledModal>
  );
};

export default DeleteQuestionModal;
