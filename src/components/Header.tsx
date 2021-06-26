import { useState } from "react";

import logoImg from "../assets/images/logo.svg";

import RoomCode from "./RoomCode";
import Button from "./Button";

import Modal from "../components/Modal";

import {
  Container,
  Content,
  ButtonsSection,
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
          <img src={logoImg} alt="Logo Letmeask" />
          <ButtonsSection>
            <RoomCode code={id} />
            {isAdmin && (
              <Button isOutlined onClick={() => setIsOpen(true)}>
                Encerrar sala
              </Button>
            )}
          </ButtonsSection>
        </Content>
      </Container>
      <Modal
        openModal={isOpen}
        setOpenModal={setIsOpen}
      />
    </>
  );
};

export default Header;
