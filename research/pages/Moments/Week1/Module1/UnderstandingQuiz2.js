import Head from 'next/head'
import React, { useRef } from 'react';

export default function UnderstandingQuiz2() {
    const nameForm = useRef(null);

    const handleClickEvent1 = () => {
        const form = nameForm.current;
        var answer = 634;
        console.log("value" + form['input1'].value);
        if (form['input1'].value == answer)
            document.getElementById("result1").innerHTML = "Correct answer!";
        else
            document.getElementById("result1").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent2 = () => {
        const form = nameForm.current;
        var answer1 = 1.27;
        var answer2 = 634;
        console.log("value" + form['input2'].value);
        if (form['Q2I1'].value == answer1 && form['Q2I2'].value == answer2)
            document.getElementById("result2").innerHTML = "Correct answer!";
        else
            document.getElementById("result2").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent3 = () => {
        const form = nameForm.current;
        var answer1 = 1.464;
        var answer2 = 634;
        console.log("value" + form['input3'].value);
        if (form['Q3I1'].value == answer1 && form['Q3I2'].value == answer2)
            document.getElementById("result3").innerHTML = "Correct answer!";
        else
            document.getElementById("result3").innerHTML = "Incorrect answer! Please try again."
    }

    const handleClickEvent4 = () => {
        const form = nameForm.current;
        var answer1 = 2.54;
        var answer2 = 634;
        console.log("value " + form['input4'].value);
        if (form['Q4I1'].value == answer1 && form['Q4I2'].value == answer2)
            document.getElementById("result4").innerHTML = "Correct answer!";
        else
            document.getElementById("result4").innerHTML = "Incorrect answer! Please try again."

    }

    const handleClickEvent5 = () => {
        const form = nameForm.current;
        var answer = '1';
        console.log("value " + form['input5'].value);
        if (form['input5'].value == answer)
            document.getElementById("result5").innerHTML = "Correct answer!";
        else
            document.getElementById("result5").innerHTML = "Incorrect answer! Please try again."

    }

    const handleClickEvent6 = () => {
        const form = nameForm.current;
        var answer = '2';
        console.log("value" + form['input6'].value);
        if (form['input6'].value == answer)
            document.getElementById("result6").innerHTML = "Correct answer!";
        else
            document.getElementById("result6").innerHTML = "Incorrect answer! Please try again."

    }

    return (
        <div style={{ paddingLeft: "2cm", paddingRight: "2cm", textAlign: "left" }}>
            <Head>
                <title> Understanding Quiz 2 </title>
            </Head>
            <h1 style={{ paddingBottom: "1cm" }}> Check Your Understanding Part 2 </h1>
            <form ref={nameForm}>
                <p> Use the following image for these problems: </p>
                <img class="center" src="../../../images/quiz1_2.png" width="60%"></img>
                <p>1. Determine the moment of the force F about point O by taking moments of the x- and y-components of F. Express your answer in N-m and use counterclockwise positive convention. </p>

                <input placeholder={'Enter answer'} name={'input1'} />
                <button type="button" onClick={handleClickEvent1}>Check Answer</button>
                <p id="result1"> Input an answer - this line will update depending on your answer. </p>

                <p>2. The perpendicular distance of the line of action of the force F to the point O is <input placeholder={'Enter answer'} name={'input2'} id={'Q2I1'} /> m. Using this perpendicular distance to determine the moment of force F about point O gives <input placeholder={'Enter answer'} name={'input2'} id={'Q2I2'} /> N-m.</p>

                <button type="button" onClick={handleClickEvent2}>Check Answer</button>
                <p id="result2"> Input an answer - this line will update depending on your answer. </p>
                
                <p>3. Use the principle of transmissibility to slide the force to a point, say C, vertically below point O. The distance OC is <input placeholder={'Enter answer'} name={'input3'} id={'Q3I1'}/> m. The moment of the force F about point O gives <input placeholder={'Enter answer'} name={'input3'} id={'Q3I2'}/>  N-m.</p>

                <button type="button" onClick={handleClickEvent3}>Check Answer</button>
                <p id="result3"> Input an answer - this line will update depending on your answer. </p>

                <p>4. Use the principle of transmissibility to slide the force to a point, say D, horizontally to the right of point O. The distance OD is  <input placeholder={'Enter answer'} name={'input4'} id={'Q4I1'} />m. The moment of the force F about point O gives  <input placeholder={'Enter answer'} name={'input4'} id={'Q4I2'}/> N-m.</p>

              
                <button type="button" onClick={handleClickEvent4}>Check Answer</button>
                <p id="result4"> Input an answer - this line will update depending on your answer. </p>

                <p>5. Multiple choice: Let’s use the vector method to determine the moment of point F about point O. In the formula M = r x F, r is: </p>

                <select name={'input5'} size={'4'}>
                    <option value="1">6i + 2j </option>
                    <option value="2">2i + 6j</option>
                    <option value="3">-6j + 2j</option>
                    <option value="4">6i - 2j</option>
                </select>
                <br></br>
                <button type="button" onClick={handleClickEvent5}>Check Answer</button>
                <p id="result5"> Input an answer - this line will update depending on your answer. </p>

                <p>6. Multiple choice: Let’s use the vector method to determine the moment of point F about point O. The vector expression for M  is: </p>

                <select name={'input6'} size={'5'}>
                    <option value="1">-634k</option>
                    <option value="2">634k</option>
                    <option value="3">-634i</option>
                    <option value="4">634i</option>
                    <option value="5">634j</option>
                </select>
                <button type="button" onClick={handleClickEvent6}>Check Answer</button>
                <p id="result6"> Input an answer - this line will update depending on your answer. </p>

            </form>
        </div>

    )
}