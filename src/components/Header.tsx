import logoImg from "../assets/images/logo.svg";

import RoomCode from "./RoomCode";
import Button from "./Button";

import {
  Container,
  Content,
  ButtonsSection,
} from "../styles/components/Header";
import { database } from "../services/firebase";
import { useHistory, useParams } from "react-router-dom";
import { RoomParams } from "../models";
import { useRoom } from "../hooks/UseRoom";

interface HeaderProps {
  id: string;
  isAdmin?: boolean;
}

const Header = ({ id, isAdmin }: HeaderProps) => {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  
  async function handleEndRoom() {
    await database.ref(`/rooms/${roomId}`).update({
      closedAt: new Date(),
    });

    history.push('/');
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Letmeask" />
        <ButtonsSection>
          <RoomCode code={id} />
          {isAdmin && (
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          )}
        </ButtonsSection>
      </Content>
    </Container>
  );
};

export default Header;
