import Head from 'next/head'
import { render } from 'react-dom'
import React, { Component, useRef, useState, useEffect, Suspense } from 'react';
import XAPI from "@xapi/xapi";
import { sendXAPIStatement } from "../../../xapiFunctions"
import data from "./questions.json"

export default function UnderstandingQuiz() {
    const nameForm = useRef(null);
    const xapiform = useRef(null);
    
    const handleClickEvent0 = () => {

        const xform = xapiform.current;

        console.log(localStorage.setItem("name", "nicoleeeeeeeeeeeeeeeee"));
        console.log(localStorage.setItem("id", "5632266"));

        if (xform['name'].value == "" || xform['email'].value == "") {
            document.getElementById("result0").innerHTML = "Status: Unsubmitted! Please fill out fields correctly!";
        }
        else {
            document.getElementById("result0").innerHTML = "Status: Submitted!";
            document.getElementById("result0").style.color = "green";
        }
        sendXAPIStatement(xform['name'].value, xform['email'].value, "started", "https://ucr.edu/Statics", "Module 1", "Check Your Understanding", "assessment", xform['name'].value + " " + xform['email'].value)

    }

    const handleClickEvent1 = () => {
        const xform = xapiform.current;
        const form = nameForm.current;
        var answer = '2';
        console.log("value" + form['input1'].value);
        if (form['input1'].value == answer) {
            document.getElementById("result1").innerHTML = "Correct answer!";
            document.getElementById("result1").style.color = "green";
            document.getElementById("result1").style.fontWeight = "bolder";
        }
        else {
            document.getElementById("result1").innerHTML = "Incorrect answer! Please try again."
            document.getElementById("result1").style.color = "red";
            document.getElementById("result1").style.fontWeight = "bolder";
        }

        sendXAPIStatement(xform['name'].value, xform['email'].value, "answered", "https://ucr.edu/Statics", "Module 1", "Check Your Understanding Q1", "assessment", form['input1'].value)

    }

    const handleClickEvent2 = () => {
        const xform = xapiform.current;
        const form = nameForm.current;

        var answer1 = '2';
        var answer2 = '3';
        var answer3 = '4';
        var answer4 = '1';
        if (form['input2a'].value == answer1 && form['input2b'].value == answer2 && form['input2c'].value == answer3 && form['input2d'].value == answer4) {
            document.getElementById("result2").innerHTML = "Correct answer!";
            document.getElementById("result2").style.color = "green";
            document.getElementById("result2").style.fontWeight = "bolder";
        }
        else {
            document.getElementById("result2").innerHTML = "Incorrect answer! Please try again."
            document.getElementById("result2").style.color = "red";
            document.getElementById("result2").style.fontWeight = "bolder";
        }

        sendXAPIStatement(xform['name'].value, xform['email'].value, "answered", "https://ucr.edu/Statics", "Module 1", "Check Your Understanding Q2", "assessment", form['input2a'].value + " " + form['input2b'].value + " " + form['input2c'].value + " " + form['input2d'].value)
    }

    const handleClickEvent3 = () => {
        const xform = xapiform.current;
        const form = nameForm.current;

        console.log("value" + form['input3'].value);
        if (form["input3"].value.length >= 1) {
            document.getElementById("result3").innerHTML = "Correct answer!";
            document.getElementById("result3").style.color = "green";
            document.getElementById("result3").style.fontWeight = "bolder";
        }
        else {
            document.getElementById("result3").innerHTML = "Incorrect answer! Please try again."
            document.getElementById("result3").style.color = "red";
            document.getElementById("result3").style.fontWeight = "bolder";
        }

        sendXAPIStatement(xform['name'].value, xform['email'].value, "answered", "https://ucr.edu/Statics", "Module 1", "Check Your Understanding Q3", "assessment", form['input3'].value)
    }

    return (
        <div style={{ paddingLeft: "2cm", paddingRight: "2cm", textAlign: "left" }}>
            <br></br>
            <form style={{ textAlign: "center" }} ref={xapiform} method="POST" >
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
                    <option value="1"> a) def when_started1():  </option>
                    <option value="2"> b) drivetrain.drive(FORWARD) </option>
                    <option value="3"> c) wait(5, SECONDS) </option>
                    <option value="4"> d) drivetrain.stop() </option>
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
                <p>3. Describe an example of something the might begin moving forward through the use of a computer program (open-ended) question. </p>
                
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