import Home from "./pages/Home"
import NewRoom from "./pages/NewRoom";
import GlobalStyle from "./styles/global";

import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Route path="/" exact component={Home} />
    <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
