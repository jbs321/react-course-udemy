import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from 'reducers';
import Root from 'Root'
import App from "components/App";
import {Route, BrowserRouter} from "react-router-dom";



ReactDOM.render(
    <Provider store={createStore(reducers, {})}>
        <Root>
            <BrowserRouter>
                <Route path="/" component={App}/>
            </BrowserRouter>
        </Root>
    </Provider>,
    document.querySelector("#root"));
