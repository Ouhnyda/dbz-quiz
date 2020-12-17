import React, {useRef, useEffect, useState, Fragment} from 'react'
import {Link} from 'react-router-dom'

const Accueil = () => {

    // creation d'une variable d'état :

    const [btn, setBtn] = useState(false)

    const refVegetto = useRef(null)

    // useEffect permet d'utiliser le ComponentDidMount a travers une function :

    useEffect(() => {
        refVegetto.current.classList.add("startingImg"); // permet l'affichage des boules de cristal
        setTimeout(() => {
            refVegetto.current.classList.remove("startingImg");
            setBtn(true)
        }, 1000);
    }, []) 

    const setLeftImg = () => {
        refVegetto.current.classList.add("leftImg");
    }

    const setRightImg = () => {
        refVegetto.current.classList.add("rightImg");
    }

    const clearImg = () => {
        if (refVegetto.current.classList.contains("leftImg")) {
            refVegetto.current.classList.remove("leftImg")
        } else if (refVegetto.current.classList.contains("rightImg")) {
            refVegetto.current.classList.remove("rightImg")
        }
    }

    const displayBtn = btn && (
        <Fragment>
            <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
                <Link className="btn-welcome" to="signup">Inscription</Link>
            </div>

            <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
                <Link className="btn-welcome" to="login">Connexion</Link>
            </div>
        </ Fragment>
    )
    
    // Ce component va s'éxécuter apres le return en dessous

    return (
        <main ref={refVegetto} className="welcomePage">
            {displayBtn}
        </main>
    )
}

export default Accueil
