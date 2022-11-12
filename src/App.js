import "./App.css";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { useRecoilState } from "recoil";
import { langOnState, sideOnState } from "./store/state";
import styled from "styled-components";
import MainPage from "./pages/Main";
import IntroPage from "./pages/Intro";
import MainLayout from "./layout/MainLayout";
import CompanyLayout from "./layout/CompanyLayout";
import Ethics from "./pages/Ethics";

function App() {
  const [, setLangOn] = useRecoilState(langOnState);
  const [, setSideOn] = useRecoilState(sideOnState);
  const handleClick = () => {
    setLangOn(false);
    setSideOn(false);
  };

  return (
    <>
      <GlobalStyle />
      <Container onClick={handleClick}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="service" />
          </Route>
          <Route path="/company" element={<CompanyLayout />}>
            <Route index element={<IntroPage />} />
            <Route path="intro" element={<IntroPage />} />
            <Route path="ethics" element={<Ethics />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
