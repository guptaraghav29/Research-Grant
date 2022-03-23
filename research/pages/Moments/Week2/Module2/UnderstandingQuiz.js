import Head from 'next/head'
import React, { useRef } from 'react';
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
                        "en-US": "Student has viewed Week 2 Module 2 Understanding Quiz."
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
                        "en-US": "Student submitted their answer. Week 2 Module 2 Quiz Question 1"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer1 = '10';
        var answer2 = '17.32';
        console.log("value" + form['input1'].value);
        if ((form['Q1I1'].value >= answer1 * 0.975) && (form['Q1I1'].value <= answer1 * 1.025) && (form['Q1I2'].value >= answer2 * 0.975) && (form['Q1I2'].value <= answer2 * 1.025))
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
                        "en-US": "Student submitted their answer. Week 2 Module 2 Quiz Question 2"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer1 = '900';
        var answer2 = '1500';
        console.log("value" + form['input2'].value);
        if ((form['Q2I1'].value >= answer1 * 0.975) && (form['Q2I1'].value <= answer1 * 1.025) && (form['Q2I2'].value >= answer2 * 0.975) && (form['Q2I2'].value <= answer2 * 1.025))
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
                        "en-US": "Student submitted their answer. Week 2 Module 2 Quiz Question 3"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer1 = '0';
        var answer2 = '5';
        var answer3 = '12';
        var answer4 = '3';
        var answer5 = '1';
        var answer6 = '2';

        console.log("value" + form['input3'].value);
        if ((form['Q3I1'].value >= answer1 * 0.975) && (form['Q3I1'].value <= answer1 * 1.025) && (form['Q3I2'].value >= answer2 * 0.975) && (form['Q3I2'].value <= answer2 * 1.025) && (form['Q3I3'].value >= answer3 * 0.975) && (form['Q3I3'].value <= answer3 * 1.025) && form['input9'].value == answer4 && form['input10'].value == answer5 && form['input11'].value == answer6)
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
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" placeholder={'Enter answer'} id={'input0'} onClick={handleClickEvent0}>Submit</button>
                <p style={{ color: "red", fontWeight: "bold" }} id="result0"> Status: Unsubmitted </p>
            </form>
            <Head>
                <title> Understanding Quiz </title>
            </Head>
            <h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding</h1>
            <form ref={nameForm}>
                <br></br>
                <br></br>
                <p>1. The figure below shows a weight W = 20 kN suspended by means of two cables attached to the ceiling at points A and B. The tension in the cable OA is <input placeholder={'Enter answer'} name={'input1'} id={'Q1I1'} /> kN while the tension in the cable OB is <input placeholder={'Enter answer'} name={'input1'} id={'Q1I2'} /> kN. </p>
                <br></br>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>
                <img class="center" src="../../../images/quiz2_1_8.png" width="50%"></img>
                
                <br></br>
                <br></br>
                <br></br>
                <p>2. The figure below shows a car standing on a flat road. The car weighs 2400 lb. The center of gravity is located at G and has a horizontal distance 3 ft from B. The distance between the front and the rear tires is 8 ft. The reaction force at tire A is <input placeholder={'Enter answer'} name={'input2'} id={'Q2I1'} /> lb while the reaction force at tire B is <input placeholder={'Enter answer'} name={'input2'} id={'Q2I2'} /> lb. </p>

                <br></br>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent2}>Check Answer</button>
                <p id="result2"> Input an answer - this line will update depending on your answer.</p>
                <img class="center" src="../../../images/quiz2_1_9.png" width="50%"></img>

                <br></br>
                <br></br>
                <br></br>

                <p>3. The figure shows a beam fixed at point A with two external forces. The magnitude of the horizontal reaction at A is <input placeholder={'Enter answer'} name={'input3'} id={'Q3I1'} /> kN and is pointed towards the   <select name={'input9'} size={'1'}> id={'Q3I4'} <option value="1">left</option><option value="2">right</option><option value="3">doesn't apply</option></select>. The vertical reaction at A has magnitude <input placeholder={'Enter answer'} name={'input3'} id={'Q3I2'} /> kN and is pointed  <select name={'input10'} size={'1'}> id={'Q3I5'} <option value="1">upwards</option><option value="2">downwards</option><option value="3">doesn't apply</option></select>. The moment reaction at A has magnitude <input placeholder={'Enter answer'} name={'input3'} id={'Q3I3'} /> kN-m. The sense of the moment is  <select name={'input11'} size={'1'}> id={'Q3I6'} <option value="1">clockwise</option><option value="2">counter-clockwise</option><option value="3">doesn't apply</option></select>.  </p>

                <br></br>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent3}>Check Answer</button>
                <p id="result3"> Input an answer - this line will update depending on your answer. </p>
                <img class="center" src="../../../images/quiz2_1_10.png" width="50%"></img>
            </form>
        </div>
    )

}