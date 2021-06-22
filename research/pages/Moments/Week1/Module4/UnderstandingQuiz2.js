import Head from 'next/head'
import React, { useRef } from 'react';

export default function UnderstandingQuiz2() {
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
        if (form['input3'].value == answer)
            document.getElementById("result3").innerHTML = "Correct answer!";
        else
            document.getElementById("result3").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent4 = () => {
        const form = nameForm.current;
        var answer = '3';
        console.log("value " + form['input4'].value);
        if (form['input4'].value == answer)
            document.getElementById("result4").innerHTML = "Correct answer!";
        else
            document.getElementById("result4").innerHTML = "Incorrect answer! Please try again."

    }

    return (
        <div style={{ paddingLeft: "2cm", paddingRight: "2cm", textAlign: "left" }}>
            <Head>
                <title> Understanding Quiz 2 </title>
            </Head>
            <h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding Part 2 </h1>
            <form ref={nameForm}>
                <p> Please use the following image for the next couple of questions: </p>
                <img class="center" src="../../../images/quiz1_1_10.png" width="65%"></img>
                <br></br>
                <br></br>
                <p>7. In the figure below, the equivalent force-couple at point O is: </p>

                <select name={'input1'} size={'4'}>
                    <option value="1">-125√(3)i + 125j N, 496 N - m ccw</option>
                    <option value="2">-125√(3)i + 125j N, 496 N - m cw</option>
                    <option value="3">-125√(3)i + 125j N, 496 N - m ccw</option>
                    <option value="4">-125√(3)i + 125j N, 370 N - m cw</option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>
                <img class="center" src="../../../images/quiz1_1_8.png" width="50%"></img>

                <p>8. In the figure below, what is the equivalent force at point O?</p>

                <select name={'input2'} size={'4'}>
                    <option value="1">-200 lb</option>
                    <option value="2">200 lb </option>
                    <option value="3">700 lb</option>
                    <option value="4">-500 lb</option>
                </select>
                <br></br>

                <button type="button" onClick={handleClickEvent2}>Check Answer</button>
                <p id="result2"> Input an answer - this line will update depending on your answer. </p>
                <img class="center" src="../../../images/quiz1_1_9.png" width="50%"></img>
                <p>9. (Same figure as for #2) In the figure below, what is the moment about point O?</p>

                <select name={'input3'} size={'4'}>
                    <option value="1">-800 lb-ft </option>
                    <option value="2">800 lb-ft</option>
                    <option value="3">-1050 lb-ft</option>
                    <option value="4">1050 lb-ft</option>
                </select>
                <br></br>

                <button type="button" onClick={handleClickEvent3}>Check Answer</button>
                <p id="result3"> Input an answer - this line will update depending on your answer. </p>

                <p>10. (Same figure as for #2) In the figure below, through what point on OA does the equivalent force at point O?</p>

                <select name={'input4'} size={'4'}>
                    <option value="1">-5.25 ft </option>
                    <option value="2">4 ft</option>
                    <option value="3">5.25 ft</option>
                    <option value="4">-4 ft</option>
                </select>
                <br></br>

                <button type="button" onClick={handleClickEvent4}>Check Answer</button>
                <p id="result4"> Input an answer - this line will update depending on your answer. </p>
            </form>
        </div>
    )
}