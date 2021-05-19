import logo from './logo.svg';
import './App.css';
import MyRenderer from './MyRenderer';
// import ParentComponent from './component/view/ParentComponent';
import React, { useState } from "react";
// import { Layout } from "antd";
import TopicMenu from "./component/share/TopicMenu";

import "./App.css";

import NavBar from "./component/share/NavBar/NavBar";
import SideBar from "./component/share/SideBar/SideBar";

// const { Header, Footer, Sider, Content } = Layout;

function App() {
  // var DateTimeField = require('react-bootstrap-datetimepicker');

  // return (
  //   <div className="App">
  //     {/* <DateTimeField /> */}
  //     <MyRenderer />
  //   </div>
  // );


  const topics = ["First topic", "Second topic", "Third topic"];
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState("0");
  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
    setContentIndex(+key);
  };
  const Menu = (
    <TopicMenu
      topics={topics}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );
  return (
    <div className="App">
      {/* <NavBar menu={Menu} />
      <Layout>
        <SideBar menu={Menu} />
        <Layout.Content className="content">
          {topics[contentIndex]}
        </Layout.Content>
      </Layout> */}

      {/* <Layout style={{height:"100vh"}}>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout> */}
    </div>
  );
}

export default App;
