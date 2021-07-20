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
                        "en-US": "Student has viewed Week 4 Module 1 Understanding Quiz 2."
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
                        "en-US": "Student submitted their answer. Week 4 Module 1 Quiz 2 Question 1"
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
                        "en-US": "Student submitted their answer. Week 4 Module 1 Quiz 2 Question 2"
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
                        "en-US": "Student submitted their answer. Week 4 Module 1 Quiz 2 Question 3"
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
                        "en-US": "Student submitted their answer.  Week 4 Module 1 Quiz 2 Question 4"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '3';
        console.log("value" + form['input4'].value);
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
                        "en-US": "Student submitted their answer.  Week 4 Module 1 Quiz 2 Question 5"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '4';
        console.log("value" + form['input5'].value);
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
                        "en-US": "Student submitted their answer.  Week 4 Module 1 Quiz 2 Question 6"
                    }
                }
            }
        };
        xapi.sendStatement(myStatement);
        console.log("Statement has been submitted.");

        const form = nameForm.current;
        var answer = '1';
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
                <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
                <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
            </Head>
            <h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding Part 2</h1>
            <form ref={nameForm}>
                <br></br>
                <p> The figure shows a parabolic area. Let’s determine the centroid of this area in two ways.</p>
                <img class="center" src="../../../images/quiz4_1_3.png" width="40%"></img>
                <p></p>
                <p>1. The area of the element in the figure shown <b>below</b> is: </p>

                <ol type='a'>
                    <li><math display='left'>
                        <mrow>
                            <mfrac>
                                <mn>1</mn>
                                <mn>2</mn>
                            </mfrac>
                            <munderover>
                                <mo>&#x222B;</mo>
                                <mn>0</mn>
                                <mn>8</mn>
                            </munderover>
                            <msup>
                                <mi>x</mi>
                                <mrow>
                                    <mfrac>
                                        <mn>1</mn>
                                        <mn>3</mn>
                                    </mfrac>
                                </mrow>
                            </msup>
                            <mi>d</mi><mi>x</mi></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <mfrac>
                                <mn>1</mn>
                                <mn>2</mn>
                            </mfrac>
                            <munderover>
                                <mo>&#x222B;</mo>
                                <mn>0</mn>
                                <mn>1</mn>
                            </munderover>
                            <msup>
                                <mi>x</mi>
                                <mrow>
                                    <mfrac>
                                        <mn>1</mn>
                                        <mn>3</mn>
                                    </mfrac>
                                </mrow>
                            </msup>
                            <mi>d</mi><mi>x</mi></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <munderover>
                                <mo>&#x222B;</mo>
                                <mn>0</mn>
                                <mn>1</mn>
                            </munderover>
                            <mo stretchy='false'>(</mo><mn>8</mn><mo>&#x2212;</mo><mn>8</mn><msup>
                                <mi>y</mi>
                                <mn>3</mn>
                            </msup>
                            <mo stretchy='false'>)</mo><mi>d</mi><mi>y</mi></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <munderover>
                                <mo>&#x222B;</mo>
                                <mn>0</mn>
                                <mn>8</mn>
                            </munderover>
                            <mo stretchy='false'>(</mo><mn>8</mn><mo>&#x2212;</mo><mn>8</mn><msup>
                                <mi>y</mi>
                                <mn>3</mn>
                            </msup>
                            <mo stretchy='false'>)</mo><mi>d</mi><mi>y</mi></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <munderover>
                                <mo>&#x222B;</mo>
                                <mn>0</mn>
                                <mn>8</mn>
                            </munderover>
                            <mn>8</mn><msup>
                                <mi>y</mi>
                                <mn>3</mn>
                            </msup>
                            <mi>d</mi><mi>x</mi></mrow>
                    </math>
                    </li>
                </ol>

                <br></br>
                <select name={'input1'} size={'5'}>
                    <option value="1"> Option A </option>
                    <option value="2"> Option B </option>
                    <option value="3"> Option C </option>
                    <option value="4"> Option D </option>
                    <option value="5"> Option E </option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>

                <br></br>

                <img class="center" src="../../../images/quiz4_1_4.png" width="40%"></img>
                <p></p>
                <p>2. The coordinates of the centroid of the area of the element above (indicated by the red dot) is: </p>

                <ol type="a">
                    <li><math display='left'>
                        <mrow>
                            <mo stretchy='false'>(</mo><mi>x</mi><mo>,</mo><mfrac>
                                <mi>y</mi>
                                <mn>2</mn>
                            </mfrac>
                            <mo stretchy='false'>)</mo></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <mo stretchy='false'>(</mo><mfrac>
                                <mi>x</mi>
                                <mn>2</mn>
                            </mfrac>
                            <mo>,</mo><mi>y</mi><mo stretchy='false'>)</mo></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <mo stretchy='false'>(</mo><mfrac>
                                <mrow>
                                    <mn>8</mn><mo>&#x2212;</mo><mi>x</mi></mrow>
                                <mn>2</mn>
                            </mfrac>
                            <mo>,</mo><mfrac>
                                <mi>y</mi>
                                <mn>2</mn>
                            </mfrac>
                            <mo stretchy='false'>)</mo></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <mo stretchy='false'>(</mo><mfrac>
                                <mrow>
                                    <mn>8</mn><mo>+</mo><mi>x</mi></mrow>
                                <mn>2</mn>
                            </mfrac>
                            <mo>,</mo><mi>y</mi><mo stretchy='false'>)</mo></mrow>
                    </math>
                    </li>
                </ol>

                <br></br>
                <select name={'input2'} size={'4'}>
                    <option value="1"> Option A </option>
                    <option value="2"> Option B </option>
                    <option value="3"> Option C </option>
                    <option value="4"> Option D </option>
                </select>
                <br></br>

                <button type="button" onClick={handleClickEvent2}>Check Answer</button>
                <p id="result2"> Input an answer - this line will update depending on your answer.</p>

                <br></br>
                <br></br>
                <br></br>

                <p>3. The coordinates of centroid of the area using the element above: </p>

                <ol type="a">
                    <li><math display='left'>
                        <mrow>
                            <mo stretchy='false'>(</mo><mfrac>
                                <mrow>
                                    <mn>32</mn></mrow>
                                <mn>7</mn>
                            </mfrac>
                            <mo>,</mo><mfrac>
                                <mn>2</mn>
                                <mn>5</mn>
                            </mfrac>
                            <mo stretchy='false'>)</mo></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <mo stretchy='false'>(</mo><mfrac>
                                <mrow>
                                    <mn>16</mn></mrow>
                                <mn>7</mn>
                            </mfrac>
                            <mo>,</mo><mfrac>
                                <mn>2</mn>
                                <mn>5</mn>
                            </mfrac>
                            <mo stretchy='false'>)</mo></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <mo stretchy='false'>(</mo><mfrac>
                                <mrow>
                                    <mn>32</mn></mrow>
                                <mn>7</mn>
                            </mfrac>
                            <mo>,</mo><mfrac>
                                <mn>1</mn>
                                <mn>5</mn>
                            </mfrac>
                            <mo stretchy='false'>)</mo></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <mo stretchy='false'>(</mo><mfrac>
                                <mrow>
                                    <mn>16</mn></mrow>
                                <mn>7</mn>
                            </mfrac>
                            <mo>,</mo><mfrac>
                                <mn>3</mn>
                                <mn>5</mn>
                            </mfrac>
                            <mo stretchy='false'>)</mo></mrow>
                    </math>
                    </li>
                </ol>

                <br></br>
                <select name={'input3'} size={'4'}>
                    <option value="1"> Option A </option>
                    <option value="2"> Option B </option>
                    <option value="3"> Option C </option>
                    <option value="4"> Option D </option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent3}>Check Answer</button>
                <p id="result3"> Input an answer - this line will update depending on your answer. </p>

                <br></br>
                <br></br>
                <br></br>

                <p>4. The expression for the area of the element in the figure is: </p>

                <ol type="a">
                    <li><math display='left'>
                        <mrow>
                            <mfrac>
                                <mn>1</mn>
                                <mn>2</mn>
                            </mfrac>
                            <munderover>
                                <mo>&#x222B;</mo>
                                <mn>0</mn>
                                <mn>8</mn>
                            </munderover>
                            <msup>
                                <mi>x</mi>
                                <mrow>
                                    <mfrac>
                                        <mn>1</mn>
                                        <mn>3</mn>
                                    </mfrac>
                                </mrow>
                            </msup>
                            <mi>d</mi><mi>x</mi></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <mfrac>
                                <mn>1</mn>
                                <mn>2</mn>
                            </mfrac>
                            <munderover>
                                <mo>&#x222B;</mo>
                                <mn>0</mn>
                                <mn>1</mn>
                            </munderover>
                            <msup>
                                <mi>x</mi>
                                <mrow>
                                    <mfrac>
                                        <mn>1</mn>
                                        <mn>3</mn>
                                    </mfrac>
                                </mrow>
                            </msup>
                            <mi>d</mi><mi>x</mi></mrow>
                    </math></li>
                    <li><math display='left'>
                        <mrow>
                            <munderover>
                                <mo>&#x222B;</mo>
                                <mn>0</mn>
                                <mn>1</mn>
                            </munderover>
                            <mo stretchy='false'>(</mo><mn>8</mn><mo>&#x2212;</mo><mn>8</mn><msup>
                                <mi>y</mi>
                                <mn>3</mn>
                            </msup>
                            <mo stretchy='false'>)</mo><mi>d</mi><mi>y</mi></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <munderover>
                                <mo>&#x222B;</mo>
                                <mn>0</mn>
                                <mn>8</mn>
                            </munderover>
                            <mn>8</mn><msup>
                                <mi>y</mi>
                                <mn>3</mn>
                            </msup>
                            <mi>d</mi><mi>x</mi></mrow>
                    </math>
                    </li>
                </ol>

                <br></br>
                <select name={'input4'} size={'5'}>
                    <option value="1"> Option A </option>
                    <option value="2"> Option B </option>
                    <option value="3"> Option C </option>
                    <option value="4"> Option D </option>
                    <option value="5"> Option E </option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent4}>Check Answer</button>
                <p id="result4"> Input an answer - this line will update depending on your answer. </p>

                <br></br>
                <br></br>
                <br></br>

                <img class="center" src="../../../images/quiz4_1_5.png" width="40%"></img>
                <p></p>
                <p>5. The coordinates of the centroid of the area of the element (shown by the red dot) is: </p>

                <ol type="a">
                    <li><math display='left'>
                        <mrow>
                            <mo stretchy='false'>(</mo><mi>x</mi><mo>,</mo><mfrac>
                                <mi>y</mi>
                                <mn>2</mn>
                            </mfrac>
                            <mo stretchy='false'>)</mo></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <mo stretchy='false'>(</mo><mfrac>
                                <mi>x</mi>
                                <mn>2</mn>
                            </mfrac>
                            <mo>,</mo><mi>y</mi><mo stretchy='false'>)</mo></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <mo stretchy='false'>(</mo><mfrac>
                                <mrow>
                                    <mn>8</mn><mo>&#x2212;</mo><mi>x</mi></mrow>
                                <mn>2</mn>
                            </mfrac>
                            <mo>,</mo><mfrac>
                                <mi>y</mi>
                                <mn>2</mn>
                            </mfrac>
                            <mo stretchy='false'>)</mo></mrow>
                    </math>
                    </li>
                    <li><math display='left'>
                        <mrow>
                            <mo stretchy='false'>(</mo><mfrac>
                                <mrow>
                                    <mn>8</mn><mo>+</mo><mi>x</mi></mrow>
                                <mn>2</mn>
                            </mfrac>
                            <mo>,</mo><mi>y</mi><mo stretchy='false'>)</mo></mrow>
                    </math>
                    </li>
                </ol>

                <br></br>
                <select name={'input5'} size={'4'}>
                    <option value="1"> Option A </option>
                    <option value="2"> Option B </option>
                    <option value="3"> Option C </option>
                    <option value="4"> Option D </option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent5}>Check Answer</button>
                <p id="result5"> Input an answer - this line will update depending on your answer. </p>


                <br></br>
                <br></br>
                <br></br>

                <p>6.The y-coordinate of the centroid of the area using the element above is: </p>

                <select name={'input6'} size={'4'}>
                    <option value="1"> 2/5 </option>
                    <option value="2"> 1/5 </option>
                    <option value="3"> 3/5 </option>
                    <option value="4"> 1/7 </option>
                </select>

                <br></br>
                <button type="button" onClick={handleClickEvent6}>Check Answer</button>
                <p id="result6"> Input an answer - this line will update depending on your answer. </p>
            </form>
        </div>
    )
}