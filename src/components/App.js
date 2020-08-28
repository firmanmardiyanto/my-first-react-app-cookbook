import React from "react";
//import Home from "./Home/Home";
//import Todo from "./Todo/Todo";
import Timer from "./Pomodoro/Timer";
import Header from "../shared/components/layout/Header";
import "./App.css";
import Content from "../shared/components/layout/Content";
import Footer from "../shared/components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Timer" />
      <Content>
        {/*<Home />*/}
        <Timer />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
