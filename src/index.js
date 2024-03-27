import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  {FirebaseContext} from './store/FirebaseaContext';
import { Context } from './store/FirebaseaContext'
import firebase from './firebase/config'
ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>
    <Context >
        <App />
    </Context>
    
</FirebaseContext.Provider>
, document.getElementById('root'));
