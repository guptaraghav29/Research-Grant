import Head from 'next/head'
import { render } from 'react-dom'
import React, { Component, useRef, useState, useEffect, Suspense } from 'react';
import XAPI from "@xapi/xapi";
// import Login from "../../../login"

export default function PracticeQuiz() {
	// const Login = React.lazy(() => import('../../../login'));
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

		if (xform['name'].value == "" || xform['email'].value == "") {
			document.getElementById("result0").innerHTML = "Status: Unsubmitted! Please fill out fields correctly!";
		}
		else {
			document.getElementById("result0").innerHTML = "Status: Submitted!";
			document.getElementById("result0").style.color = "green";
		}

		sendXAPIStatement(xform['name'].value, xform['email'].value, "viewed", "Statics Week 2 Module 3 Quiz 1")
	}

    var a = Math.floor(Math.random() * 5) + 1;
    var b = Math.floor(Math.random() * 9) + 1;
    var c = Math.floor(Math.random() * 20) + 10;
	
	let text = "<a>x + <b> = <c>";
	var regex = /<(.+?)>/g ;
	var array = text.match(regex);
	
    const a1 = array[0];
    const b1 = array[1];
    const c1 = array[2];

	// let newText = text;
	// console.log(newText)

	let newText = text.replace(/<a>/, a).replace(/<b>/, b).replace(/<c>/, c);
	// newText = text.replace(/<b>/, b)
	// newText = text.replace(/<c>/, c)
	// newText.replace(/<b>/, b);
	// newText.replace(/<c>/, c);

	console.log("New string: " + newText)

    const equationSolver = (a, b, c) => {
        var x = (c-b)/a;
        return x;
    }

	const handleClickEvent1 = () => {

		const form = nameForm.current;
		const xform = xapiform.current;

		var answer = (equationSolver(a,b,c));
		console.log("value" + form['input1'].value);
		if (form['input1'].value == Math.round(answer * 100) / 100)
			document.getElementById("result1").innerHTML = "Correct answer!";
		else
			document.getElementById("result1").innerHTML = "Incorrect answer! Please try again."


		sendXAPIStatement(xform['name'].value, xform['email'].value, "answered", "Statics Week 2 Module 3 Quiz 1 Question 1");
	}

    const equationSolver2 = (a, b, c) => {
        var x = (a*b*c)*100
        return x;
    }

    const handleClickEvent2 = () => {

		const form = nameForm.current;
		const xform = xapiform.current;

		var answer = equationSolver2(a,b,c);
		console.log("value" + form['input2'].value);
		if (form['input2'].value == answer)
			document.getElementById("result2").innerHTML = "Correct answer!";
		else
			document.getElementById("result2").innerHTML = "Incorrect answer! Please try again."


		sendXAPIStatement(xform['name'].value, xform['email'].value, "answered", "Statics Week 2 Module 3 Quiz 1 Question 1");
	}


	return (
		<div style={{ paddingLeft: "2cm", paddingRight: "2cm", textAlign: "left" }}>
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
				<title> Practice Quiz </title>
				<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
				<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
			</Head>
			<h1 style={{ paddingBottom: "1cm" }}> Practice Quiz </h1>
			<form ref={nameForm}>
			<br></br>

			<p> Parsing using regex for ax + b = c </p>
			<p> Var A: {a1} </p>
            <p> Var B: {b1} </p>
            <p> Var C: {c1} </p>
            <p> {newText} </p>

			<br></br>
				<p> 1. Solve for x. </p>
				<p> {a}x + {b} = {c} </p>
				
                <input placeholder={'Enter answer'} name={'input1'} />
				<br></br>
				<button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent1}>Check Answer</button>
				<p id="result1"> Input an answer - this line will update depending on your answer. </p>

				<br></br>
				<br></br>
				<br></br>

                <p> 2. An rectangular prism has length {a} m, {b} m, and {c} m. </p>
				<p> What is the volume of the rectangular prism in cm³? </p>

                <input placeholder={'Enter answer'} name={'input2'} />
				<br></br>
				<button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent2}>Check Answer</button>
				<p id="result2"> Input an answer - this line will update depending on your answer. </p>

                <br></br>
				<br></br>
				<br></br>


			</form >
		</div >
	)
}
