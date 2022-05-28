import React from 'react';

type CarType = {
    manufacturer: string,
    model: string
}

type topCarsType = {
    topCars: Array<CarType>
}

function NewComponentTable(props: topCarsType){
    return(
        <div>
            <table>
                <tr>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>

                {props.topCars.map(c=> <tr><td>{c.model}</td><td>{c.manufacturer}</td></tr>)}
            </table>
        </div>
    )
}



export default NewComponentTable