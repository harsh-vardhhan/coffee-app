import React from 'react';
import ReactDOM from 'react-dom';
import './../node_modules/grommet/grommet-hpe.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
