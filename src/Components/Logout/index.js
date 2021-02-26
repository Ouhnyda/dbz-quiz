import React, {useState, useEffect, useContext} from 'react'
import {FirebaseContext} from '../Firebase'

const Logout = () => {

    const [checked, setChecked] = useState(false)

    const firebase = useContext(FirebaseContext)

    useEffect(() => {
        if (checked) {
            firebase.signOutUser();
        }
    }, [checked, firebase])

    const handleChange = e => {
        setChecked(e.target.checked)
    }

    return (
        <div className="logoutContainer">
            
            <label className="switch">
            
            <input onChange={handleChange} type="checkbox" checked={checked} />

            <span className="slider round"></span>

            </label>
            
        </div>
    )
}

export default Logout
