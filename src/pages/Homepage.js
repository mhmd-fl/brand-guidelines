import React, { useState } from "react";
import styled from "styled-components";
import Fonts from "./Fonts";
import LogoPage from "./Logos";

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TabButton = styled.button`
  border: none;
  background-color: transparent;
  color: #999;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    color: #333;
    border-bottom: 2px solid #333;
  }

  ${(props) =>
    props.active &&
    `
    color: #333;
    border-bottom: 2px solid #333;
  `}
`;

const TabContent = styled.div`
  margin-top: 20px;
`;

function Tabs() {
  const tabs = [
    { title: "Typography", content: <Fonts /> },
    { title: "Logos", content: <LogoPage /> },
    { title: "Color", content: <div>This is the content of Tab 3</div> },
    { title: "Layout and Planes", content: <div>This is the content of Tab 4</div> },
    { title: "Visual Imagery", content: <div>This is the content of Tab 5</div> },
    { title: "Shape", content: <div>This is the content of Tab 6</div> }
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <TabsContainer>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            onClick={() => handleTabClick(index)}
            active={activeTab === index}
          >
            {tab.title}
          </TabButton>
        ))}
      </TabsContainer>
      <TabContent>
        {tabs.map((tab, index) => (
          <div key={index} style={{ display: activeTab === index ? "block" : "none" }}>
            {tab.content}
          </div>
        ))}
      </TabContent>
    </div>
  );
}

export default Tabs;
