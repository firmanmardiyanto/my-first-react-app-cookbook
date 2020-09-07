/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

const response = [
  {
    id: 1,
    title: 'My blog post 1...',
    content: '<p>This is <strong>HTML</strong> code</p>',
  },
  {
    id: 2,
    title: 'My blog post 2...',
    content: '<p>Alert: <script>alert(1);</script></p>',
  },
  {
    id: 3,
    title: 'My blog post 3...',
    content: `
      <p>
      <img onmouseover="alert('This site is no secure');" src="attack.jpg />
      </p>
      `,
  },
];

const initialState = JSON.stringify(response);

class Xss extends Component {
  render() {
    const posts = JSON.parse(initialState);

    return (
      <div className="Xss">
        {posts.map((post, key) => (
          <div key={key}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Xss;
