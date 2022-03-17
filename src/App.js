import HeaderComponent from "./components/header/HeaderComponent";
import BodyComponent from "./components/body/BodyComponent";
import GlobalStyle from "./styles/global.style";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <BodyComponent />
    </>
  );
}

export default App;
