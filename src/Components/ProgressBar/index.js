import React, {Fragment} from 'react'

const ProgressBar = () => {
    return (
        <Fragment>
        <div className="percentage">
            <div className="progressPercent">Question: 1/10</div>
            <div className="progressPercent">Progression: 1/10</div>            
        </div>

        <div className="progressBar">
        <div className="progressBarChange" style={{width: '50%'}}></div>
        </div>
        </Fragment>
    )
}

export default ProgressBar
