import React from 'react';
import Animation from './Animation/Animation';
import Header from '../shared/components/layout/Header';
import './App.css';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

const App = () => (
  <div className="App">
    <Header title="Animation" />
    <Content>
      <Animation />
    </Content>
    <Footer />
  </div>
);

export default App;
