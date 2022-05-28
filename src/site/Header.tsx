import React from 'react';

type HeaderProps = {
    title: string
}

function Header(props: HeaderProps) {
    return (
        <div>
            {props.title}
        </div>
    )
}


export default Header