import React, { Component } from 'react';
// import Home from "./Home/Home";
// import Todo from "./Todo/Todo";
// import Timer from "./Pomodoro/Timer";
// import Coins from "./Coins/Coins";
import Notes from './Notes/Notes';
import Header from '../shared/components/layout/Header';
import './App.css';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

import { notes1, notes2 } from './Notes/Data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: notes1,
    };
  }

  componentDidMount() {
    // setelah 10 detik catatan ditambah dengan notes2
    setTimeout(() => {
      this.setState({
        notes: [...this.state.notes, ...notes2],
      });
    }, 10000);
  }

  render() {
    return (
      <div className="App">
        <Header title="Notes" />
        <Content>
          <Notes notes={this.state.notes} />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
