import copyImg from '../assets/images/copy.svg'

import { Button } from "../styles/components/RoomCode"

import toast, { Toaster } from 'react-hot-toast';

interface RoomCodeProps {
  code: string;
}

const copiedSuccess = () => toast.success('Código da sala copiado!');

const RoomCode = ({ code }: RoomCodeProps) => {

  function copyRoomCodeToClipboard(){
    navigator.clipboard.writeText(code)
    copiedSuccess();
  }

  return (
    <>
    <Button title="Copiar código" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span>Sala #{code}</span>
    </Button>
    <Toaster />
    </>
  )
}

export default RoomCode;
