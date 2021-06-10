import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
