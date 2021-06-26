import { useState } from "react";

import logoImg from "../assets/images/logo.svg";
import mobImg from "../assets/images/logo-mob.svg";

import RoomCode from "./RoomCode";
import Button from "./Button";

import CloseRoomModal from "../components/CloseRoomModal";
import LeaveRoomModal from "./LeaveRoomModal";

import {
  Container,
  Content,
  ButtonsSection,
  Logo,
  MobLogo,
} from "../styles/components/Header";

interface HeaderProps {
  id: string;
  isAdmin?: boolean;
}

const Header = ({ id, isAdmin }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container>
        <Content>
          <Logo src={logoImg} alt="Logo Letmeask" />
          <MobLogo src={mobImg}  alt="Logo Letmeask" />
          <ButtonsSection>
            <RoomCode code={id} />
            {isAdmin ? (
              <Button isOutlined onClick={() => setIsOpen(true)}>
                Encerrar sala
              </Button>
            ) : (
              <Button isOutlined onClick={() => setIsOpen(true)}>
                Sair da sala
              </Button>
            )}
          </ButtonsSection>
        </Content>
      </Container>
      {isAdmin ? (
        <CloseRoomModal openModal={isOpen} setOpenModal={setIsOpen} />
      ): (
        <LeaveRoomModal openModal={isOpen} setOpenModal={setIsOpen} />
      )}
    </>
  );
};

export default Header;
