import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';

import {BrowserRouter} from 'react-router-dom';

import {MyProvider} from './context';

import App from './App';
import './index.css';

library.add(fab, fas);


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <MyProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </MyProvider>, 
document.getElementById('root'));

