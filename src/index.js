import React from "react";
import  ReactDOM  from "react-dom";

import { Provider } from './context/context'; 
import './index.css';
import { SpeechProvider } from "@speechly/react-client";

import App from './App';
ReactDOM.render(
    <SpeechProvider appId="fe7ec9a5-2e41-4f20-8719-d09eb01d76e0" language="en-US">

    <Provider>
        <App/>
    </Provider>

    </SpeechProvider>
    // App is wrapped with Provider to enable access of all the content in the context.
    , document.getElementById('root')
);