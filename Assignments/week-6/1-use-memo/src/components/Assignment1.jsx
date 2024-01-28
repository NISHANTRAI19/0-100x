import { useState,useMemo } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    const [counter,setCounter]=useState(0);
    // Your solution starts here
    const expensiveValue = useMemo(()=>{


           let value=input;
           for(let i=input;(i-1)>0;i--){

            value=value*(i-1)
           }
           console.log("rerendered")
           return value
           

    },[input])
   
   

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
            <button onClick={()=>setCounter(counter+1)}>{counter}</button>
        </div>
    );
}