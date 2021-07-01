import Head from 'next/head'
import React, { useRef } from 'react';
import XAPI from "@xapi/xapi";

export default function UnderstandingQuiz() {
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
                        "en-US": "Student has viewed Week 2 Module 1 Understanding Quiz."
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
                        "en-US": "Student submitted their answer. Week 2 Module 1 Quiz Question 1"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '2';
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
                        "en-US": "Student submitted their answer. Week 2 Module 1 Quiz Question 2"
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
                        "en-US": "Student submitted their answer. Week 2 Module 1 Quiz Question 3"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '1';
        console.log("value" + form['input3'].value);
        if (form['input3'].value === answer)
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
                        "en-US": "Student submitted their answer. Week 2 Module 1 Quiz Question 4"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '4';
        console.log("value" + form['input4'].value);
        if (form['input4'].value === answer)
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
                <title> Understanding Quiz 1 </title>
            </Head>
            <h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding</h1>
            <form ref={nameForm}>
                <p> Please use the following image for the next couple of questions: </p>
                <img class="center" src="../../../images/quiz1_1_10.png" width="65%"></img>
                <br></br>
                <br></br>
                <p>1. The vector expression for force F<sub>1</sub> is: </p>

                <select name={'input1'} size={'4'}>
                    <option value="1">5j-5k kN</option>
                    <option value="2">8i-6k kN</option>
                    <option value="3">-8i+6k kN</option>
                    <option value="4">-6i+8k kN </option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>

                <p>2. The vector expression for force F<sub>2</sub> is: (Same figure as above) </p>

                <select name={'input2'} size={'4'}>
                    <option value="1">8i-6k kN </option>
                    <option value="2">5j-5k kN </option>
                    <option value="3">-8i+6k kN</option>
                    <option value="4">-6i+8k kN</option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent2}>Check Answer</button>
                <p id="result2"> Input an answer - this line will update depending on your answer.</p>

                <p>3. The component of the force F<sub>1</sub> along the z-axis is: (Same figure as above) </p>

                <select name={'input3'} size={'4'}>
                    <option value="1">-6k</option>
                    <option value="2">2k</option>
                    <option value="3">8k</option>
                    <option value="4">6k</option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent3}>Check Answer</button>
                <p id="result3"> Input an answer - this line will update depending on your answer. </p>

                <p>4. The vector expression of the force F<sub>1</sub>  (in kN) along the vector <i>i + 2j - 2k</i> is: (Same figure as above) </p>

                <select name={'input4'} size={'4'}>
                    <option value="1">2.2i - 4.4j - 4.4k</option>
                    <option value="2">20i + 40j - 40k</option>
                    <option value="3">2i + 4j - 4k</option>
                    <option value="4">2.2i + 4.4j - 4.4k</option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent4}>Check Answer</button>
                <p id="result4"> Input an answer - this line will update depending on your answer. </p>

            </form>
        </div>
    )

}