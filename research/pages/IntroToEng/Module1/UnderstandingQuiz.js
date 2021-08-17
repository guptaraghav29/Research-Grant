import Head from 'next/head'
import { render } from 'react-dom'
import React, { Component, useRef, useState, useEffect, Suspense } from 'react';
import XAPI from "@xapi/xapi";
// import Login from "../../../login"

export default function UnderstandingQuiz() {
    // const Login = React.lazy(() => import('../../../login'));
    const nameForm = useRef(null);
    const xapiform = useRef(null);

    //xAPI data
    const endpoint = "https://mtsac-lrs.lrs.io/xapi/";
    const username = process.env.LRS_USERNAME || "rilnah";
    const password = process.env.LRS_PASSWORD || "mecnod";
    const auth = XAPI.toBasicAuth(username, password);
    const xapi = new XAPI(endpoint, auth);

    const xform = xapiform.current;

    const sendXAPIStatement = (name, email, verb, statement) => {
       
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
        var answer = '2';
        console.log("value" + form['input1'].value);
        if (form['input1'].value == answer)
            document.getElementById("result1").innerHTML = "Correct answer!";
        else
            document.getElementById("result1").innerHTML = "Incorrect answer! Please try again."


        sendXAPIStatement(name, xform['email'].value, "answered", "Week 5 Module 1 Quiz Question 1");
    }

    const handleClickEvent2 = () => {

        const form = nameForm.current;
        var answer1 = '2';
        var answer2 = '3';
        var answer3 = '4';
        var answer4 = '1';
        if (form['input2a'].value == answer1 && form['input2b'].value == answer2 && form['input2c'].value == answer3 && form['input2d'].value == answer4)
            document.getElementById("result2").innerHTML = "Correct answer!";
        else
            document.getElementById("result2").innerHTML = "Incorrect answer! Please try again."

        sendXAPIStatement(name,  xform['email'].value, "answered", "Week 5 Module 1 Quiz Question 2");
    }

    const handleClickEvent3 = () => {

        const form = nameForm.current;
        // var answer = '2';
        console.log("value" + form['input3'].value);
        if (form['input3']['3'].checked && !form['input3']['0'].checked && !form['input3']['1'].checked && !form['input3']['2'].checked && !form['input3']['4'].checked)
            document.getElementById("result3").innerHTML = "Correct answer!";
        else
            document.getElementById("result3").innerHTML = "Incorrect answer! Please try again."


        sendXAPIStatement(name, xform['email'].value, "answered", "Week 5 Module 1 Quiz Question 3");

        

    }
    return (
        <div style={{ paddingLeft: "2cm", paddingRight: "2cm", textAlign: "left" }}>
            {/* <Suspense fallback={<div>loading...</div>}>
                <Login/>
            </Suspense> */}
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
                <title> Understanding Quiz </title>
                <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
                <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
            </Head>
            <h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding</h1>
            <form ref={nameForm}>
                <br></br>
                <p>1. In the program shown below, which line of code would have to change if I wanted the robot to move forward for 5 seconds? </p>
                <img class="center" src="../../../images/eng/img1.png" width="40%"></img>
                <p></p>
                <br></br>
                <select name={'input1'} size={'4'}>
                    <option value="1"> Line 1 </option>
                    <option value="2"> Line 2 </option>
                    <option value="3"> Line 3 </option>
                    <option value="4"> Line 4 </option>
                </select>
                <br></br>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>

                <br></br>
                <br></br>

                <p>2. Match the following words to their definitions: </p>

                <p>  <select name={'input2a'} size={'1'}> <option value="1">comments</option><option value="2">command</option><option value="3">function</option><option value="4">variables</option></select> : text-based statement that tells a computer to perform a specific task </p>
                <p>  <select name={'input2b'} size={'1'}> <option value="1">comments</option><option value="2">command</option><option value="3">function</option><option value="4">variables</option></select> : type of command that manipulates user-defined variables to complete the desired behavior.  </p>
                <p>  <select name={'input2c'} size={'1'}> <option value="1">comments</option><option value="2">command</option><option value="3">function</option><option value="4">variables</option></select> : alphanumeric characters used to define and store information in the computer’s memory </p>
                <p>  <select name={'input2d'} size={'1'}> <option value="1">comments</option><option value="2">command</option><option value="3">function</option><option value="4">variables</option></select> : text-based statements that programmers use to communicate with other human beings </p>

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent2}>Check Answer</button>
                <p id="result2"> Input an answer - this line will update depending on your answer.</p>

                <br></br>
                <br></br>
                <p>3. Describe an example of something the might begin moving forward through the use of a computer program (open-ended) question </p>

                <textarea style={{ "height": "100px", "width": "700px" }} name={'input3'} placeholder="Enter response here: "></textarea>

                <br></br>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent3}>Check Answer</button>
                <p id="result3"> Input an answer - this line will update depending on your answer. </p>

                <br></br>
                <br></br>

            </form>
        </div>
    )
}