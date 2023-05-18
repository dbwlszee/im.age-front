import styled from "styled-components"
import GlobalStyle from './styles/GlobalStyle';
import Nav from "./component/user/Nav";
import AppRouter from "./component/route/RouterComponent";

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
      <GlobalStyle/>
      <Nav/>
      <AppRouter/>
    </div>
  );
}

export default App;
