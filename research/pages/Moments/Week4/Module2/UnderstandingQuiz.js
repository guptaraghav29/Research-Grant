import Head from 'next/head'
import { render } from 'react-dom'
import React, { Component, useRef, useState, useEffect } from 'react';
import XAPI from "@xapi/xapi";

export default function UnderstandingQuiz() {

    const nameForm = useRef(null);
    const xapiform = useRef(null);

    //xAPI data
	const endpoint = "https://ucrstaticsw22.lrs.io/xapi/";
	const username = process.env.LRS_USERNAME || "gilrah";
	const password = process.env.LRS_PASSWORD || "wocraj";
    const auth = XAPI.toBasicAuth(username, password);
    const xapi = new XAPI(endpoint, auth);


    const sendXAPIStatement = (name, email, verb, statement) => {
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


    const handleClickEvent0 = () => {

        const xform = xapiform.current;
        const name = xform['name'].value;
        console.log(name);
        const email = xform['email'].value;
        console.log(email);

        if (xform['name'].value == "" || xform['email'].value == "") {
            document.getElementById("result0").innerHTML = "Status: Unsubmitted! Please fill out fields correctly!";
        }
        else {
            document.getElementById("result0").innerHTML = "Status: Submitted!";
            document.getElementById("result0").style.color = "green";
        }

        sendXAPIStatement(xform['name'].value, xform['email'].value, "viewed", "Week 5 Module 1 Quiz")
    }



    const handleClickEvent1 = () => {

        const form = nameForm.current;
        var answer1 = '0';
        var answer2 = '6.5';
        var answer3 = '3.5';
        console.log("value" + form['input2'].value);
        if ((form['Q1I1'].value >= answer1 * 0.975) && (form['Q1I1'].value <= answer1 * 1.025) && (form['Q1I2'].value >= answer2 * 0.975) && (form['Q1I2'].value <= answer2 * 1.025) && (form['Q1I3'].value >= answer3 * 0.975) && (form['Q1I3'].value <= answer3 * 1.025))
            document.getElementById("result1").innerHTML = "Correct answer!";
        else
            document.getElementById("result1").innerHTML = "Incorrect answer! Please try again."

            sendXAPIStatement(name, email, "answered", "Week 4 Module 2 Quiz Question 1");
    }

    const handleClickEvent2 = () => {
      
        const form = nameForm.current;
        var answer1 = '0';
        var answer2 = '5';
        var answer3 = '21.67';
        var answer4 = '2';
        console.log("value" + form['input2'].value);
        if ((form['Q2I1'].value >= answer1 * 0.975) && (form['Q2I1'].value <= answer1 * 1.025) && (form['Q2I2'].value >= answer2 * 0.975) && (form['Q2I2'].value <= answer2 * 1.025) && (form['Q2I3'].value >= answer3 * 0.975) && (form['Q2I3'].value <= answer3 * 1.025) && form['input3'].value == answer4)
            document.getElementById("result2").innerHTML = "Correct answer!";
        else
            document.getElementById("result2").innerHTML = "Incorrect answer! Please try again."

        sendXAPIStatement(name, email, "answered", "Week 4 Module 2 Quiz Question 1");
    }

    return (
        <div style={{ paddingLeft: "2cm", paddingRight: "2cm", textAlign: "left" }}>
            <div>
            </div>
            <div></div>
            <br></br>
            <form style={{ textAlign: "center" }} ref={xapiform} method="POST">
                <p> Please enter your name and email. This must be done for all of the Check Your Understanding Quizzes. </p>
                <label> Name: </label>
                <input placeholder={'Enter name'} name={'name'} />
                <label style={{ paddingLeft: "0.3cm" }}>  Email: </label>
                <input placeholder={'Enter email'} name={'email'} />
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" placeholder={'Enter answer'} id={'input0'} onClick={handleClickEvent0}>Submit</button>
                <p style={{ color: "red", fontWeight: "bold" }} id="result0"> Status: Unsubmitted </p>
            </form>
            <Head>
                <title> Understanding Quiz 1 </title>
            </Head>
            <h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding</h1>
            <form ref={nameForm}>
                <br></br>
                <p>1. The beam below shows a beam with a distributed load. The reaction at B is B<sub>x</sub> = <input placeholder={'Enter answer'} name={'input1'} id={'Q1I1'} /> B<sub>y</sub> =  <input placeholder={'Enter answer'} name={'input1'} id={'Q1I2'} />  kN. The reaction at A is A<sub>y</sub> =  <input placeholder={'Enter answer'} name={'input1'} id={'Q1I3'} /> kN. </p>    
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>
                <img class="center" src="../../../images/quiz4_1_6.png" width="40%"></img>
                <br></br>
                <br></br>
                <br></br>

                <p>2. The figure below shows a beam with a distributed load. The reaction at A is A<sub>x</sub> = <input placeholder={'Enter answer'} name={'input2'} id={'Q2I1'} />  kN, A<sub>y</sub> = <input placeholder={'Enter answer'} name={'input2'} id={'Q2I2'} />  kN. The magnitude of the moment reaction M<sub>A</sub> = <input placeholder={'Enter answer'} name={'input2'} id={'Q2I3'} />  kN-m and is  <select name={'input3'} size={'1'}> <option value="1">clockwise</option><option value="2">counterclockwise</option></select></p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent2}>Check Answer</button>
                <p id="result2"> Input an answer - this line will update depending on your answer.</p>
                <img class="center" src="../../../images/quiz4_1_7.png" width="40%"></img>

            </form>
        </div>
    )
}