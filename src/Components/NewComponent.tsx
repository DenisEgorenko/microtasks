import React from 'react';
import Button from './Button';


type MoneyArray = {
    banknots: string,
    value: number,
    number: string
}

type MoneyProps = {
    moneyFiltered: Array<MoneyArray>,
    setNominal: Function
}

function NewComponentMoney(props:MoneyProps){
    return(
        <div>
            <ul>
                {props.moneyFiltered.map((nominal, index) => {
                    return(
                        <li key={index}>
                            <span>{nominal.banknots} </span>
                            <span>{nominal.value} </span>
                            <span>{nominal.number} </span>
                        </li>
                    )
                })}

            </ul>

            <Button name={"All"} callBack={()=>{props.setNominal("All")}}/>
            <Button name={"Dollars"} callBack={()=>{props.setNominal("Dollars")}}/>
            <Button name={"RUBLS"} callBack={()=>{props.setNominal("RUBLS")}}/>

        </div>
    )
}


export default NewComponentMoney