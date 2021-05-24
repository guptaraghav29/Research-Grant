import Head from 'next/head'
import Navigation from './Navigation';
import React, { useRef } from 'react';

export default function Statics() {
    const nameForm = useRef(null);

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
            <Head>
                <title>Statics: Method of Joints </title>
            </Head>
            <Navigation></Navigation>
            <h1> Statics: Method of Joints </h1>
            <div style={{ textAlign: "left;", paddingLeft: "3cm", paddingRight: "3cm" }}>
                <h4 style={{ color: "#003DA5;", fontWeight: "bold" }}> Problem </h4>
                <h5> For this problem, you are given equations to solve missing pieces of the problem. Please evaluate for the variables marked with a '?'. </h5>
                <br></br>
                <img class="center" src="images/Statics3.jpeg" alt="Statics" width="50%"></img>
                <p></p>
                <img class="center" src="images/Statics2.jpeg" alt="Statics" width="50%"></img>
                <p></p>
                <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> EQUATIONS </p>
                <p style={{ color: "crimson;", fontWeight: "bold" }}> W<sub>1</sub> = 20 kN, W<sub>2</sub> = 12 kN </p>
                <p style={{ color: "crimson;", fontWeight: "bold" }}> ∠AB = 36.87°, ∠BD = 53.13° </p>
                <p> <u>  The equations are provided below: </u> </p>
                <p> ∑Ma = 0 </p>
                <p> (W<sub>1</sub>)(AB) - (W<sub>2</sub>)(BD) + (Cy)(AC) = 0 </p>
                <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> Cy = ? </p>
                <p> ∑Fy = 0 </p>
                <p> Ay = Cy + W<sub>1</sub> </p>
                <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> Ay = ? </p>
                <p> ∑Fx = 0 </p>
                <p> -Ax + W<sub>2</sub> = 0 </p>
                <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> Ax = ? </p>
                <p> <u>  Analysis of Joint A </u> </p>
                <p> +↑∑Fy = 0 </p>
                <p> F<sub>AB</sub>sin(∠AB) + Ay = 0 </p>
                <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> F<sub>AB</sub> = ? </p>
                <p> +→  ∑Fx = 0 </p>
                <p> -Ax + F<sub>AD</sub> +  F<sub>AB</sub>cos(∠AB) = 0 </p>
                <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> F<sub>AD</sub> = ? </p>
                <p> <u>  Analysis of Joint B </u> </p>
                <p> +↑∑Fy = 0 </p>
                <p> F<sub>DB</sub> = 0 </p>
                <p> -F<sub>DA</sub> + -F<sub>DC</sub> = 0 </p>
                <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> F<sub>DC</sub> = ? </p>
                <p> <u>  Analysis of Joint D </u> </p>
                <p> +→  ∑Fx = 0 </p>
                <p> -F<sub>BA</sub>sin(∠BD) + F<sub>BC</sub>sin(∠BD) + Ax = 0 </p>
                <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> F<sub>BC</sub> = ? </p>

                <br></br>
                <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;", marginBottom: "0cm" }}> QUESTIONS </p>
                <form ref={nameForm}>
                    <p style={{ marginBottom: "0cm" }}> Solve for the following. Units are in kN. </p>
                    <br></br>
                    <p style={{ marginBottom: "0cm" }}> Solve for Cy </p>
                    <input placeholder={'Enter answer'} name={'input1'} />
                    <button type="button" onClick={handleClickEvent1}>Check Answer</button>
                    <p id="result1"> Input an answer - this line will update depending on your answer. </p>

                    <p style={{ marginBottom: "0cm" }}> Solve for Ay </p>
                    <input placeholder={'Enter answer'} name={'input2'} />
                    <button type="button" onClick={handleClickEvent2}>Check Answer</button>
                    <p id="result2"> Input an answer - this line will update depending on your answer. </p>

                    <p style={{ marginBottom: "0cm" }}> Solve for Ax </p>
                    <input placeholder={'Enter answer'} name={'input3'} />
                    <button type="button" onClick={handleClickEvent3}>Check Answer</button>
                    <p id="result3"> Input an answer - this line will update depending on your answer. </p>

                    <p style={{ marginBottom: "0.15cm" }}> Solve for -F<sub>AB</sub> </p>
                    <input placeholder={'Enter answer'} name={'input4'} />
                    <button type="button" onClick={handleClickEvent4}>Check Answer</button>
                    <p id="result4"> Input an answer - this line will update depending on your answer. </p>

                    <p style={{ marginBottom: "0.15cm" }}> Solve for -F<sub>AD</sub> </p>
                    <input placeholder={'Enter answer'} name={'input5'} />
                    <button type="button" onClick={handleClickEvent5}>Check Answer</button>
                    <p id="result5"> Input an answer - this line will update depending on your answer. </p>

                    <p style={{ marginBottom: "0.15cm" }}> Solve for -F<sub>DC</sub> </p>
                    <input placeholder={'Enter answer'} name={'input6'} />
                    <button type="button" onClick={handleClickEvent6}>Check Answer</button>
                    <p id="result6"> Input an answer - this line will update depending on your answer. </p>

                    <p style={{ marginBottom: "0.15cm" }}> Solve for -F<sub>BC</sub> </p>
                    <input placeholder={'Enter answer'} name={'input7'} />
                    <button type="button" onClick={handleClickEvent7}>Check Answer</button>
                    <p id="result7"> Input an answer - this line will update depending on your answer. </p>

                    <br></br>
                </form>
            </div>

        </div>
    )
}