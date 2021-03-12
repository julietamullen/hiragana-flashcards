import React from "react"

const Form = ({setGroup, setShown, flashcards}) => {

    let arr = []
    let randomFlashcards = []

    const generateRandom = () => {
        for (let i = 0; i < 9; i++) {
        const num = Math.floor(Math.random() * 67)
        arr.push(num)
    }

    let uniques = [...new Set(arr)]

    for (let i = 0; i < flashcards.length; i++) {
        for (let x = 0; x < uniques.length; x++) {
        if (flashcards[i].id === uniques[x]) {
            randomFlashcards.push(flashcards[i])
        }
        }
    }setShown(randomFlashcards)
    }

    const handleGroup = (e) => {
        setGroup(e.target.value)
    }
    return(
        <div className="options">
        <div className="select" onChange={handleGroup}>
            <select name="groups" className="choose-groups">
                <option value="default">Choose a group</option>

                <option value="vowels">Vowels</option>
                <option value="k">K Group</option>
                <option value="k+">K + ﾞ Group</option>
                <option value="s">S Group</option>
                <option value="s+">S + ﾞ Group</option>
                <option value="t">T Group</option>
                <option value="t+">T + ﾞ Group</option>
                <option value="n">N Group</option>
                <option value="h">H Group</option>
                <option value="h+">H + ﾟ Group</option>
                <option value="m">M Group</option>
                <option value="y">Y Group</option>
                <option value="r">R Group</option>
                <option value="w">W Group</option>
            </select>
            
        </div>
        <button className="random" onClick={generateRandom}>Random</button>
        </div>
    )
}

export default Form