import React from "react";
//import Home from "./Home/Home";
import Todo from "./Todo/Todo";
import Header from "../shared/components/layout/Header";
import "./App.css";
import Content from "../shared/components/layout/Content";
import Footer from "../shared/components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Welcome to Codejobs" />
      <Content>
        {/*<Home />*/}
        <Todo />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
