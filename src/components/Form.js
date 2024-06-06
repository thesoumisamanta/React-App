import React, { useState } from 'react'


export default function Form(props) {

    const handleChange = (event) => {
        setText(event.target.value)

    }
    const handleUpperCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClearText = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }
    const handleCopy = () => {
        // let text = document.getElementById("textBox")
        // text.select()
        // navigator.clipboard.writeText(text.value)
        navigator.clipboard.writeText(text)
        // document.getSelection().removeAllRanges();
        props.showAlert("Copy to clipboard", "success")
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces", "success")
    }

    const [text, setText] = useState('')
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='text-center my-5'>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" onChange={handleChange} value={text} id="textBox" rows="6" style={{ backgroundColor: props.mode === 'dark' ? '#131d4b' :'white', color: props.mode === 'dark' ? 'white' :'black' }} ></textarea>
                </div>
                <button disabled={text.length === 0} type="button" onClick={handleUpperCase} className="btn btn-success mx-2 my-2">Uppercase</button>
                <button disabled={text.length === 0} type="button" onClick={handleLowerCase} className="btn btn-success mx-2 my-2">Lowercase</button>
                <button disabled={text.length === 0} type="button" onClick={handleClearText} className="btn btn-success mx-2 my-2">Clear</button>
                <button disabled={text.length === 0} type="button" onClick={handleCopy} className="btn btn-success mx-2 my-2">Copy</button>
                <button disabled={text.length === 0} type="button" onClick={handleExtraSpace} className="btn btn-success mx-2 my-2">Remove Extra Space</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Text Summary</h1>
                <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Enter Your text to preview it'}</p>
            </div>
        </>
    )
}


