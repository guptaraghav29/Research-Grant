import Head from 'next/head'
import React, { useRef } from 'react';

export default function UnderstandingQuiz1() {
    const nameForm = useRef(null);

    const handleClickEvent1 = () => {
        const form = nameForm.current;
        var answer = '1';
        console.log("value" + form['input1'].value);
        if (form['input1'].value == answer)
            document.getElementById("result1").innerHTML = "Correct answer!";
        else
            document.getElementById("result1").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent2 = () => {
        const form = nameForm.current;
        var answer = 'false';
        console.log("value" + form['input2'].value);
        if (form['input2'].value == answer)
            document.getElementById("result2").innerHTML = "Correct answer!";
        else
            document.getElementById("result2").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent3 = () => {
        const form = nameForm.current;
        var answer = '0';
        console.log("value" + form['input3'].value);
        if (form['input3'].value === answer)
            document.getElementById("result3").innerHTML = "Correct answer!";
        else
            document.getElementById("result3").innerHTML = "Incorrect answer! Please try again."

    }

    const handleClickEvent4 = () => {
        const form = nameForm.current;
        var answer = '-1000';
        console.log("value" + form['input4'].value);
        if (form['input4'].value == answer)
            document.getElementById("result4").innerHTML = "Correct answer!";
        else
            document.getElementById("result4").innerHTML = "Incorrect answer! Please try again."

    }

    const handleClickEvent5 = () => {
        const form = nameForm.current;
        var answer = '1800';
        console.log("value" + form['input5'].value);
        if (form['input5'].value == answer)
            document.getElementById("result5").innerHTML = "Correct answer!";
        else
            document.getElementById("result5").innerHTML = "Incorrect answer! Please try again."
    }

    return (
        <div style={{ paddingLeft: "2cm", paddingRight: "2cm", textAlign: "left" }}>
            <Head>
                <title> Understanding Quiz 1 </title>
            </Head>
            <h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding Part 1 </h1>
            <form ref={nameForm}>
                <p>1. In the figure below, what’s the magnitude of the moment of the force F = 10 N about point A? The length l of the rod is 0.1m. Specify your answer in N-m. </p>
                
                <input placeholder={'Enter answer'} name={'input1'} />
                <button type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>
                <img class="center" src="../../../images/quiz1_1_1.png" width="40%"></img>
                <p>2. True or false: The moment of the force about point A is counter-clockwise. </p>
                
                <select name={'input2'} size={'2'}>
                    <option value="true">True </option>
                    <option value="false">False</option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent2}>Check Answer</button>
                <p id="result2"> Input an answer - this line will update depending on your answer.</p>
                
                <p>3. In the figure below, what’s the moment of the force F about point A? Specify your answer in N-m </p>
                <img class="center" src="../../../images/quiz1_1_2.png" width="30%" ></img>
                <input placeholder={'Enter answer'} name={'input3'} />
                <button type="button" onClick={handleClickEvent3}>Check Answer</button>
                <p id="result3"> Input an answer - this line will update depending on your answer. </p>
                
                <p>4. In the figure shown below, what’s the moment of force F<sub>1</sub> about point O? F<sub>1</sub> = 500N, F<sub>2</sub> = 300N. d<sub>1</sub> = 2m, d<sub>2</sub> = 6m. Specify your answer in N-m and use the sign convention that counterclockwise moments are positive.</p>

                <input placeholder={'Enter answer'} name={'input4'} />
                <button type="button" onClick={handleClickEvent4}>Check Answer</button>
                <p id="result4"> Input an answer - this line will update depending on your answer. </p>
                <img class="center" src="../../../images/quiz1_1_3.png" width="60%"></img>
                <p>5. In the figure shown above, what’s the moment of force F<sub>2</sub> about point O? F<sub>1</sub> = 500N, F<sub>2</sub> = 300N. d<sub>1</sub> = 2m, d<sub>2</sub> = 6m. Specify your answer in N-m and use the sign convention that counterclockwise moments are positive. </p>

                <input placeholder={'Enter answer'} name={'input5'} />
                <button type="button" onClick={handleClickEvent5}>Check Answer</button>
                <p id="result5"> Input an answer - this line will update depending on your answer. </p>
            </form>
        </div>
    )

}