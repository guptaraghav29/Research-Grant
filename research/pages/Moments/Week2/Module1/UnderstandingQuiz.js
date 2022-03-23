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
        console.log("value" + form['input1'].value);

        if (form['input1']['6'].checked && form['input1']['7'].checked && form['input1']['10'].checked && !form['input1']['0'].checked && !form['input1']['1'].checked && !form['input1']['2'].checked && !form['input1']['3'].checked && !form['input1']['4'].checked && !form['input1']['5'].checked && !form['input1']['8'].checked && !form['input1']['9'].checked) 
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
        console.log("value" + form['input2'].value);

        if (form['input2']['2'].checked && form['input2']['5'].checked && form['input2']['6'].checked && !form['input2']['0'].checked && !form['input2']['1'].checked && !form['input2']['3'].checked && !form['input2']['4'].checked)
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
        console.log("value" + form['input3'].value);

        if (form['input3']['2'].checked && form['input3']['4'].checked && !form['input3']['3'].checked && !form['input3']['1'].checked && !form['input3']['0'].checked)
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
        console.log("value" + form['input4'].value);

        if (form['input4']['0'].checked && !form['input4']['1'].checked && !form['input4']['2'].checked)
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
                <title> Understanding Quiz 1 </title>
            </Head>
            <h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding</h1>
            <form ref={nameForm}>
                <br></br>
                <p>1. The figure below shows a ladder resting against a wall. The ladder has mass m. Both the wall and the floor are rough. </p>
                <p> Which of the following is true? (more than one may be true) </p>
              
    
                
                <img class="center" src="../../../images/quiz2_1_1.png" width="40%"></img>
                <img class="center" src="../../../images/quiz2_1_2.png" width="40%"></img>
             
                <input name={'input1'} type="checkbox"/> a. The free body diagram is complete and correct.
                <br></br>
                <input name={'input1'} type="checkbox"/> b. The horizontal reaction at B should be deleted.
                <br></br>
                <input name={'input1'} type="checkbox"/> c. The horizontal reaction at B should point in the positive x-direction.
                <br></br>
                <input name={'input1'} type="checkbox"/> d. The vertical reaction at B should be deleted.
                <br></br>
                <input name={'input1'} type="checkbox"/> e. The vertical reaction at B should point in the negative y-direction.
                <br></br>
                <input name={'input1'} type="checkbox"/> f. The vertical reaction at A should be deleted. 
                <br></br>
                <input name={'input1'} type="checkbox"/> g. The vertical reaction at B should point in the positive y-direction. 
                <br></br>
                <input name={'input1'} type="checkbox"/> h. A horizontal reaction at A should be added in the positive x-direction
                <br></br>
                <input name={'input1'} type="checkbox"/> i. A horizontal reaction at A should be added in the negative x-direction.
                <br></br>
                <input name={'input1'} type="checkbox"/> j. The weight of the ladder needs to be added. This weight is vertically downwards and passes through point A.
                <br></br>
                <input name={'input1'} type="checkbox"/> k. The weight of the ladder needs to be added. This weight is vertically downwards and passes through point G, the center of gravity.
                <br></br>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>

                <p>2. The figure shows a roller being held in place by means of weight connected by a cable over a pulley. </p>
                <p> Shown below is the free-body diagram of the roller. Which of the following is true? (Mark all the statements that are true)</p>
                <img class="center" src="../../../images/quiz2_1_4.png" width="35%"></img>
                <img class="center" src="../../../images/quiz2_1_5.png" width="35%"></img>
                
                <input name={'input2'} type="checkbox"/> a. The free body diagram is complete and correct. 
                <br></br>
                <input name={'input2'} type="checkbox"/> b. The force from the cable should be deleted.
                <br></br>
                <input name={'input2'} type="checkbox"/> c. The force from the cable should point in the opposite direction.
                <br></br>
                <input name={'input2'} type="checkbox"/> d. The force from the cable must be parallel to the incline. 
                <br></br>
                <input name={'input2'} type="checkbox"/> e. The vertically downward force through G should be deleted.
                <br></br>
                <input name={'input2'} type="checkbox"/> f. The force at A is pointing in the incorrect direction.
                <br></br>
                <input name={'input2'} type="checkbox"/> g. The force at A must point perpendicular to the incline and directed towards towards G.
                <br></br>

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent2}>Check Answer</button>
                <p id="result2"> Input an answer - this line will update depending on your answer.</p>

                <p>3. The figure below shows the same system with the free body diagram of the pulley. Note that B represents the axle of the pulley. Assume that the pulley has no mass. Which of the following is true? (Mark all the statements that are true) </p>
                <img class="center" src="../../../images/quiz2_1_6.png" width="65%"></img>

                <input name={'input3'} type="checkbox"/> a. The free body diagram is complete and correct.
                <br></br>
                <input name={'input3'} type="checkbox"/> b. Force T<sub>1</sub> should be directed in the opposite direction.
                <br></br>
                <input name={'input3'} type="checkbox"/> c. Force T<sub>2</sub> should be directed in the opposite direction
                <br></br>
                <input name={'input3'} type="checkbox"/> d. Force F<sub>y</sub> should be deleted.
                <br></br>
                <input name={'input3'} type="checkbox"/> e. A horizontal force should be added at B.
                <br></br>
           
                <button  class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent3}>Check Answer</button>
                <p id="result3"> Input an answer - this line will update depending on your answer. </p>

                <p>4. The figure below shows the same system with the free-body diagram of the mass. Which of the following is true? (Mark all the statements that are true)</p>
                <img class="center" src="../../../images/quiz2_1_7.png" width="65%"></img>

             
                <input name={'input4'} type="checkbox"/> a. The free body diagram is complete and correct.
                <br></br>
                <input name={'input4'} type="checkbox"/> b. The force F should be pointing downwards.
                <br></br>
                <input name={'input4'} type="checkbox"/> c. The weight should be pointing in the upward direction.
                <br></br>
                
                <br></br>
                <button  class="bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded-full" type="button" onClick={handleClickEvent4}>Check Answer</button>
                <p id="result4"> Input an answer - this line will update depending on your answer. </p>

            </form>
        </div>
    )

}