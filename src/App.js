import React, { useState } from "react";
import GlobalStyle from './styles/GlobalStyle';
import AppRouter from "./component/route/RouterComponent";
import { WebcamProvider } from "./component/context/WebcamContext";
import { SearchProvider } from "./component/context/SearchContext";

//app
function App() {
  const [loginModalOpen, setloginModalOpen] = useState(false);

  return (
    <div className="App">
      <WebcamProvider>
        <SearchProvider>
          <GlobalStyle/>
          <AppRouter/>
        </SearchProvider>
      </WebcamProvider>
    </div>
  );
}

export default App;
