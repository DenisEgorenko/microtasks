import React, {ChangeEvent, useState} from 'react';
import FullInput from '../Components/FullInput';
import Input from '../Components/Input';
import Button from '../Components/Button';


function App2() {

    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'}
        ]
    )

    let [input, setInput] = useState("")


    const submitHandler = () => {
        setMessage([{message: input}, ...message]);
        setInput('')
    }



    return (
        // <div className={'App1'}>
        //     <FullInput submitHandler={submitHandler}/>

        // </div>

        <div className={"App"}>
            <Input input={input} setInput={setInput}/>
            <Button name={"+"} callBack={submitHandler}/>

            {message.map((el, index) => {
                return(
                    <div key={index}>{el.message}</div>
                )
            })}

        </div>
    );
}

export default App2;
