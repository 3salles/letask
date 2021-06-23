import copyImg from '../assets/images/copy.svg'

import { Button } from "../styles/components/RoomCode"

interface RoomCodeProps {
  code: string;
}

const RoomCode = ({ code }: RoomCodeProps) => {
  function copyRoomCodeToClipboard(){
    navigator.clipboard.writeText(code)
    // TODO: Add toast!
    alert('Copiado!')
  }

  return (
    <Button title="Copiar código" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span>Sala #{code}</span>
    </Button>
  )
}

export default RoomCode;
