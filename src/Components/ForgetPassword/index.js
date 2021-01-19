import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import { FirebaseContext } from '../Firebase'

const ForgetPassword = props => {


    const [email, setEmail] = useState('')

    const [success, setSuccess] = useState(null)

    const [error, setError] = useState(null)

    const firebase = useContext(FirebaseContext)

    const handleSubmit = e => {
        e.preventDefault();
        firebase.passwordReset(email)
        .then(() => {
            setError(null);
            setSuccess(`Un mail de modification à été envoyé sur l'adresse ${email} !`);
            setEmail('');          

            setTimeout(() => {
                props.history.push('/login')
            }, 5000);
        })
        .catch(error => {
            setError(error);
            setEmail('');
        })
    }

    const disabled = email === '';

    return (
        <div className="signUpLoginBox" >
        <div className="slContainer" >
        <div className="formBoxLeftForget">

        </div>
        <div className="formBoxRight">
            <div className="formContent">

                {success && <span >{success}</span> }
                {error && <span>{error.message}</span>}

                <h2>Mot de passe oublié ?</h2>

                    <form onSubmit={handleSubmit}>   
                        
                        <div className="inputBox">
                            <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required/>
                            <label htmlFor="email">Email</label>
                        </div>

                        <button disabled={disabled}>Générer</button>


                        {/* <div className="inputBox">
                            <input onChange={e => setPassword(e.target.value)} value={password} type="password" autoComplete="off" required/>
                            <label htmlFor="password">Mot de passe</label>
                        </div> */}

                    </form>
                    <div className="linkContainer">
                        <Link className="simpleLink" to="/login">Déjà inscrit ? Se connecter.</Link>
                    </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default ForgetPassword
