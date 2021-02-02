import React from 'react'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'

const Quiz = (props) => {

    const {pseudo, email} = props.userData;

    return (
        <div>
            <h2>Bonjour {pseudo} !</h2>
            <h2>Voici votre mail : {email}</h2>
            <div>
                <Levels />
                <ProgressBar />
                <h2>Dbz Quiz</h2>
                <p className="answerOptions">Question 1</p>
                <p className="answerOptions">Question 2</p>
                <p className="answerOptions">Question 3</p>
                <p className="answerOptions">Question 4</p>
                <button className="btnSubmit">Question suivante</button>

            </div>
        </div>
    )
}

export default Quiz
