import Head from 'next/head'
import React, { useRef } from 'react';
import XAPI from "@xapi/xapi";

export default function UnderstandingQuiz2() {
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
                         "en-US": "Student has viewed Week 1 Module 4 Understanding Quiz 2."
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
                        "en-US": "Student submitted their answer. Week 1 Module 4 Quiz 2 Question 1"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '3';
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
                        "en-US": "Student submitted their answer. Week 1 Module 4 Quiz 2 Question 2"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '1';
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
                        "en-US": "Student submitted their answer. Week 1 Module 4 Quiz 2 Question 3"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '2';
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
                        "en-US": "Student submitted their answer. Week 1 Module 4 Quiz 2 Question 4"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '1';
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
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" placeholder={'Enter answer'} id={'input0'} onClick={handleClickEvent0}>Submit</button>
                <p style={{ color: "red", fontWeight: "bold" }} id="result0"> Status: Unsubmitted </p>
            </form>
            <Head>
                <title> Understanding Quiz 2 </title>
            </Head>
            <h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding Part 2 </h1>
            <form ref={nameForm}>
                <p> Please use the following image for the next couple of questions: </p>
                <img class="center" src="../../../images/quiz1_1_10.png" width="65%"></img>
                <br></br>
                <br></br>
                <p>7. The sum of the two forces F<sub>1</sub> and F<sub>2</sub> is:  </p>

                <select name={'input1'} size={'4'}>
                    <option value="1">8i - 5j- k kN</option>
                    <option value="2">3i + 2j - 3k kN</option>
                    <option value="3">8i + 5j - 11k kN</option>
                    <option value="4">5i + 2j - 11k kN</option>
                </select>
                <br></br>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>

                <p>8. The sum of the two moments M<sub>1</sub> and M<sub>2</sub> is: </p>

                <select name={'input2'} size={'4'}>
                    <option value="1">-10i + 12j + 0k kN - m</option>
                    <option value="2">-10i - 12j + 0k kN - m</option>
                    <option value="3">10i + 12j + 0k kN - m</option>
                    <option value="4">10i - 12j + 0k kN - m</option>
                </select>
                <br></br>

                <button  class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent2}>Check Answer</button>
                <p id="result2"> Input an answer - this line will update depending on your answer. </p>
                <p>9. The magnitude of projection of the sum of moments onto the vector sum of the forces is:</p>

                <select name={'input3'} size={'4'}>
                    <option value="1">1.39</option>
                    <option value="2">-1.39</option>
                    <option value="3">2.78</option>
                    <option value="4">-2.78</option>
                </select>
                <br></br>

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent3}>Check Answer</button>
                <p id="result3"> Input an answer - this line will update depending on your answer. </p>

                <p>10. The component of the vector sum of moments perpendicular to the vector sum of the forces is: </p>

                <select name={'input4'} size={'4'}>
                    <option value="1">-9.24i + 12.48j - 1.05k kN - m </option>
                    <option value="2">-0.76i - 0.48j + 1.05k kN - m</option>
                    <option value="3">3.24i - 1.34j + 2.34k kN - m</option>
                    <option value="4">-2.58i - 4.62j + 1.87k kN - m</option>
                </select>
                <br></br>

                <button  class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent4}>Check Answer</button>
                <p id="result4"> Input an answer - this line will update depending on your answer. </p>
            </form>
        </div>
    )
}