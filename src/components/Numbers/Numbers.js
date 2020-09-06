import React, { Component } from 'react';
import Result from './Result';
import './Numbers.css';

class Numbers extends Component {
  constructor() {
    super();
    this.state = {
      numbers: '',
      results: [],
    };
  }

    handleNumberChange = (e) => {
      const { target: { value } } = e;
      // converting string value to array
      // "12345" to ["1","2","3","4","5"]
      const numbers = Array.from(value);
      // summing all number
      const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);

      this.setState((prevState) => ({
        numbers: value,
        results: [...prevState.results, result],
      }));

      console.log(this.state.results);
    }

    render() {
      return (
        <div className="Numbers">
          <input type="number" value={this.state.numbers} onChange={this.handleNumberChange} />
          <ul>
            {this.state.results.map((result, i) => (
              <Result key={i} result={result} />
            ))}
          </ul>
        </div>
      );
    }
}

export default Numbers;
