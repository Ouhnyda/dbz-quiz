import React, { Component } from 'react'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'
import {QuizDbz} from '../QuizDbz/'

class Quiz extends Component {

    state = {
        levelNames: ["debutant",'confirme',"expert"],
        quizLevel: 0,
        maxQuestion: 10,
        storedQuestions: [],
        question: null,
        options: [],
        idQuestion: 0
    }

    loadQuestions = quiz => {

        // On recupere les question du DbzQuiz:

        const fetchedArrayQuiz = QuizDbz[0].quizz[quiz];
        console.log(fetchedArrayQuiz)
        if (fetchedArrayQuiz.length >= this.state.maxQuestion) {

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
        this.loadQuestions(this.state.levelNames[this.state.quizLevel])
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

        const displayOption = this.state.options.map((optionss, index) => {
            return ( 
            <p key={index} className="answerOptions">{optionss}</p>
            )
        })

    const {pseudo, email} = this.props.userData;

    return (
        <div>
            <h2>Bonjour {pseudo} !</h2>
            <h2>Voici votre mail : {email}</h2>
            <div>
                <Levels />
                <ProgressBar />
                <h2>{this.state.question}</h2>
                
                {displayOption}

                <button className="btnSubmit">Question suivante</button>

            </div>
        </div>
    )
    }
}

export default Quiz
