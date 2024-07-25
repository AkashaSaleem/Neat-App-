import React, { useState } from 'react';

export default function NeatTextForm(props) {
    const [textContent, setTextContent] = useState('Enter text here');

    const handleUppercaseClick = () => {
        console.log("Button clicked: " + textContent);
        let upperText = textContent.toUpperCase();
        setTextContent(upperText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLowercaseClick = () => {
        console.log("Button clicked: " + textContent);
        let lowerText = textContent.toLowerCase();
        setTextContent(lowerText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleClearTextClick = () => {
        console.log("Button clicked: " + textContent);
        setTextContent('');
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(textContent);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleAlternatingCase = () => {
        let newText = "";
        for (let index = 0; index < textContent.length; index++) {
            newText += (index % 2 === 0) ? textContent[index].toLowerCase() : textContent[index].toUpperCase();
        }
        setTextContent(newText);
        props.showAlert("Alternating case enabled!", "success");
    }

    const handleRemoveExtraSpaces = () => {
        let trimmedText = textContent.split(/[ ]+/).join(" ");
        setTextContent(trimmedText);
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleChange = (event) => {
        console.log("Text changed");
        setTextContent(event.target.value);
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className="mb-2">  {props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={textContent}
                        onChange={handleChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? ' #9370DB' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743'
                        }}
                        id="textBox"
                        rows="8"
                    />
                </div>
                <button disabled={textContent.length===0}style={{ backgroundColor: 'violet', color: 'white' }}  className="btn btn-primary mx-1 my-1" onClick={handleUppercaseClick} >Convert to Upper-Case </button>
                <button   disabled={textContent.length===0} style={{ backgroundColor: 'violet', color: 'white' }} className="btn btn-primary mx-1 my-1" onClick={handleLowercaseClick}>Convert to Lower-Case</button>
                <button  disabled={textContent.length===0} style={{ backgroundColor: 'violet', color: 'white' }} className="btn btn-primary mx-1 my-1" onClick={handleClearTextClick}>Clear Text</button>
                <button  disabled={textContent.length===0} style={{ backgroundColor: 'violet', color: 'white' }} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
                <button  disabled={textContent.length===0} style={{ backgroundColor: 'violet', color: 'white' }} className="btn btn-primary mx-1 my-1" onClick={handleAlternatingCase}>Alternating Case</button>
                <button  disabled={textContent.length===0} style={{ backgroundColor: 'violet', color: 'white' }} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h3>Your Words Summary</h3>
                <p>{textContent.trim().split(/\s+/).filter(word => word !== '').length} words and {textContent.trim().length} characters</p>
                <p>{textContent.split(/[".!?"]/).length - 1} sentences</p>
                <p>{0.008 * textContent.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
                <h4>Preview</h4>
                <p>{textContent.length > 0 ? textContent : "Enter something in the box to preview"}</p>
            </div>
        </>
    );
}
























