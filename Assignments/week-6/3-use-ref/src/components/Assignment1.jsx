import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const reference=useRef();
    useEffect(() => {
        reference.current.focus();
    }, []);

    const handleButtonClick = () => {
        reference.current.focus();
    };

    return (
        <div>
            <input type="text" ref={reference} placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
