import React, { Component, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import XAPI from "@xapi/xapi";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};



export default function Login() {
    const xapiform = useRef(null);



    const sendXAPIStatement = (name, email, verb, statement) => {

        //xAPI data
        const endpoint = "https://xcite-testing.lrs.io/xapi/";
        const username = process.env.LRS_USERNAME || "telfur";
        const password = process.env.LRS_PASSWORD || "kikuev";
        const auth = XAPI.toBasicAuth(username, password);
        const xapi = new XAPI(endpoint, auth);

        const xform = xapiform.current;
        name = xform['name'].value;
        console.log(name);
        email = xform['email'].value;
        console.log(email);

        // Create your statement
        const myStatement = {
            "actor": {
                "name": name,
                "mbox": "mailto:" + email
            },
            "verb": {
                "id": "http://adlnet.gov/expapi/verbs/" + verb,
                "display": {
                    "en-US": verb
                }
            },
            "object": {
                "id": "https://elearn.ucr.edu/courses/3730",
                "definition": {
                    "name": {
                        "en-US": statement
                    }
                }
            }
        };

        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");
    }

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function handleEvent0() {
        const xform = xapiform.current;
        if (xform['name'].value == "" || xform['email'].value == "") {
            document.getElementById("result0").innerHTML = "Status: Unsubmitted! Please fill out fields correctly!";
        }
        else {
            document.getElementById("result0").innerHTML = "Status: Submitted!";
            document.getElementById("result0").style.color = "green";
        }
        sendXAPIStatement(xform['name'].value, xform['email'].value, "viewed", "Week 5 Module 1 Quiz")
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div onLoad={Modal}> 
            <button onClick={openModal}>Open Form</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Login Modal"
            >
                <form style={{ textAlign: "center" }} ref={xapiform} method="POST">
                    <p> Please enter your name and email. This must be done for all of the Check Your Understanding Quizzes. </p>
                    <label> Name: </label>
                    <input placeholder={'Enter name'} name={'name'} />
                    <label style={{ paddingLeft: "0.3cm" }}>  Email: </label>
                    <input placeholder={'Enter email'} name={'email'} />
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" placeholder={'Enter answer'} id={'input0'} onClick={handleEvent0}>Submit</button>
                    <p style={{ color: "red", fontWeight: "bold" }} id="result0"> Status: Unsubmitted </p>
                    <button onClick={closeModal}>close</button>
                </form>
            </Modal>
        </div>
    );
}