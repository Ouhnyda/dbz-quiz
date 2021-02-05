import React, { Component } from 'react'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'
import {quizDbz} from '../QuizDbz'

class Quiz extends Component {

    state = {
        levelName: ["debutant",'confirme',"expert"],
        quizLevel: 0,
        maxQuestion: 10,
        storedQuestions: [],
        question: null,
        option: [],
        idQuestion: 0
    }

    loadQuestions = quiz => {

        const fetchedArrayQuiz = quizDbz[0].quiz[quiz];

        if (fetchedArrayQuiz >= this.state.maxQuestion) {

            // const qui va permettre de "cacher" la réponse via sur ReactDevTools :
          const newArray = fetchedArrayQuiz.map( ({answer, ...keepRest}) => keepRest );

          this.setState({
              storedQuestions: newArray
          })

        }else{
            console.log("Pas assez de question")
        }
    }

    // Methode permettant d'invoquer loadQuestion() :

    componentDidMount() {
        this.loadQuestions(this.state.levelName[this.state.quizLevel])
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.storedQuestions !== prevState.storedQuestions) {

            this.setState({
                question: this.state.storedQuestions[this.state.idQuestion].question,
                options:  this.state.storedQuestions[this.state.idQuestion].options
            })
        }
    }
    
    
    render(){


    const {pseudo, email} = this.props.userData;

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
}

export default Quiz
