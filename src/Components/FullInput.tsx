import React, {ChangeEvent, useState} from 'react';


type inputPropsType = {
    submitHandler: (value: string)=>void
}

function FullInput(props:inputPropsType){

    let [input, setInput] = useState("")

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {setInput(e.currentTarget.value)}
    const submitHandler = (value: string) => {
        props.submitHandler(value);
        setInput("")
    }


    return(
        <div>
            <input value={input}  onChange={(e)=>changeHandler(e)}/>
            <button onClick={()=>submitHandler(input)}>+</button>
        </div>
    )
}




export default FullInput
