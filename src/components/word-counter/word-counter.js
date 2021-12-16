import React, { useState } from 'react';

// Import style file
import './word-counter.scss';

const WordCounter = () => {

    // Set states
    const [ textInput, setTextInput ] = useState("");

    // Events
    const userInputHandler = e => {
        setTextInput(e.target.value);
    }

    return (
        <form>
            <textarea value={textInput} onChange={userInputHandler} cols="50" rows="5"></textarea>
            <section>
                <h2>Output:</h2>
                <p>Characters: {textInput.replaceAll('\n', '').length}</p>
                <p>Text: {textInput}</p>
            </section>
        </form>
    )

}

export default WordCounter;