import React from "react";
import Flashcard from "./Flashcard"

const FlashcardContainer = ({flashcards, shown, group}) => {
    return (
        <div className="flashcard-container">
            {shown.map(flashcard => {
                return <Flashcard
                flashcard={flashcard}
                key={flashcard.id}/>
            })}
        </div>
        )
        }

export default FlashcardContainer