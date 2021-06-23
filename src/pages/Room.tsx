import Button from "../components/Button";
import Header from "../components/Header";

const Room = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar?" />
          <div>
            <span>
              Para enviar uma pergunta,
              <button>faça seu login</button>.
              <Button type="submit">Enviar pergunta</Button>
            </span>
          </div>
        </form>
      </main>
    </>
  );
};

export default Room;
