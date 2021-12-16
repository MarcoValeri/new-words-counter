import React, { useState } from 'react';

// Import components
import '../word-output/word-output';
import WordOutput from '../word-output/word-output';

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
                <WordOutput type="Characters" num={textInput.replaceAll('\n', '').length} />
                <p>Text: {textInput}</p>
            </section>
        </form>
    )

}

export default WordCounter;