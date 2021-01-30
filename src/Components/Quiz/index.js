import React from 'react'

const Quiz = (props) => {

    const {pseudo, email} = props.userData;

    return (
        <div>
            <h2>Pseudo : {pseudo}</h2>
            <h2>Email : {email}</h2>
        </div>
    )
}

export default Quiz
