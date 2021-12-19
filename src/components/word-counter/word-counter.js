import React, { useState } from 'react';

// Import components
import '../word-output/word-output';
import WordOutput from '../word-output/word-output';

// Import style file
import './word-counter.scss';

const WordCounter = () => {

    // Set states
    const [ textInput, setTextInput ] = useState("");
    const [ wordInput, setWordInput ] = useState([]);

    // Create variables
    const regSpace = new RegExp('\\s');

    // Events
    const userInputHandler = e => {
        setTextInput(e.target.value);
        setWordInput(e.target.value.split(regSpace));
        console.log(wordInput);
    }

    return (
        <form>
            <textarea value={textInput} onChange={userInputHandler} cols="50" rows="5"></textarea>
            <section>
                <h2>Output:</h2>
                <WordOutput type="Characters" num={textInput.replaceAll('\n', '').length} />
                <WordOutput type="Words" num={wordInput.length} />
                <p>Text: {textInput}</p>
            </section>
        </form>
    )

}

export default WordCounter;