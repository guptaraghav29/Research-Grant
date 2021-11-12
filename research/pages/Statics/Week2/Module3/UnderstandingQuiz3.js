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
	const endpoint = "https://xcite-testing.lrs.io/xapi/";
	const username = process.env.LRS_USERNAME || "telfur";
	const password = process.env.LRS_PASSWORD || "kikuev";
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

		sendXAPIStatement(xform['name'].value, xform['email'].value, "viewed", "Week 5 Module 1 Quiz")
	}

	const handleClickEvent1 = () => {

		const form = nameForm.current;
		var answer = '3';
		console.log("value" + form['input1'].value);
		if (form['input1'].value == answer)
			document.getElementById("result1").innerHTML = "Correct answer!";
		else
			document.getElementById("result1").innerHTML = "Incorrect answer! Please try again."


		sendXAPIStatement(name, email, "answered", "Week 5 Module 1 Quiz Question 1");
	}

	const handleClickEvent2 = () => {

		const form = nameForm.current;
		var answer = '1';
		console.log("value" + form['input2'].value);
		if (form['input2'].value == answer)
			document.getElementById("result2").innerHTML = "Correct answer!";
		else
			document.getElementById("result2").innerHTML = "Incorrect answer! Please try again."


		sendXAPIStatement(name, email, "answered", "Week 5 Module 1 Quiz Question 1");
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
				<title> Understanding Quiz </title>
				<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
				<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
			</Head>
			<h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding 3</h1>
			<form ref={nameForm}>
				<br></br>
				<p> 1. The 950-lb windmill is being removed due to malfunctions. The winches at points E and D will be used to remove it. If W<sub>1</sub> = 250 lb and W<sub>2</sub> = 350 lb, determine the force and moment reactions occurring at point O. Let θ = 35°,and Φ = 48°. Neglect the weight of the winches. </p>
				<img class="center" src="../../../images/quiz53.png" width="40%"></img>
				<p></p>
				<p>a. What are the force reactions at point O?</p>
				<select name={'input1'} size={'4'}>
					<option value="1"> Ox = 257lb, Oy = 223lb, Oz = -350lb  </option>
					<option value="2"> Ox = 365lb, Oy = 223lb, Oz = -236lb </option>
					<option value="3"> Ox =-365lb, Oy = -223lb, Oz = 236lb </option>
					<option value="4"> Ox = -257lb, Oy = -223lb, Oz = 350lb </option>
				</select>
				<br></br>
				<button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent1}>Check Answer</button>
				<p id="result1"> Input an answer - this line will update depending on your answer. </p>
				<p></p>
				<p>b. What are the moment reactions at point O?</p>
				<select name={'input2'} size={'4'}>
					<option value="1"> Mx = 2316 lb-ft , My = -4010 lb-ft , Mz = 0 lb-ft </option>
					<option value="2"> Mx = -2316 lb-ft , My = 4010 lb-ft , Mz = -0 lb-ft </option>
					<option value="3"> Mx = 2400 lb-ft , My = 3598 lb-ft , Mz = 18 lb-ft </option>
					<option value="4"> Mx = -2400 lb-ft , My = -3598 lb-ft , Mz = -18 lb-ft </option>
				</select>
				<br></br>
				<button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent2}>Check Answer</button>
				<p id="result2"> Input an answer - this line will update depending on your answer. </p>

				<br></br>
				<br></br>
				<br></br>


			</form>
		</div>
	)
}
