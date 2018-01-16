import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader'

import registerServiceWorker from './utils/registerServiceWorker';

import 'minireset.css'

import Routes from './routes'

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();

WebFont.load({
  google: {
    families: ['Roboto:300,400,500', 'sans-serif']
  }
})
