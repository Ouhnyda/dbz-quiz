import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Firebase, {FirebaseContext} from './Components/Firebase/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // On instancie Firebase ici :

    <FirebaseContext.Provider value={new Firebase()} > 
    <App />
    </FirebaseContext.Provider>
    ,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
