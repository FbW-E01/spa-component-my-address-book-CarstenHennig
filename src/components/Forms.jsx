import React, { useState } from 'react'

function Forms() {
    const [form, setForm] = useState({});
    const [personAdded,setPersonAdded] = useState([])

    const changeHandler= (e) => {
        e.preventDefault();
        setForm({...form,[e.target.name]:e.target.value});
        console.log(form);
    } 

    const addPerson= (e)=>{
        e.preventDefault();
        setPersonAdded([...personAdded,form]);
        localStorage.setItem('person', JSON.stringify(personAdded));
        console.log(localStorage.getItem('person'));
    }

    return (
        <div>
            <form onSubmit={(e) => addPerson(e)}>
                <input onChange={(e)=>changeHandler(e)} type="text" placeholder="Whats your surname?" name="surname" />
                <input onChange={(e)=>changeHandler(e)} type="text" placeholder="Whats your name?" name="fname" />
                <input onChange={(e)=>changeHandler(e)} type="text" placeholder="Whats your street and house number?" name ="street" />
                <input onChange={(e)=>changeHandler(e)} type="text" placeholder="Whats your post code?" name ="postcode" />
                <input onChange={(e)=>changeHandler(e)} type="text" placeholder="Whats your city?" name ="city" />
                <input onChange={(e)=>changeHandler(e)} type="text" placeholder="Whats your email?" name ="email" />
                <button type="submit">Add your address</button> 
            </form>
        </div>
    )
}

export default Forms
