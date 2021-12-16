import React from 'react';

// Import style file
import './word-output.scss';

const WordOutput = ({ type, num }) => {
    return (
        <p>{type}: {num}</p>
    )
}

export default WordOutput;