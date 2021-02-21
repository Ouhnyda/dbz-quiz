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
        idQuestion: 0,
        btnDisabled: true,
        userAnswer: null,
        score: 0
    }

    storedDataRef = React.createRef();

    loadQuestions = quiz => {

        // On recupere les question du DbzQuiz:

        const fetchedArrayQuiz = QuizDbz[0].quizz[quiz];
        console.log(fetchedArrayQuiz)
        if (fetchedArrayQuiz.length >= this.state.maxQuestion) {

            this.storedDataRef.current = fetchedArrayQuiz;

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

    nextQuestion = () => {
        if(this.state.idQuestion === this.state.maxQuestion -1){
            //end
        }else{
            this.setState(prevState => ({
                idQuestion: prevState.idQuestion +1
            }))
        }
        const goodAnswer = this.storedDataRef.current[this.state.idQuestion].answer;
        if(this.state.userAnswer === goodAnswer) {
            this.setState(prevState => ({
                score: prevState.score +1
            }))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.storedQuestions !== prevState.storedQuestions) {
            this.setState({
                question: this.state.storedQuestions[this.state.idQuestion].question,
                options:  this.state.storedQuestions[this.state.idQuestion].options
            })
        }

        if(this.state.idQuestion !== prevState.idQuestion){
            this.setState({
                question: this.state.storedQuestions[this.state.idQuestion].question,
                options:  this.state.storedQuestions[this.state.idQuestion].options,
                userAnswer: null,
                btnDisabled: true
            })
        }
    }
    
    submitAnswer = selectedAnswer => {
        this.setState({
            userAnswer: selectedAnswer,
            btnDisabled: false
        })
    }

    
    
    render(){

        const displayOption = this.state.options.map((optionss, index) => {
            return ( 
            <p  key={index} 
                onClick={() => this.submitAnswer(optionss)} 
                className={`answerOptions ${this.state.userAnswer === optionss ? "selected" : null}`}
            >
                {optionss}
            </p>
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

                <button 
                disabled={this.state.btnDisabled} 
                className="btnSubmit"
                onClick={this.nextQuestion}
                >
                Question suivante
                </button>

            </div>
        </div>
    )
    }
}

export default Quiz
