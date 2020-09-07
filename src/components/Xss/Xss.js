/* eslint-disable no-param-reassign */
/* eslint-disable react/no-danger */
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
      <img onmouseover="alert('This site is no secure');" src="attack.jpg" />
      </p>
      `,
  },
];

const initialState = JSON.stringify(response);

const removeXSSAttacks = (html) => {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/sript>)<[^<]*)*<\/script>/gi;

  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, '');
  }

  html = html.replace(/ on\w+="[^"]*"/g, '');

  return html;
};

class Xss extends Component {
  render() {
    const posts = JSON.parse(initialState);

    return (
      <div className="Xss">
        {posts.map((post, key) => (
          <div key={key}>
            <h2>{post.title}</h2>
            <p><strong>Secure Code:</strong></p>
            <p>{post.content}</p>
            <p><strong>Insecure Code:</strong></p>
            <p dangerouslySetInnerHTML={{ __html: removeXSSAttacks(post.content) }} />
          </div>
        ))}
      </div>
    );
  }
}

export default Xss;
