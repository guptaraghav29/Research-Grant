import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from './Navigation';
import React, { Component } from 'react';
import { Stage, Layer, Line, Rect, Circle, Text } from 'react-konva';
import Konva from 'konva';

var oneCar_ ;

// const graph = dynamic(() => import('./desmos'))
export default function Interactive() {
    return (
        <div>
            <Head>
                <title>Circuits </title>
            </Head>
            <Navigation></Navigation>
            <h1> Interactive </h1>
            <iframe src="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html" width="800" height="600" scrolling="no" allowfullscreen></iframe>
            <Stage width={global.innerWidth} height={global.innerHeight} style={{ textAlign: 'center'}}>
                <Layer>
                    {/* cd <Text text="Some text on canvas" fontSize={20} /> */}
                    <Rect
                        x={global.innerWidth / 3}
                        y={200}
                        width={100}
                        height={100}
                        draggable
                        fill="red"
                        shadowBlur={10}
                    />
                    <Circle
                        x={global.innerWidth / 2}
                        y={250} radius={50}
                        fill="green"
                        draggable
                    />
                    <Line
                        x={global.innerWidth / 1.75}
                        y={200}
                        points={[0, 0, 100, 0, 100, 100]}
                        tension={0.5}
                        closed
                        draggable
                        stroke="black"
                        fillLinearGradientStartPoint={{ x: -50, y: -50 }}
                        fillLinearGradientEndPoint={{ x: 50, y: 50 }}
                        fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
                    />
                    <Line
                        x={global.innerWidth / 7}
                        y={50}
                        points={[100, 0, 100, 400]}
                        stroke="black"
                    />
                    <Line
                        x={global.innerWidth / 1.4}
                        y={50}
                        points={[100, 0, 100, 400]}
                        stroke="black"
                    />
                    <Line
                        x={global.innerWidth / 1.4}
                        y={50}
                        points={[100, 0, -723, 0]}
                        stroke="black"
                    />
                     <Line
                        x={global.innerWidth / 1.4}
                        y={50}
                        points={[100, 400, -723, 400]}
                        stroke="black"
                    />
                </Layer>
            </Stage>
            {/* https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc */}
            
        </div>
    )
}