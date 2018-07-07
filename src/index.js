import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './screens/home/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomeContainer />, document.getElementById('root'));
registerServiceWorker();
