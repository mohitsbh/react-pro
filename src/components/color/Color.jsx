import react, { useState } from 'react'

const colour = () => {
    const [colour, setcolour] = useState(null);
    const handleclick = (colour) => {
        setcolour(colour)
    }

    return (
        <div>
            <h2>selected colour :{colour}</h2>
            <button onClick={() => handleclick('Red') }>Red</button>
            <button onClick={() =>  handleclick('Green') }>green</button>
            <button onClick={() => handleclick('blue') }>blue</button>
        </div>
    )
}

export default colour