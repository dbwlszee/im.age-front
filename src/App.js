import styled from "styled-components"
import GlobalStyle from './styles/GlobalStyle';
import Nav from "./component/user/Nav";
import AppRouter from "./component/route/RouterComponent";
import WebcamStatus from "./component/page/ProductList/WebcamStatus";
import { WebcamProvider } from "./component/context/WebcamContext";

//style
styled(Nav)`
  position: absolute;
  left: 0px;
  top: 0px;
`;

//app
function App() {
  return (
    <div className="App">
      <WebcamProvider>
        <GlobalStyle/>
        <Nav/>
        <AppRouter/>
        <WebcamStatus/>
      </WebcamProvider>
    </div>
  );
}

export default App;
