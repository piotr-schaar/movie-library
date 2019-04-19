import React from 'react';
import ReactDOM from 'react-dom';
import './layout/main.scss';
import './layout/reset.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
