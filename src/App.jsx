import React, { useEffect, useState } from 'react';
import Forms from './components/Forms';
import "./components/Style.css";
import Lifecycle from './components/Lifecycle';

export default function App() {
    const [getPerson, setGetPerson] = useState([]);
    useEffect(() => {
        let x = localStorage.getItem('person');
        let convert = JSON.parse(x);
        setGetPerson(convert);
    }, []);
    console.log(getPerson);
    return (
        <div>
            <Forms />
            <Lifecycle />
        </div>        
    )
}
