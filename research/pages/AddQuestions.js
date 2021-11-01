import React, { useState } from 'react'

export default function AddQuestions() {

    var [name, setName] = useState()
    var [email, setEmail] = useState()
    var [id, setID] = useState()

    const nameUpdate = (event) => { 
        setName(event.target.value)
    }
    const emailUpdate = (event) => { 
        setEmail(event.target.value)
    }

    const idUpdate = (event) => { 
        setID(event.target.value)
    }

    const handleSubmit = () => { 
        const postURL = "mongodb+srv://rg:gup@questiondata.wbq3q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" 
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                name: name,
                email: email,
                id: id,
                clockedIn: false,
                dates: []
            })
        })
            .then(() => {
                alert('The information has been set to the database!');
                console.log('The information has been set to the database!');
            })
    }

    return (
        <div>
            <h1>Hi! Please enter your information here: </h1>
            <br></br>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input required onChange={nameUpdate}></input>
                <br></br>
                <label>Email:</label>
                <input required onChange={emailUpdate}></input>
                <br></br>
                <label>NET ID:</label>
                <input required onChange={idUpdate}></input>
                <br></br>
                <br></br>
                <button type="submit"> Submit</button>
            </form>
        </div>
    )

}