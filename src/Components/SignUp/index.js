import React, {useState, useContext} from 'react';
import {FirebaseContext} from '../Firebase';
import {Link} from 'react-router-dom'


const SignUp = (props) => {

    const firebase = useContext(FirebaseContext);

    const data = {
        pseudo : '',
        email : '',
        password : '',
        confirmPassword : ''
    }

    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('')

    const handleChange = e => {
        // Utilisation d'un spread operator pour capturer toutes les valeurs de data:
        setLoginData({...loginData, [e.target.id] : e.target.value});    
    }


    const handleSubmit = e => {
        e.preventDefault();
        const {email, password} = loginData;
        firebase.signUpUser(email, password)
        .then(user => {
            setLoginData({...data});
            alert('ok')
            props.history.push('/welcome')
        })
        .catch(error => {
            setError(error);
            setLoginData({...data});
        })
    }

    // destructuring pour loginData:

    const {pseudo, email, password, confirmPassword} = loginData;

    const btn = password !== confirmPassword ? <button disabled>Inscription</button> : <button>Inscription</button>

    
    // gestion des erreurs : 
    
    const errorMsg = error !== '' && <span>{error.message}</span>;

    return (
        <div className="signUpLoginBox" >
            <div className="slContainer" >
            <div className="formBoxLeftSignup">

            </div>
            <div className="formBoxRight">
                <div className="formContent">

                    {errorMsg}

                    <h2>Inscription</h2>
                        <form onSubmit={handleSubmit}>   
                            <div className="inputBox">
                                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required/>
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>
                            
                            <div className="inputBox">
                                <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required/>
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required/>
                                <label htmlFor="password">Mot de passe</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required/>
                                <label htmlFor="confirmPassword">Confimer le mot de passe</label>
                            </div>

                            {btn}

                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/login">Dejà inscrit? Connectez-vous</Link>
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SignUp
