//依赖的跟目录
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
require('./css/reset.css');
require('./css/index.css');
require('./css/account.css');
require('./css/bookDetails.css');
require('./css/comment.css');
require('./css/different.css');
require('./css/Read.css');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();//热
