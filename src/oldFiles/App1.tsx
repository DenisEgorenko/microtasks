import React, {useLayoutEffect, useState} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../site/Header';
import Body from '../site/Body';
import Footer from '../site/Footer';
import NewComponentTable from '../site/NewComponentTable';
import Button from '../Components/Button';
import {findAllByDisplayValue} from '@testing-library/react';
import NewComponentMoney from '../Components/NewComponent';


// const students = [
//     {id: 1, name: "James", age: 8},
//     {id: 2, name: "Robert", age: 18},
//     {id: 3, name: "John", age: 28},
//     {id: 4, name: "Michael", age: 38},
//     {id: 5, name: "William", age: 48},
//     {id: 6, name: "David", age: 58},
//     {id: 7, name: "Richard", age: 68},
//     {id: 8, name: "Joseph", age: 78},
//     {id: 9, name: "Thomas", age: 88},
//     {id: 10, name: "Charles", age: 98},
//     {id: 11, name: "Christopher", age: 100},
// ]
//
//
// const topCars = [
//     {manufacturer:'BMW', model:'m5cs'},
//     {manufacturer:'Mercedes', model:'e63s'},
//     {manufacturer:'Audi', model:'rs6'},
//     {manufacturer:'Mercedes', model:'e63s'},
//     {manufacturer:'Audi', model:'rs6'},
//     {manufacturer:'Mercedes', model:'e63s'},
//     {manufacturer:'Audi', model:'rs6'}
// ]

function App1() {

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])


    type nominalType = 'Dollars' | "RUBLS" | "All"

    const [nominal, setNominal] = useState<nominalType>("All")

    let moneyFiltered = money;

    if(nominal !== "All"){
        moneyFiltered = money.filter(element => element.banknots === nominal)
    }

    return (
        <NewComponentMoney moneyFiltered={moneyFiltered} setNominal={setNominal}/>
    );
}

export default App1;
