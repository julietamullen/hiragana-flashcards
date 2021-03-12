import React from 'react'
import {Link} from 'react-router-dom'

function Welcome () {
    return (
        <div className="App">
        <header>
        <h1>Hiragana Flashcards</h1>
        </header>
        <div className="welcome-container">
            <h3>Welcome!</h3>
            <p>This is a simple app aimed to help you take your first steps in japanese!</p>
            <p>Hiragana is one of the two syllabaries (along with katakana) that are used in the japanese writting system, and it's a phonetic lettering system, which means that each hiragana is associated to a sound.</p>
            <p>In this app, you will find the flashcards sorted by groups (as most charts are), or you can generate a random selection. In the frontside of each flashcard you'll see the hiragana, and in the backside, the sound it is associated to. Just click/tap them to turn them around!</p>
            <p className="goodluck"><b>がんばって!</b></p>
            <section><Link to="../Flashcards"><button>Start</button></Link></section>
            </div>
    </div>
    );
}

export default Welcome