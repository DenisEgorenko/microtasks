import React from 'react';

type BodyProps = {
    title: string
}

function Body(props:BodyProps) {
    return (
        <div>
            {props.title}
        </div>
    )
}


export default Body