import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './Main';
import store from './store';

const App = () =>  (
  <Provider store={store}>
    <React.StrictMode>
      <Main/>
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
