import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fonts from "./pages/Fonts";
import Navbar from "./pages/components/Navbar";
import Tabs from "./pages/Homepage";
import styled from "styled-components";
import LogoPage from "./pages/Logos";
import Layout from "./Layout";

const AppContainer = styled.div`
  padding: 20px;
`;

function App () {
  return (
    <AppContainer>
    <Layout>
    <Navbar />
      <Router>
        <Routes>
          <Route exact path="/fonts" element={<Fonts />}></Route>
          <Route exact path="/" element={<Tabs />}></Route>
          <Route exact path="/logos" element={<LogoPage />}></Route>
        </Routes>
      </Router>
      </Layout>
      </AppContainer>
  );
}

export default App;
