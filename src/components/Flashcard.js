import React, {useState} from "react"

const Flashcard = ({flashcard}) => {

    const [flip, setFlip] = useState(false)

    return (
        <div className={`flashcard ${flip ? "flipped" : ""}`} onClick={() => setFlip(!flip)}>
            <div className="front">{flashcard.hiragana}</div>
            <div className="back">{flashcard.romanji}</div>
        </div>
    )
}

export default Flashcard