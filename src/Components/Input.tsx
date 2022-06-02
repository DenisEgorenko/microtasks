import React, {ChangeEvent, SetStateAction} from 'react';



type InputProps = {
    input: string,
    setInput: (value: string)=>void
}

function Input(props: InputProps){

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {props.setInput(e.currentTarget.value)}

    return(
        <input value={props.input} onChange={(e)=>changeHandler(e)}/>
    )
}


export default Input