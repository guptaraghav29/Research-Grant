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

    return (
        <div style={{ paddingLeft: "2cm", paddingRight: "2cm", textAlign: "left" }}>
            <Head>
                <title> Understanding Quiz 1 </title>
            </Head>
            <h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding Part 1 </h1>
            <form ref={nameForm}>
                <p>1. The force F and the couple M shown in the figure are to replaced by a force located at a distance d. What is d? </p>
                <img class="center" src="../../../images/quiz1_1_4.png" width="40%"></img>
                <br></br>
                <input name={'input1'}></input>
                <br></br>
                <button type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>
            </form>
        </div>
    )

}