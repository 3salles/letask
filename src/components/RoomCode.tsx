import copyImg from '../assets/images/copy.svg'

import { Button } from "../styles/components/RoomCode"

const RoomCode = () => {
  return (
    <Button title="Copiar código">
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span>Sala #Hgfgfh6779</span>
    </Button>
  )
}

export default RoomCode;
