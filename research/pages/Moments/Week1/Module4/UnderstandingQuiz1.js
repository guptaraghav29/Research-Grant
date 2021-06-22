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
        var answer = '2';
        console.log("value" + form['input2'].value);
        if (form['input2'].value == answer)
            document.getElementById("result2").innerHTML = "Correct answer!";
        else
            document.getElementById("result2").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent3 = () => {
        const form = nameForm.current;
        var answer = '4';
        console.log("value" + form['input3'].value);
        if (form['input3'].value === answer)
            document.getElementById("result3").innerHTML = "Correct answer!";
        else
            document.getElementById("result3").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent4 = () => {
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
            <Head>
                <title> Understanding Quiz 1 </title>
            </Head>
            <h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding Part 1 </h1>
            <form ref={nameForm}>
                <p> Please use the following image for the next couple of questions: </p>
                <img class="center" src="../../../images/quiz1_1_10.png" width="65%"></img>
                <br></br>
                <br></br>
                <p>1. The vector expression for the force in the figure below is: </p>
                <img class="center" src="../../../images/quiz1_1_4.png" width="40%"></img>
                <select name={'input1'} size={'4'}>
                    <option value="1">-10i + 10√(3j) lb </option>
                    <option value="2">-10i - 10√(3j) lb </option>
                    <option value="3">-20i + 20√(3j) lb </option>
                    <option value="4">-10√(3i) + 10j lb </option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>

                <p>2. The unit vector along the force in the figure below is: </p>

                <select name={'input2'} size={'4'}>
                    <option value="1">-0.8i + 0.6j </option>
                    <option value="2">-0.6i + 0.8j  </option>
                    <option value="3">0.6i - 0.8j </option>
                    <option value="4">0.8i - 0.6j</option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent2}>Check Answer</button>
                <p id="result2"> Input an answer - this line will update depending on your answer.</p>

                <img class="center" src="../../../images/quiz1_1_5.png" width="65%"></img>

                <p>3. The vector expression for the force in the figure above is: </p>

                <select name={'input3'} size={'4'}>
                    <option value="1">-1800i + 2400j N</option>
                    <option value="2">360i - 480j N</option>
                    <option value="3">-2400i + 1800j N </option>
                    <option value="4">-360i + 480j N</option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent3}>Check Answer</button>
                <p id="result3"> Input an answer - this line will update depending on your answer. </p>

                <p>4. The vector expression for the force in the figure above is: </p>

                <select name={'input4'} size={'4'}>
                    <option value="1">-1800i + 2400j N</option>
                    <option value="2">360i - 480j N</option>
                    <option value="3">-2400i + 1800j N </option>
                    <option value="4">-360i + 480j N</option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent3}>Check Answer</button>
                <p id="result3"> Input an answer - this line will update depending on your answer. </p>

            </form>
        </div>
    )

}