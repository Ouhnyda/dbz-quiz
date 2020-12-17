import React from 'react'
import vegetassj from '../../images/vegetassj.png'

// Implantation d'un css inline afin de tout recentrer :
const centerH2 ={
    textAlign : 'center',
    marginTop : '50px'
}

const centerImg = {
    display : 'block',
    margin : '40px auto',
    width : '15%'
}

const ErrorPage = () => {
    return (
        <div clas="quiz-bg" >
           <div className="container" >
           <h2 style={centerH2} >Oups, page inexistante</h2>
           <img style={centerImg} src={vegetassj} alt="error page" />
            </div> 
        </div>
    )
}

export default ErrorPage
