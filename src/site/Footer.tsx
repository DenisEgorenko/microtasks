import React from 'react';

type FooterProps = {
    title: string
}

function Footer(props: FooterProps) {
    return (
        <div>
            {props.title}
        </div>
    )
}


export default Footer