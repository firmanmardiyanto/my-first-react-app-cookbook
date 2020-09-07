import React from 'react';
import Calculator from '../Calculator/Calculator';
import Header from '../../shared/components/layout/Header';
import Content from '../../shared/components/layout/Content';
import Footer from '../../shared/components/layout/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Header title="React Cookbook" />
    <Content>
      <Calculator />
    </Content>
    <Footer />
  </div>
);

export default App;
