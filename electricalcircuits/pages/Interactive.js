import Head from 'next/head'
import Navigation from './Navigation';
// import React, { Fragment, Component, useState, useRef } from 'react';
// import { Stage, Layer, Line, Rect, Circle, Text, Arrow, Shape, Image, Transformer } from 'react-konva';
// import useImage from 'use-image';

// function downloadURI(uri, name) {
//     var link = document.createElement('a');
//     link.download = name;
//     link.href = uri;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }

// const URLImage = ({ image }) => {
//     const [img] = useImage(image.src);
//     return (
//         <Image
//             image={img}
//             x={image.x}
//             y={image.y}
//             // I will use offset to set origin to the center of the image
//             offsetX={img ? img.width / 2 : 0}
//             offsetY={img ? img.height / 2 : 0}
//         />
//     );
// };


export default function Interactive() {

    //     //react data
    //     const dragUrl = React.useRef();
    //     const stageRef = React.useRef();
    //     const [images, setImages] = React.useState([]);
    //     const nameForm = useRef(null);


    //     //saving image
    //     const handleExport = () => {
    //         const uri = stageRef.current.toDataURL();
    //         downloadURI(uri, 'stage.png');
    //         console.log(uri);
    //     }

    //     //getting random number
    //     const getRandomNumber = () => {
    //         return Math.floor(Math.random() * (40 - 1 + 1)) + 1;
    //     };

    //     //form handling
    //     const handleClickEvent = () => {
    //         const form = nameForm.current;
    //         var answer = Number(form['R1'].value) + Number(form['R2'].value);
    //         console.log("value" + form['input'].value);
    //         if (form['input'].value == answer) {
    //             document.getElementById("result").innerHTML = "Correct answer!"
    //         }
    //         else {
    //             document.getElementById("result").innerHTML = "Incorrect answer! Please try again."
    //         }
    //     }

    return (
        <div>
            <Head>
                <title> Circuits </title>
            </Head>
            <Navigation></Navigation>
            <h1> Simple Circuit Interactive </h1>
        </div>
    )
}