import React, { useEffect, useMemo, useState } from "react";



const setSentences =()=>{
    const sentences = [];
    const words = ["Cristiano", "Ronaldo", "The", "Goat","nishant","plays for Real Madrid"];
    for (let i = 0; i < 1000; i++) {
        let sentence = "";

        for (let j = 0; j < words.length; j++) {
            sentence = sentence + words[ Math.floor(Math.random()*words.length)].toLowerCase()
            sentence =sentence + " "
            }

        sentences.push(sentence);

    }
    return sentences;
}




export function Assignment2() {
    const [counter, setCounter] = useState(0);
    const [Lines, setLines]= useState(setSentences());
    const [filter, setFilter]= useState();




    const HandleClick = () => {
        console.log("clicked");
        setCounter(counter + 1);
    }
    const checkIfItIncludes = useMemo(()=>{
       
    const  fil =Lines.filter( (line)=>line.includes(filter));
        console.log(filter,Lines[999],fil)
        return fil;


    },[Lines,filter])
    return <div>
        <button onClick={HandleClick}>{counter}</button>
        <input type="text" onChange={(e)=>setFilter(e.target.value)}></input>
        {checkIfItIncludes.map((element,index)=>{
           
           return <li key={index}>{element}</li>

        })}

         

    </div>


}