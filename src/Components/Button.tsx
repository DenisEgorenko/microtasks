import React from 'react';
import exp from 'constants';

type ButtonProps = {
    name: string,
    callBack: ()=>void
}

function Button(props: ButtonProps){

    const onClickHandler = () => {
        props.callBack()
    }

    return(
        <button onClick={onClickHandler}>{props.name}</button>
    )
}


export default Button