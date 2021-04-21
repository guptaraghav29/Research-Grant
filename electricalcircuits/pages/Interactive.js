import Head from 'next/head'
import Navigation from './Navigation';
import React, { Fragment, Component, useState, useRef } from 'react';
import { Stage, Layer, Line, Rect, Circle, Text, Arrow, Shape, Image, Transformer } from 'react-konva';
import useImage from 'use-image';
import { Html } from 'react-konva-utils';

function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const URLImage = ({ image }) => {
    const [img] = useImage(image.src);
    return (
        <Image
            image={img}
            x={image.x}
            y={image.y}
            // I will use offset to set origin to the center of the image
            offsetX={img ? img.width / 2 : 0}
            offsetY={img ? img.height / 2 : 0}
        />
    );
};


export default function Interactive() {

    //react data
    const dragUrl = React.useRef();
    const stageRef = React.useRef();
    const [images, setImages] = React.useState([]);
    const nameForm = useRef(null);


    //saving image
    const handleExport = () => {
        const uri = stageRef.current.toDataURL();
        downloadURI(uri, 'stage.png');
        console.log(uri);
    }

    //getting random number
    const getRandomNumber = () => {
        return Math.floor(Math.random() * (40 - 1 + 1)) + 1;
    };

    //form handling
    const handleClickEvent = () => {
        const form = nameForm.current;
        var answer = Number(form['R1'].value) + Number(form['R2'].value);
        console.log("value" + form['input'].value);
        if (form['input'].value == answer) {
            document.getElementById("result").innerHTML = "Correct answer!"
        }
        else {
            document.getElementById("result").innerHTML = "Incorrect answer! Please try again."
        }
    }

    return (
        <div>
            <Head>
                <title> Circuits </title>
            </Head>
            <Navigation></Navigation>
            <h1> Simple Circuit Interactive </h1>
            <p>Calculate the current in the following circuit given the resistances: </p>

            <Fragment>
                <form ref={nameForm}>
                    <input label={"Resistor"} readOnly placeholder={'R1'} name={'R1'} value={getRandomNumber()} />
                    <input readOnly placeholder={'R2'} name={'R2'} value={getRandomNumber()} />
                    <input placeholder={'Input Answer'} name={'input'} />
                    <br></br>
                    <button type="button" onClick={handleClickEvent}>Check Answer</button>
                    <button type="button" onClick={handleExport}>Save Image</button>
                    <p id="result"> Input an answer - this line will update depending on your answer. </p>
                </form>
                <p>Drag a piece a battery, bulb, or resistor onto to the stage to create a circuit. </p>

                <table class="center">
                    <tr style={{ backgroundColor: "#FF033E" }}>
                        <th >
                            <img
                                class="resistor"
                                alt="resistor"
                                src="images/resistor.png"
                                // width="300px"
                                draggable="true"
                                onDragStart={(e) => {
                                    dragUrl.current = e.target.src;
                                }}
                            />
                        </th>
                        <th style={{ backgroundColor: "#fdff00" }}>
                            <img

                                alt="bulb"
                                class="bulb"
                                src="images/bulb.png"
                                // width="200px"
                                draggable="true"
                                onDragStart={(e) => {
                                    dragUrl.current = e.target.src;
                                }}
                            />
                        </th>
                        <th style={{ backgroundColor: "#4FFFB0" }}>
                            <img
                                alt="battery"
                                class="battery"
                                src="images/battery.png"
                                // width="200px"
                                draggable="true"
                                onDragStart={(e) => {
                                    dragUrl.current = e.target.src;
                                }}
                            />
                        </th>
                    </tr>
                </table>

                <div
                    onDrop={(e) => {
                        e.preventDefault();
                        // register event position
                        stageRef.current.setPointersPositions(e);
                        // add image
                        setImages(
                            images.concat([
                                {
                                    ...stageRef.current.getPointerPosition(),
                                    src: dragUrl.current,
                                },
                            ])
                        );
                    }}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <Stage width={global.innerWidth} height={global.innerHeight / 1.5} style={{ textAlign: 'center' }} ref={stageRef}>
                        <Layer>
                            {/* voltage */}
                            {images.map((image) => {
                                return <URLImage draggable image={image} />;
                            })}
                            <Rect
                                x={200}
                                y={50}
                                width={1050}
                                height={400}
                                stroke="black"
                                shadowBlur={1}
                            />
                        </Layer>
                    </Stage>
                </div>
            </Fragment>
        </div>
    )
}