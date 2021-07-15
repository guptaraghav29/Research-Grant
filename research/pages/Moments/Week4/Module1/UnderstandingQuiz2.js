import Head from 'next/head'
import { render } from 'react-dom'
import React, { Component, useRef, useState, useEffect } from 'react';
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
                        "en-US": "Student has viewed Week 3 Module 1 Understanding Quiz."
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
                        "en-US": "Student submitted their answer. Week 3 Module 1 Quiz Question 1"
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
                        "en-US": "Student submitted their answer. Week 3 Module 1 Quiz Question 2"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer1 = '0';
        var answer2 = '200';
        var answer3 = '200';
        console.log("value" + form['input2'].value);
        if ((form['Q2I1'].value >= answer1 * 0.975) && (form['Q2I1'].value <= answer1 * 1.025) && (form['Q2I2'].value >= answer2 * 0.975) && (form['Q2I2'].value <= answer2 * 1.025) && (form['Q2I3'].value >= answer3 * 0.975) && (form['Q2I3'].value <= answer3 * 1.025))
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
                        "en-US": "Student submitted their answer. Week 3 Module 1 Quiz Question 3"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        console.log("value" + form['input3'].value);

        if (form['input3']['1'].checked && form['input3']['3'].checked && !form['input3']['2'].checked && !form['input3']['4'].checked && !form['input3']['0'].checked)
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
                        "en-US": "Student submitted their answer. Week 3 Module 1 Quiz Question 4"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        console.log("value" + form['input4'].value);

        if (form['input4']['1'].checked && form['input4']['2'].checked && !form['input4']['0'].checked && !form['input4']['3'].checked && !form['input4']['4'].checked)
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
                        "en-US": "Student submitted their answer. Week 3 Module 1 Quiz Question 5"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer1 = '32.2';
        var answer2 = '0';
        var answer3 = '32.2';
        console.log("value" + form['input2'].value);
        if ((form['Q5I1'].value >= answer1 * 0.975) && (form['Q5I1'].value <= answer1 * 1.025) && (form['Q5I2'].value >= answer2 * 0.975) && (form['Q5I2'].value <= answer2 * 1.025) && (form['Q5I3'].value >= answer3 * 0.975) && (form['Q5I3'].value <= answer3 * 1.025))
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
                        "en-US": "Student submitted their answer. Week 3 Module 1 Quiz Question 6"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '3';
        console.log("value" + form['input6'].value);
        if (form['input6'].value == answer)
            document.getElementById("result6").innerHTML = "Correct answer!";
        else
            document.getElementById("result6").innerHTML = "Incorrect answer! Please try again."
    }

    return (
        <div style={{ paddingLeft: "2cm", paddingRight: "2cm", textAlign: "left" }}>
            <div>
            </div>
            <div></div>
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
            <h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding Part 2</h1>
            <form ref={nameForm}>
                <br></br>
                <p> The figure shows a ladder that is connected to the ground with a pin joint at A and a roller joint at B. Both members AC and BC have the same weight W. W = 200 N, and L = 0.5 m. The angle θ = 15°.</p>
                <img class="center" src="../../../images/quiz3_1_1.png" width="40%"></img>
                <p></p>
                <p>1. Shown below is the freebody diagram for the whole frame. Which of the following statements are true? </p>
                <img class="center" src="../../../images/quiz3_1_2.png" width="40%"></img>

                <br></br>
                <select name={'input1'} size={'5'}>
                    <option value="1">The spring force should be added.</option>
                    <option value="2">The freebody diagram is complete and accurate</option>
                    <option value="3">The horizontal reaction at C should be included.</option>
                    <option value="4">The vertical reaction at C should be included</option>
                    <option value="5">A moment reaction should be included at A.</option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>

                <br></br>
                <br></br>
                <br></br>

                <p>2. The support reactions at A are Ax = <input placeholder={'Enter answer'} name={'input2'} id={'Q2I1'} /> and Ay = <input placeholder={'Enter answer'} name={'input2'} id={'Q2I2'} /> N. The support reaction at B is By = <input placeholder={'Enter answer'} name={'input2'} id={'Q2I3'} />.</p>

                <button type="button" onClick={handleClickEvent2}>Check Answer</button>
                <p id="result2"> Input an answer - this line will update depending on your answer.</p>

                <br></br>
                <br></br>
                <br></br>

                <p>3. The figure (below) shows the freebody diagram of BC. Which of the following statements are true? </p>
                <img class="center" src="../../../images/quiz3_1_3.png" width="40%"></img>
                <br></br>
                <input name={'input3'} type="checkbox" /> a. The freebody diagram is complete and accurate.
                <br></br>
                <input name={'input3'} type="checkbox" /> b. Spring force should be horizontal.
                <br></br>
                <input name={'input3'} type="checkbox" /> c. Horizontal reaction at C should be removed.
                <br></br>
                <input name={'input3'} type="checkbox" /> d. Vertical reaction at C should be included.
                <br></br>
                <input name={'input3'} type="checkbox" /> e. Weight should be removed.
                <br></br>

                <button type="button" onClick={handleClickEvent3}>Check Answer</button>
                <p id="result3"> Input an answer - this line will update depending on your answer. </p>

                <br></br>
                <br></br>
                <br></br>

                <p>4. The figure below shows the freebody diagrams for both AC and BC. Assuming that the freebody diagram of BC is correct, which of the following statements are true about the freebody diagram for AC? </p>
                <img class="center" src="../../../images/quiz3_1_4.png" width="40%"></img>


                <input name={'input4'} type="checkbox" /> a. Both diagrams are complete and correct.
                <br></br>
                <input name={'input4'} type="checkbox" /> b. The spring force on AC should be in the opposite direction.
                <br></br>
                <input name={'input4'} type="checkbox" /> c. The vertical reaction at C should be in the opposite direction.
                <br></br>
                <input name={'input4'} type="checkbox" /> d. The horizontal reaction at C should be in the opposite direction
                <br></br>
                <input name={'input4'} type="checkbox" /> e. The weight vector should be removed.
                <br></br>

                <br></br>
                <button type="button" onClick={handleClickEvent4}>Check Answer</button>
                <p id="result4"> Input an answer - this line will update depending on your answer. </p>

                <br></br>
                <br></br>
                <br></br>

                <p>5. From the freebody diagram of BC, the magnitude of the reaction components at C are: C<sub>x</sub> = <input placeholder={'Enter answer'} name={'input5'} id={'Q5I1'} /> N and C<sub>y</sub> = <input placeholder={'Enter answer'} name={'input5'} id={'Q5I2'} /> N. The magnitude of the force of the spring is F<sub>s</sub> = <input placeholder={'Enter answer'} name={'input5'} id={'Q5I3'} />. </p>
                <button type="button" onClick={handleClickEvent5}>Check Answer</button>
                <p id="result5"> Input an answer - this line will update depending on your answer. </p>
                <img class="center" src="../../../images/quiz3_1_5.png" width="40%"></img>

                <br></br>
                <br></br>
                <br></br>

                <p>6. The figure shows the freebody diagram of AC. Which of the following equations is the correct equation for moments about point A? </p>
                <img class="center" src="../../../images/quiz3_1_6.png" width="40%"></img>

                <br></br>
                <p>The options are listed below. Please choose an option. </p>
                <img class="center" src="../../../images/quiz3_1_7.png" width="40%"></img>
                <img class="center" src="../../../images/quiz3_1_8.png" width="40%"></img>
                <img class="center" src="../../../images/quiz3_1_9.png" width="40%"></img>
                <img class="center" src="../../../images/quiz3_1_10.png" width="40%"></img>
                <select name={'input6'} size={'4'}>
                    <option value="1"> Option A </option>
                    <option value="2"> Option B </option>
                    <option value="3"> Option C </option>
                    <option value="4"> Option D </option>
                </select>

                <br></br>
                <button type="button" onClick={handleClickEvent6}>Check Answer</button>
                <p id="result6"> Input an answer - this line will update depending on your answer. </p>
            </form>
        </div>
    )
}