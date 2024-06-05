import React, {useState} from 'react'


export default function Form(props) {

    const handleChange = (event) => {
        setText(event.target.value)
        
    }
    const handleUpperCase = () => {
        let upperText = text.toUpperCase()
        setText(upperText)
    }
    const handleLowerCase = () => {
        let lowerText = text.toLowerCase()
        setText(lowerText)
    }

    const [text, setText] = useState('Enter text here')
    return (
        <>
            <h1 className='text-center my-5'>{props.heading}</h1>
            <div className="my-5">
                <textarea className="form-control" onChange={handleChange} value={text} id="textBox" cols="4" rows="6"></textarea>
            </div>
            <button type="button" onClick={handleUpperCase} className="btn btn-success">Uppercase</button>
            <button type="button" onClick={handleLowerCase} className="btn btn-success mx-3">Lowercase</button>
        </>
    )
}


