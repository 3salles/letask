import styled from "styled-components";
import ReactModal from 'react-modal';

import {ReactComponent as CancelSvg} from "../../assets/images/cancel.svg"

export const Overlay = {
  overlay: {
    backgroundColor: 'rgba(5, 2, 6, 0.85)'
  }
}

export const StyledModal = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  border-radius: 8px;
  padding: 32px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.125rem;
  margin-bottom: 0.75rem;
  color: var(--very-dark-blue-black);
`

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.625rem;
  color: var(--dark-grayish-blue);
  margin-bottom: 2.5rem;
`

export const ButtonsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;

  button {
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`

export const DeleteButton = styled.button`
  background: var(--bright-red);
  color: var(--white);
`

export const CancelButton = styled.button`
  background: #DBDCDD;
  color: var(--dark-grayish-blue);
`

export const Cancel = styled(CancelSvg)`
  margin-bottom: 1.5rem;
`