import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const unmountBotton = document.getElementById('unmount');

function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));

  document.getElementById('unmountMessage').style.display = 'block';

  unmountBotton.remove();
}

unmountBotton.addEventListener('click', unmount);

document.getElementById('unmountMessage').style.display = 'none';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
