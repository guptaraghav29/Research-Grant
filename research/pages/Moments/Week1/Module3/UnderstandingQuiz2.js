import Head from 'next/head'
import React, { useRef } from 'react';
import XAPI from "@xapi/xapi";

export default function UnderstandingQuiz2() {
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
                         "en-US": "Student has viewed Week 1 Module 3 Understanding Quiz 2."
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
                        "en-US": "Student submitted their answer. Week 1 Module 3 Quiz 2 Question 1"
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
                        "en-US": "Student submitted their answer. Week 1 Module 3 Quiz 2 Question 2"
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
                        "en-US": "Student submitted their answer. Week 1 Module 3 Quiz 2 Question 3"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '4';
        console.log("value" + form['input3'].value);
        if (form['input3'].value == answer)
            document.getElementById("result3").innerHTML = "Correct answer!";
        else
            document.getElementById("result3").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent4 = () => {
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
                        "en-US": "Student submitted their answer. Week 1 Module 3 Quiz 2 Question 4"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '3';
        console.log("value " + form['input4'].value);
        if (form['input4'].value == answer)
            document.getElementById("result4").innerHTML = "Correct answer!";
        else
            document.getElementById("result4").innerHTML = "Incorrect answer! Please try again."
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
                <title> Understanding Quiz 2 </title>
            </Head>
            <h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding Part 2 </h1>
            <form ref={nameForm}>
                <p>1. In the figure below, the equivalent force-couple at point O is: </p>

                <select name={'input1'} size={'4'}>
                    <option value="1">-125√(3)i + 125j N, 496 N - m ccw</option>
                    <option value="2">-125√(3)i + 125j N, 496 N - m cw</option>
                    <option value="3">-125√(3)i + 125j N, 370 N - m ccw</option>
                    <option value="4">-125√(3)i + 125j N, 370 N - m cw</option>
                </select>
                <br></br>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>
                <img class="center" src="../../../images/quiz1_1_8.png" width="50%"></img>

                <p>2. In the figure below, what is the equivalent force at point O?</p>
                
                <select name={'input2'} size={'4'}>
                    <option value="1">-200 lb</option>
                    <option value="2">200 lb </option>
                    <option value="3">700 lb</option>
                    <option value="4">-500 lb</option>
                </select>
                <br></br>

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent2}>Check Answer</button>
                <p id="result2"> Input an answer - this line will update depending on your answer. </p>
                <img class="center" src="../../../images/quiz1_1_9.png" width="50%"></img>
                <p>3. (Same figure as for #2) In the figure below, what is the moment about point O?</p>

                <select name={'input3'} size={'4'}>
                    <option value="1">-800 lb-ft </option>
                    <option value="2">800 lb-ft</option>
                    <option value="3">-1050 lb-ft</option>
                    <option value="4">1050 lb-ft</option>
                </select>
                <br></br>

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent3}>Check Answer</button>
                <p id="result3"> Input an answer - this line will update depending on your answer. </p>

                <p>4. (Same figure as for #2) In the figure below, through what point on OA does the equivalent force at point O?</p>

                <select name={'input4'} size={'4'}>
                    <option value="1">-5.25 ft </option>
                    <option value="2">4 ft</option>
                    <option value="3">5.25 ft</option>
                    <option value="4">-4 ft</option>
                </select>
                <br></br>

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent4}>Check Answer</button>
                <p id="result4"> Input an answer - this line will update depending on your answer. </p>
            </form>
        </div>
    )
}