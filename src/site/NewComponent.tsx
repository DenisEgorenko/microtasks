import React from 'react';

type newComponentType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

function NewComponent(props: newComponentType){
    return(
        <div>
            <ul>
                {props.students.map(s => <li key={s.id}>{s.name}</li>)}
            </ul>
        </div>
    )
}



export default NewComponent