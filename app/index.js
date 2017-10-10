import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import styles from './index.css';

import DataActions from './flux/DataActions.js';

class AppInitializer {
    run() {
        DataActions.getPages((response)=>{
            ReactDOM.render(
                <App />,
                document.getElementById('app')
            );
        });
    }
}

new AppInitializer().run();