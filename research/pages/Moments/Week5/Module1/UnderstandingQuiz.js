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
                        "en-US": "Student has viewed Week 5 Module 1 Understanding Quiz."
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
                        "en-US": "Student submitted their answer. Week 5 Module 1 Quiz Question 1"
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
                        "en-US": "Student submitted their answer. Week 5 Module 1 Quiz Question 2"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        // var answer = '1';
        console.log("value" + form['input2'].value);
        if (form['input2']['4'].checked && form['input2']['5'].checked && !form['input2']['0'].checked && !form['input2']['1'].checked && !form['input2']['2'].checked && !form['input2']['3'].checked)
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
                        "en-US": "Student submitted their answer. Week 5 Module 1 Quiz Question 3"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        // var answer = '2';
        console.log("value" + form['input3'].value);
        if (form['input3']['3'].checked && !form['input3']['0'].checked && !form['input3']['1'].checked && !form['input3']['2'].checked && !form['input3']['4'].checked)
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
                        "en-US": "Student submitted their answer.  Week 5 Module 1 Quiz Question 4"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '3';
        console.log("value" + form['input4'].value);
        if (form['input4']['0'].checked && form['input4']['1'].checked && form['input4']['2'].checked && form['input4']['3'].checked)
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
                        "en-US": "Student submitted their answer.  Week 5 Module 1 Quiz Question 5"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer1 = '112.4';
        console.log("value" + form['input5'].value);
        if ((form['Q5I1'].value >= answer1 * 0.975) && (form['Q5I1'].value <= answer1 * 1.025))
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
                        "en-US": "Student submitted their answer.  Week 5 Module 1 Quiz Question 6"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer1 = '24.56';
        console.log("value" + form['input6'].value);
        if ((form['Q6I1'].value >= answer1 * 0.975) && (form['Q6I1'].value <= answer1 * 1.025))
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
                <title> Understanding Quiz </title>
                <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
                <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
            </Head>
            <h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding</h1>
            <form ref={nameForm}>
                <br></br>
                <p> The figure shows a block B of mass 10 kg resting on a block A of 15 kg that rests on the ground. Block B  is restrained by a string to the wall. The coefficient of friction between blocks A and B is 0.25 while the coefficient between A and the ground is 0.3.  A force P acts an angle 50 degrees on B. </p>
                <img class="center" src="../../../images/quiz5_1_1.png" width="40%"></img>
                <p></p>
                <p>1. The figure shows the free-body diagram of block B. Which of the following are true? </p>
                <br></br>
                <select name={'input1'} size={'4'}>
                    <option value="1"> The force T should be pointing in the opposite direction. </option>
                    <option value="2"> The freebody diagram is complete and correct. </option>
                    <option value="3"> The reaction force N<sub>B</sub> should be in the opposite direction </option>
                    <option value="4"> The friction force F<sub>B</sub> should be in the opposite direction. </option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>

                <br></br>
                <br></br>
                <br></br>

                <img class="center" src="../../../images/quiz5_1_2.png" width="40%"></img>
                <p></p>
                <p>2. The figure shows the free-body diagram of block A. Which of the following are true? </p>

                <input name={'input2'} type="checkbox" /> a. The freebody diagram is complete and correct.
                <br></br>
                <input name={'input2'} type="checkbox" /> b. The reaction force N<sub>A</sub> should be in the opposite direction.
                <br></br>
                <input name={'input2'} type="checkbox" /> c. The weight of block A should be added.
                <br></br>
                <input name={'input2'} type="checkbox" /> d. The reaction force N<sub>B</sub> should be in the opposite direction.
                <br></br>
                <input name={'input2'} type="checkbox" /> e. The friction force F<sub>A</sub> should be in the opposite direction
                <br></br>
                <input name={'input2'} type="checkbox" /> f. The friction force F<sub>B</sub> should be in the opposite direction.
                <br></br>
                <br></br>

                <button type="button" onClick={handleClickEvent2}>Check Answer</button>
                <p id="result2"> Input an answer - this line will update depending on your answer.</p>

                <br></br>
                <br></br>
                <br></br>

                <img class="center" src="../../../images/quiz5_1_3.png" width="40%"></img>
                <p></p>
                <p>3. (Same figure as above) The following are the equilibrium equations for the two blocks. Which of them is incorrect? </p>

                <ol type='a'>
                    <li><math display='left'>
                        <mrow>
                            <mo>&#x2212;</mo><mi>T</mi><mo>+</mo><msub>
                                <mi>F</mi>
                                <mi>B</mi>
                            </msub>
                            <mo>=</mo><mn>0</mn></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <mo>&#x2212;</mo><msub>
                                <mi>W</mi>
                                <mi>B</mi>
                            </msub>
                            <mo>+</mo><msub>
                                <mi>N</mi>
                                <mi>B</mi>
                            </msub>
                            <mo>=</mo><mn>0</mn></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <mo>&#x2212;</mo><msub>
                                <mi>N</mi>
                                <mi>B</mi>
                            </msub>
                            <mo>+</mo><msub>
                                <mi>W</mi>
                                <mi>A</mi>
                            </msub>
                            <mo>+</mo><msub>
                                <mi>N</mi>
                                <mi>A</mi>
                            </msub>
                            <mo>+</mo><mi>P</mi><mi>sin</mi><mi>&#x03B8;</mi><mo>=</mo><mn>0</mn></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <mo>&#x2212;</mo><mi>P</mi><mi>cos</mi><mi>&#x03B8;</mi><mo>&#x2212;</mo><msub>
                                <mi>F</mi>
                                <mi>A</mi>
                            </msub>
                            <mo>&#x2212;</mo><msub>
                                <mi>F</mi>
                                <mi>B</mi>
                            </msub>
                            <mo>=</mo><mn>0</mn></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <mo>&#x2212;</mo><mi>P</mi><mi>cos</mi><mi>&#x03B8;</mi><mo>+</mo><msub>
                                <mi>F</mi>
                                <mi>A</mi>
                            </msub>
                            <mo>+</mo><msub>
                                <mi>F</mi>
                                <mi>B</mi>
                            </msub>
                            <mo>=</mo><mn>0</mn></mrow>
                    </math>
                    </li>
                </ol>

                <input name={'input3'} type="checkbox" /> Option A
                <br></br>
                <input name={'input3'} type="checkbox" /> Option B
                <br></br>
                <input name={'input3'} type="checkbox" /> Option C
                <br></br>
                <input name={'input3'} type="checkbox" /> Option D
                <br></br>
                <input name={'input3'} type="checkbox" /> Option E
                <br></br>
                <br></br>
                <button type="button" onClick={handleClickEvent3}>Check Answer</button>
                <p id="result3"> Input an answer - this line will update depending on your answer. </p>

                <br></br>
                <br></br>
                <br></br>

                <p>4. (Same figure as above) If the block A is at the verge of slipping, which of the following must be true? (there may be multiple correct answers) </p>

                <ol type='a'>
                    <li><math display='left'>
                        <mrow>
                            <msub>
                                <mi>F</mi>
                                <mi>A</mi>
                            </msub>
                            <mo>=</mo><msub>
                                <mi>&#x03BC;</mi>
                                <mi>A</mi>
                            </msub>
                            <msub>
                                <mi>N</mi>
                                <mi>A</mi>
                            </msub>
                        </mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <msub>
                                <mi>F</mi>
                                <mi>B</mi>
                            </msub>
                            <mo>=</mo><msub>
                                <mi>&#x03BC;</mi>
                                <mi>B</mi>
                            </msub>
                            <msub>
                                <mi>N</mi>
                                <mi>B</mi>
                            </msub>
                        </mrow>
                    </math></li>
                    <li><math display='left'>
                        <mrow>
                            <mo>&#x2212;</mo><msub>
                                <mi>W</mi>
                                <mi>B</mi>
                            </msub>
                            <mo>+</mo><msub>
                                <mi>N</mi>
                                <mi>B</mi>
                            </msub>
                            <mo>=</mo><mn>0</mn></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <mo>&#x2212;</mo><msub>
                                <mi>N</mi>
                                <mi>B</mi>
                            </msub>
                            <mo>&#x2212;</mo><msub>
                                <mi>W</mi>
                                <mi>A</mi>
                            </msub>
                            <mo>+</mo><msub>
                                <mi>N</mi>
                                <mi>A</mi>
                            </msub>
                            <mo>+</mo><mi>P</mi><mi>sin</mi><mi>&#x03B8;</mi><mo>=</mo><mn>0</mn></mrow>
                    </math>
                    </li>
                </ol>

                <input name={'input4'} type="checkbox" /> Option A
                <br></br>
                <input name={'input4'} type="checkbox" /> Option B
                <br></br>
                <input name={'input4'} type="checkbox" /> Option C
                <br></br>
                <input name={'input4'} type="checkbox" /> Option D

                <br></br>
                <button type="button" onClick={handleClickEvent4}>Check Answer</button>
                <p id="result4"> Input an answer - this line will update depending on your answer. </p>

                <br></br>
                <br></br>
                <br></br>

                <p>5. (Same figure as above) If Block B is on the verge of slipping, then the force P required is <input placeholder={'Enter answer'} name={'input5'} id={'Q5I1'} /> N.</p>
                <button type="button" onClick={handleClickEvent5}>Check Answer</button>
                <p id="result5"> Input an answer - this line will update depending on your answer. </p>

                <br></br>
                <br></br>
                <br></br>

                <p>6.(Same figure as above) The value of the tension in the cord is <input placeholder={'Enter answer'} name={'input6'} id={'Q6I1'} /> N. </p>
                <button type="button" onClick={handleClickEvent6}>Check Answer</button>
                <p id="result6"> Input an answer - this line will update depending on your answer. </p>
            </form>
        </div>
    )
}