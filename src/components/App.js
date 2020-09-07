import React from 'react';
import Xss from './Xss/Xss';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Header title="Understanding Pure Components" />
    <Content>
      <Xss />
    </Content>
    <Footer />
  </div>
);

export default App;
