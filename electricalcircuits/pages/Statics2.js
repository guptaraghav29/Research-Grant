import Head from 'next/head'
import Navigation from './Navigation';
import React, { useRef } from 'react';


//Problem 1 for review commented out for now
//

// //form handling
// const handleClickEvent1 = () => {
//     const form = nameForm.current;
//     var answer = -1;
//     console.log("value" + form['input1']);
//     if (form['input1'].value == answer) {
//         document.getElementById("result").innerHTML = "Correct answer!"
//     }
//     else {
//         document.getElementById("result").innerHTML = "Incorrect answer! Please try again."
//     }
// }

// //form handling
// const handleClickEvent2 = () => {
//     const form = nameForm.current;
//     var answer2 = form['mcq'];
//     if (answer2) {
//         document.getElementById("result2").innerHTML = "Correct answer!"
//     }
//     else {
//         document.getElementById("result2").innerHTML = "Incorrect answer! Please try again."
//     }

//     function onlyOne(checkbox) {
//         var checkboxes = document.getElementsByName('mcq')
//         checkboxes.forEach((item) => {
//             if (item !== checkbox) item.checked = false
//         })
//     }
// }
//  <br></br>
//             <div style={{ textAlign: "left;", paddingLeft: "3cm", paddingRight: "3cm" }}>
//                 {/* Problem 1 */}
//                 <h4 style={{ color: "#003DA5;", fontWeight: "bold" }}> Problem 1 </h4>
//                 <h5> Please take a moment to look at the following truss problems below. For Problem 1, you are given a series of steps that attempt to solve the problem. It contains an incorrect step, and so you have to choose the answer for which step is wrong for a given problem. </h5>
//                 <p style={{ color: "crimson;", fontWeight: "bold" }}> *Note: An incorrect step will lead to further incorrect steps. So please pick the step from where you find the problem starts to become incorrect. </p>
//                 <img class="center" src="images/Statics.jpeg" alt="Statics" width="50%"></img>
//                 <p></p>
//                 <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;" }}> STEPS </p>
//                 <ol>
//                     <li>
//                         <p> ∑Fx = 0: Cx - 2 = 0 ={'>'} Cx = 2 kN </p>
//                         <p> ∑Fy = 0: Ay + Cy = 0 </p>
//                         <p> ∑M(A) = 0: Cy(6) + (2)(3) = 0 ={'>'} Cy = -1 kN; Ay = 1 kN </p>
//                     </li>
//                     <li>
//                         <p> ∑Fx = 0:  T(BC) + T(DE) + T(BD)cos45 = 0 </p>
//                         <p> ∑Fy = 0: 1 + T(BD)sin45 = 0 ={'>'} T(BD) = -√(2) kN </p>
//                     </li>
//                     <li>
//                         <p> ∑M(B) = 0 ={'>'} (-1)(3) - [T(DE)](3)] = 0 </p>
//                     </li>
//                     <li>
//                         <p> T(DE) = 5 </p>
//                     </li>
//                 </ol>
//                 <br></br>
//                 <p style={{ color: "brown;", fontWeight: "bold;", fontSize: "20px;", marginBottom: "0cm" }}> QUESTIONS </p>
//                 <form ref={nameForm}>
//                     <p style={{ marginBottom: "0cm" }}> Indicate the step from which the problem goes wrong: </p>
//                     <input type="radio" name={"mcq"} id="1" value="1" /> Step 1
//                     <br></br>
//                     <input type="radio" name={"mcq"} id="2" value="2" /> Step 2
//                     <br></br>
//                     <input type="radio" name={"mcq"} id="3" value="3" /> Step 3
//                     <br></br>
//                     <input type="radio" name={"mcq"} id="4" value={"4"} /> Step 4
//                     <br></br>
//                     <button type="button" onClick={handleClickEvent2}>Check Answer</button>
//                     <p id="result2"> Input an answer - this line will update depending on your answer. </p>
//                     <br></br>
//                     <p style={{ marginBottom: "0cm" }}> What is the correct value of Truss DE in kN?</p>
//                     <input placeholder={'Input Answer'} name={"input1"} />
//                     <button type="button" onClick={handleClickEvent1}>Check Answer</button>
//                     <p id="result"> Input an answer - this line will update depending on your answer. </p>
//                     <br></br>
//                     <br></br>
//                     <div style={{ borderTop: "3px solid black ", marginLeft: 0, marginRight: 0 }}></div>
//                     <br></br>
//                 </form>
//                 {/* 
//                     *
//                     *
//                     * Problem 2
//                     * 
//                     * 
//                 */}


export default function Statics2() {

    return (
        <div>
            <Head>
                <title>Statics: Method of Sections </title>
            </Head>

            <Navigation></Navigation>
            <h1> Statics: Method of Sections </h1>
        </div>
    )
}