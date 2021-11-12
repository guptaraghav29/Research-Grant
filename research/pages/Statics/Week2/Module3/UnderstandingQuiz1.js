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
		var answer = '5';
		console.log("value" + form['input1'].value);
		if (form['input1'].value == answer)
			document.getElementById("result1").innerHTML = "Correct answer!";
		else
			document.getElementById("result1").innerHTML = "Incorrect answer! Please try again."


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
			<h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding 1 </h1>
			<form ref={nameForm}>
				<br></br>
				<p> 1. The figure displays a rod resting on a frictionless wall. Point S is a ball and socket whilst point R is a wheel support with lateral constraint. What is wrong with the following free body diagram? </p>
				<div class="row" style={{ display: "flex" }}>
					<div class="column" style={{ flex: "50%" }}>
						<img class="center" src="../../../images/quiz50.png" width="80%" padding="5px" height="100%"></img>
					</div>
					<div class="column" style={{ flex: "50%" }}>
						<img class="center" src="../../../images/quiz51.png" width="80%" padding="5px"></img>
					</div>
				</div>
				<p></p>

				<br></br>
				<select name={'input1'} size={'5'}>
					<option value="1"> There should be an x component force at point R. </option>
					<option value="2"> The free body diagram is correct and complete.</option>
					<option value="3"> There should be a downward z component force at point S. </option>
					<option value="4"> There should be a downward force at the rod’s center of mass due to gravity </option>
					<option value="5"> Both c and d </option>
				</select>
				<br></br>
				<button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent1}>Check Answer</button>
				<p id="result1"> Input an answer - this line will update depending on your answer. </p>

				<br></br>
				<br></br>
				<br></br>


			</form >
		</div >
	)
}
