import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { store } from './helpers';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
