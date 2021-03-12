import React from "react"

const Form = ({setGroup}) => {

    const handleGroup = (e) => {
        setGroup(e.target.value)
    }
    return(
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
    )
}

export default Form