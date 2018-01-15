import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader'

import Home from './pages/Home';
import registerServiceWorker from './utils/registerServiceWorker';

import 'minireset.css'

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();

WebFont.load({
  google: {
    families: ['Roboto:300,400:500', 'sans-serif']
  }
})
