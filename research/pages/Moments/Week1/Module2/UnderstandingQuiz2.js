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
                         "en-US": "Student has viewed Week 1 Module 2 Understanding Quiz 2."
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
                        "en-US": "Student submitted their answer. Week 1 Module 2 Quiz 2 Question 1"
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
                        "en-US": "Student submitted their answer. Week 1 Module 2 Quiz 2 Question 2"
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
                        "en-US": "Student submitted their answer. Week 1 Module 2 Quiz 2 Question 3"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '3';
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
                        "en-US": "Student submitted their answer. Week 1 Module 2 Quiz 2 Question 4"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '2';
        console.log("value " + form['input4'].value);
        if (form['input4'].value == answer)
            document.getElementById("result4").innerHTML = "Correct answer!";
        else
            document.getElementById("result4").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent5 = () => {
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
                        "en-US": "Student submitted their answer. Week 1 Module 2 Quiz 2 Question 5"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '2';
        console.log("value " + form['input5'].value);
        if (form['input5'].value == answer)
            document.getElementById("result5").innerHTML = "Correct answer!";
        else
            document.getElementById("result5").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent6 = () => {
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
                        "en-US": "Student submitted their answer. Week 1 Module 2 Quiz 2 Question 6"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '4';
        console.log("value" + form['input6'].value);
        if (form['input6'].value == answer)
            document.getElementById("result6").innerHTML = "Correct answer!";
        else
            document.getElementById("result6").innerHTML = "Incorrect answer! Please try again."
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
                <p>1. The vector expression for force F<sub>2</sub> is </p>

                <select name={'input1'} size={'4'}>
                    <option value="1">200i - 400j N</option>
                    <option value="2">-200i + 400j N</option>
                    <option value="3">200i - 200j N</option>
                    <option value="4">-200i + 200j N</option>
                </select>
                <br></br>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>
                <img class="center" src="../../../images/quiz1_1_6.png" width="60%"></img>

                <p>2. (Same figure as above) The vector expression for the sum of the two forces F<sub>1</sub> and F<sub>2</sub> is: </p>

                <select name={'input2'} size={'4'}>
                    <option value="1">-350i + 250j N</option>
                    <option value="2">350i - 250j N</option>
                    <option value="3">350i + 550j N</option>
                    <option value="4">50i - 250j N</option>
                </select>
                <br></br>

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent2}>Check Answer</button>
                <p id="result2"> Input an answer - this line will update depending on your answer. </p>

                <p>3. (Same figure as above) The magnitude of the sum of the two forces is: </p>

                <select name={'input3'} size={'4'}>
                    <option value="1">652 N</option>
                    <option value="2">350 N</option>
                    <option value="3">430 N</option>
                    <option value="4">255 N</option>
                </select>
                <br></br>

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent3}>Check Answer</button>
                <p id="result3"> Input an answer - this line will update depending on your answer. </p>

                <p>4. (Same figure as above) The angle (in degrees) made by the sum of the forces with the positive x-axis is:</p>

                <select name={'input4'} size={'4'}>
                    <option value="1">35.5</option>
                    <option value="2">-35.5</option>
                    <option value="3">-42.1</option>
                    <option value="4">42.1</option>
                </select>
                <br></br>

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent4}>Check Answer</button>
                <p id="result4"> Input an answer - this line will update depending on your answer. </p>

                <p>5. The magnitude of the sum of the forces in the figure below is: </p>

                <select name={'input5'} size={'4'}>
                    <option value="1">34.1 lb</option>
                    <option value="2">45.9 lb</option>
                    <option value="3">56.3 lb</option>
                    <option value="4">33.9 lb</option>
                </select>
                <br></br>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent5}>Check Answer</button>
                <p id="result5"> Input an answer - this line will update depending on your answer. </p>

                <img class="center" src="../../../images/quiz1_1_7.png" width="40%"></img>

                <p>6. The angle (in degrees) made by the sum of the forces with the force F<sub>1</sub> is </p>

                <select name={'input6'} size={'4'}>
                    <option value="1">24.2</option>
                    <option value="2">29.3</option>
                    <option value="3">32.4</option>
                    <option value="4">45.8</option>
                </select>
                <br></br>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent6}>Check Answer</button>
                <p id="result6"> Input an answer - this line will update depending on your answer. </p>

            </form>
        </div>
    )
}