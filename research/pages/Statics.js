import Head from 'next/head'
import Navigation from './Navigation';
import React, { useRef } from 'react';


export default function Statics() {

    const xAPIFORM = useRef(null);
    const nameForm = useRef(null);

    const sendStatement = () => {
        const form = xAPIFORM.current;
        const uNamejs = form['name'].value;
        console.log(uNamejs);
        const uEmailjs = form['email'].value;
        console.log(uEmailjs);
        const conf = {
            "endpoint": "https://xcite-testing.lrs.io/xapi/",
            "auth": "Basic " + toBase64("telfur:kikuev")
        };
        ADL.XAPIWrapper.changeConfig(conf);
        const statement = {
            "actor": {
                "name": uNamejs,
                "mbox": "mailto:" + uEmailjs
            },
            "verb": {
                "id": verbId,
                "display": { "en-US": verb }
            },
            "object": {
                "id": objectId,
                "definition": {
                    "name": { "en-US": object }
                }
            }
        };
        ADL.XAPIWrapper.sendStatement(statement);
        alert("Statement has been sent");
    }

    const handleClickEvent1 = () => {
        const form = nameForm.current;
        var answer = -5.5;
        console.log("value" + form['input1'].value);
        if (form['input1'].value == answer)
            document.getElementById("result1").innerHTML = "Correct answer!";
        else
            document.getElementById("result1").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent2 = () => {
        const form = nameForm.current;
        var answer = -14.5;
        console.log("value" + form['input2'].value);
        if (form['input2'].value == answer)
            document.getElementById("result2").innerHTML = "Correct answer!";
        else
            document.getElementById("result2").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent3 = () => {
        const form = nameForm.current;
        var answer = 12;
        console.log("value" + form['input3'].value);
        if (form['input3'].value == answer)
            document.getElementById("result3").innerHTML = "Correct answer!";
        else
            document.getElementById("result3").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent4 = () => {
        const form = nameForm.current;
        var answer = 24.17;
        console.log("value" + form['input4'].value);
        if (form['input4'].value == answer)
            document.getElementById("result4").innerHTML = "Correct answer!";
        else
            document.getElementById("result4").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent5 = () => {
        const form = nameForm.current;
        var answer = -7.34;
        console.log("value" + form['input5'].value);
        if (form['input5'].value == answer)
            document.getElementById("result5").innerHTML = "Correct answer!";
        else
            document.getElementById("result5").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent6 = () => {
        const form = nameForm.current;
        var answer = -7.34;
        console.log("value" + form['input6'].value);
        if (form['input6'].value == answer)
            document.getElementById("result6").innerHTML = "Correct answer!";
        else
            document.getElementById("result6").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent7 = () => {
        const form = nameForm.current;
        var answer = 5.42;
        console.log("value" + form['input7'].value);
        if (form['input7'].value == answer)
            document.getElementById("result7").innerHTML = "Correct answer!";
        else
            document.getElementById("result7").innerHTML = "Incorrect answer! Please try again."
    }

    return (
        <div>
            {/* <script type="text/javascript" src="xapiwrapper.min.js"></script><script type="text/javascript" src="xapi-statement-v4.js"></script> */}
            <br></br>
            <form ref={xAPIFORM}>
                <p> Please enter your name and email.</p>
                <label> Name: </label>
                <input placeholder={'Enter name'} name={'name'} />
                <label>  Email: </label>
                <input placeholder={'Enter email'} name={'email'} />
                <button placeholder={'Enter answer'} name={'input7'} onClick={sendStatement}>Submit</button>
            </form>
            <Head>
                <title>Statics: Method of Joints </title>
            </Head>
            {/* <Navigation></Navigation> */}
            <h1> Statics: Method of Joints </h1>
            <h5 style={{ paddingLeft: "2cm", paddingRight: "2cm" }}> <b> Problem:</b> You are given equations to solve missing pieces of the question. Please evaluate for the variables/forces specified. </h5>
            <br></br>
            <img class="center" src="images/Statics3.jpeg" alt="Statics" width="75%"></img>
            <p></p>
            <img class="center" src="images/Statics2.jpeg" alt="Statics" width="75%"></img>
            <p></p>
            <div class="container" style={{ textAlign: "left;", display: "flex;", height: "100px;", width: "100%" }}>
                <div style={{ width: "50%" }}>
                    <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> EQUATIONS </p>
                    <p style={{ color: "crimson;", fontWeight: "bold" }}> W<sub>1</sub> = 20 kN, W<sub>2</sub> = 12 kN </p>
                    <p style={{ color: "crimson;", fontWeight: "bold" }}> ∠BAD = 36.87°, ∠DBC = 53.13° </p>
                    <p> <b> <u>  The equations are provided below: </u></b> </p>
                    <p> ∑M<sub>a</sub> = 0 </p>
                    <p> (W<sub>1</sub>)(AB) - (W<sub>2</sub>)(BD) + (C<sub>y</sub>)(AC) = 0 </p>
                    <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> C<sub>y</sub> = ? </p>
                    <br></br>
                    <p> ∑F<sub>y</sub> = 0 </p>
                    <p> A<sub>y</sub> = C<sub>y</sub> + W<sub>1</sub> </p>
                    <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> A<sub>y</sub> = ? </p>
                    <br></br>
                    <p> ∑F<sub>x</sub> = 0 </p>
                    <p> -A<sub>x</sub> + W<sub>2</sub> = 0 </p>
                    <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> A<sub>x</sub> = ? </p>
                    <br></br>
                    <br></br>
                    <p> <b><u>  Analysis of Joint A </u></b> </p>
                    <p> +↑∑F<sub>y</sub> = 0 </p>
                    <p> F<sub>AB</sub>sin(∠DAB) + A<sub>y</sub> = 0 </p>
                    <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> F<sub>AB</sub> = ? </p>
                    <br></br>
                    <p> +→  ∑F<sub>x</sub> = 0 </p>
                    <p> -A<sub>x</sub> + F<sub>AD</sub> +  F<sub>AB</sub>cos(∠DAB) = 0 </p>
                    <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> F<sub>AD</sub> = ? </p>
                    <br></br>
                    <br></br>
                    <p> <b> <u>  Analysis of Joint D </u> </b></p>
                    <p> +↑∑F<sub>y</sub> = 0 </p>
                    <p> F<sub>DB</sub> = 0 </p>
                    <p> -F<sub>DA</sub> + -F<sub>DC</sub> = 0 </p>
                    <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> F<sub>DC</sub> = ? </p>
                    <br></br>
                    <br></br>
                    <p> <b> <u>  Analysis of Joint B </u> </b></p>
                    <p> +→  ∑F<sub>x</sub> = 0 </p>
                    <p> -F<sub>BA</sub>sin(∠DBC) + F<sub>BC</sub>sin(∠DBC) + A<sub>x</sub> = 0 </p>
                    <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> F<sub>BC</sub> = ? </p>
                    <br></br>
                </div>
                <div style={{ flexGrow: "1;" }}>
                    <form ref={nameForm} style={{ textAlign: "right;" }}>
                        <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;", marginBottom: "0cm" }}> QUESTIONS </p>
                        <p style={{ marginBottom: "0.15cm" }}> Solve for the following. Units are in kN. </p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p style={{ marginBottom: "0.15cm" }}> Solve for C<sub>y</sub>  </p>
                        <input placeholder={'Enter answer'} name={'input1'} />
                        <button type="button" onClick={handleClickEvent1}>Check Answer</button>
                        <p id="result1"> Input an answer - this line will update depending on your answer. </p>
                        <br></br>
                        <p style={{ marginBottom: "0.15cm" }}> Solve for A<sub>y</sub>  </p>
                        <input placeholder={'Enter answer'} name={'input2'} />
                        <button type="button" onClick={handleClickEvent2}>Check Answer</button>
                        <p id="result2"> Input an answer - this line will update depending on your answer. </p>
                        <br></br>
                        <p style={{ marginBottom: "0.15cm" }}> Solve for A<sub>x</sub>  </p>
                        <input placeholder={'Enter answer'} name={'input3'} />
                        <button type="button" onClick={handleClickEvent3}>Check Answer</button>
                        <p id="result3"> Input an answer - this line will update depending on your answer. </p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p style={{ marginBottom: "0.15cm" }}> Solve for F<sub>AB</sub> </p>
                        <input placeholder={'Enter answer'} name={'input4'} />
                        <button type="button" onClick={handleClickEvent4}>Check Answer</button>
                        <p id="result4"> Input an answer - this line will update depending on your answer. </p>
                        <br></br>
                        <br></br>
                        <p style={{ marginBottom: "0.15cm" }}> Solve for F<sub>AD</sub> </p>
                        <input placeholder={'Enter answer'} name={'input5'} />
                        <button type="button" onClick={handleClickEvent5}>Check Answer</button>
                        <p id="result5"> Input an answer - this line will update depending on your answer. </p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p style={{ marginBottom: "0.15cm" }}> Solve for F<sub>DC</sub> </p>
                        <input placeholder={'Enter answer'} name={'input6'} />
                        <button type="button" onClick={handleClickEvent6}>Check Answer</button>
                        <p id="result6"> Input an answer - this line will update depending on your answer. </p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p style={{ marginBottom: "0.15cm" }}> Solve for F<sub>BC</sub> </p>
                        <input placeholder={'Enter answer'} name={'input7'} />
                        <button type="button" onClick={handleClickEvent7}>Check Answer</button>
                        <p id="result7"> Input an answer - this line will update depending on your answer. </p>
                        <br></br>
                    </form>
                </div>
            </div>
        </div>
    )
}