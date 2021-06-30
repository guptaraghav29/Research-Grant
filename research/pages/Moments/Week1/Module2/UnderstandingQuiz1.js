import Head from 'next/head'
import React, { useRef } from 'react';
import XAPI from "@xapi/xapi";

export default function UnderstandingQuiz1() {
    const nameForm = useRef(null);
    const xapiform = useRef(null);

     //xAPI data
     const endpoint = "https://xcite-testing.lrs.io/xapi/";
     const username = process.env.LRS_USERNAME || "telfur";
     const password = process.env.LRS_PASSWORD || "kikuev";
     const auth = XAPI.toBasicAuth(username, password);
     const xapi = new XAPI(endpoint, auth);
 
 
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
 
         // Create your statement
         const myStatement = {
             "actor": {
                 "name": name,
                 "mbox": "mailto:" + email
             },
             "verb": {
                 "id": "http://adlnet.gov/expapi/verbs/viewed",
                 "display": {
                     "en-US": 'viewed'
                 }
             },
             "object": {
                 "id": "https://elearn.ucr.edu/courses/3730",
                 "definition": {
                     "name": {
                         "en-US": "Student has viewed Week 1 Module 2 Understanding Quiz 1."
                     }
                 }
             }
         };
         xapi.sendStatement(myStatement);
         console.log("Statement has been submitted.");
     }
 

    const handleClickEvent1 = () => {
        const xform = xapiform.current;
        const name = xform['name'].value;
        console.log(name);
        const email = xform['email'].value;
        console.log(email);

        const myStatement = {
            "actor": {
                "name": name,
                "mbox": "mailto:" + email
            },
            "verb": {
                "id": "http://adlnet.gov/expapi/verbs/answered",
                "display": {
                    "en-US": 'answered'
                }
            },
            "object": {
                "id": "https://elearn.ucr.edu/courses/3730",
                "definition": {
                    "name": {
                        "en-US": "Student submitted their answer. Week 1 Module 2 Quiz 1 Question 1"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '1';
        console.log("value" + form['input1'].value);
        if (form['input1'].value == answer)
            document.getElementById("result1").innerHTML = "Correct answer!";
        else
            document.getElementById("result1").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent2 = () => {
        const xform = xapiform.current;
        const name = xform['name'].value;
        console.log(name);
        const email = xform['email'].value;
        console.log(email);

        const myStatement = {
            "actor": {
                "name": name,
                "mbox": "mailto:" + email
            },
            "verb": {
                "id": "http://adlnet.gov/expapi/verbs/answered",
                "display": {
                    "en-US": 'answered'
                }
            },
            "object": {
                "id": "https://elearn.ucr.edu/courses/3730",
                "definition": {
                    "name": {
                        "en-US": "Student submitted their answer. Week 1 Module 2 Quiz 1 Question 2"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '2';
        console.log("value" + form['input2'].value);
        if (form['input2'].value == answer)
            document.getElementById("result2").innerHTML = "Correct answer!";
        else
            document.getElementById("result2").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent3 = () => {
        const xform = xapiform.current;
        const name = xform['name'].value;
        console.log(name);
        const email = xform['email'].value;
        console.log(email);

        const myStatement = {
            "actor": {
                "name": name,
                "mbox": "mailto:" + email
            },
            "verb": {
                "id": "http://adlnet.gov/expapi/verbs/answered",
                "display": {
                    "en-US": 'answered'
                }
            },
            "object": {
                "id": "https://elearn.ucr.edu/courses/3730",
                "definition": {
                    "name": {
                        "en-US": "Student submitted their answer. Week 1 Module 2 Quiz 1 Question 3"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '4';
        console.log("value" + form['input3'].value);
        if (form['input3'].value === answer)
            document.getElementById("result3").innerHTML = "Correct answer!";
        else
            document.getElementById("result3").innerHTML = "Incorrect answer! Please try again."
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
                <button type="button" placeholder={'Enter answer'} id={'input0'} onClick={handleClickEvent0}>Submit</button>
                <p style={{ color: "red", fontWeight: "bold" }} id="result0"> Status: Unsubmitted </p>
            </form>
            <Head>
                <title> Understanding Quiz 1 </title>
            </Head>
            <h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding Part 1 </h1>
            <form ref={nameForm}>
                <p>1. The vector expression for the force in the figure below is: </p>
                <img class="center" src="../../../images/quiz1_1_4.png" width="40%"></img>
                <select name={'input1'} size={'4'}>
                    <option value="1">-10i + 10√(3j) lb </option>
                    <option value="2">-10i - 10√(3j) lb </option>
                    <option value="3">-20i + 20√(3j) lb </option>
                    <option value="4">-10√(3i) + 10j lb </option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>

                <p>2. The unit vector along the force in the figure below is: </p>

                <select name={'input2'} size={'4'}>
                    <option value="1">-0.8i + 0.6j </option>
                    <option value="2">-0.6i + 0.8j  </option>
                    <option value="3">0.6i - 0.8j </option>
                    <option value="4">0.8i - 0.6j</option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent2}>Check Answer</button>
                <p id="result2"> Input an answer - this line will update depending on your answer.</p>

                <img class="center" src="../../../images/quiz1_1_5.png" width="65%"></img>

                <p>3. The vector expression for the force in the figure above is: </p>

                <select name={'input3'} size={'5'}>
                    <option value="1">-1800i + 2400j N</option>
                    <option value="2">360i - 480j N</option>
                    <option value="3">-2400i + 1800j N </option>
                    <option value="4">-360i + 480j N</option>
                    <option value="5">1800i - 2400j N</option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent3}>Check Answer</button>
                <p id="result3"> Input an answer - this line will update depending on your answer. </p>


            </form>
        </div>
    )

}