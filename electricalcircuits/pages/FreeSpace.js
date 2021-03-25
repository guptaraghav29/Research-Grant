import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from './Navigation';
import React from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Line, Text } from 'react-konva';

export default function FreeSpace() {
    const [tool, setTool] = React.useState('pen');
    const [lines, setLines] = React.useState([]);
    const isDrawing = React.useRef(false);

    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, { tool, points: [pos.x, pos.y] }]);
    };

    const handleMouseMove = (e) => {
        // no drawing - skipping
        if (!isDrawing.current) {
            return;
        }
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        let lastLine = lines[lines.length - 1];
        // add point
        lastLine.points = lastLine.points.concat([point.x, point.y]);

        // replace last
        lines.splice(lines.length - 1, 1, lastLine);
        setLines(lines.concat());
    };

    const handleMouseUp = () => {
        isDrawing.current = false;
    };

    // var image = document.getElementById('image');
    // var button = document.getElementById('foo');

    return (
        <div>
            <Head>
                <title>Circuits </title>
            </Head>
            <Navigation></Navigation>
            <h1> Free Space </h1>
          
            <div>
                <Stage
                    width={1420}
                    height={560}
                    onMouseDown={handleMouseDown}
                    onMousemove={handleMouseMove}
                    onMouseup={handleMouseUp}
                    style={{ border: 'solid 3px' }}
                >
                    <Layer>
                        <Text text="Just start drawing" x={50} y={30} fontSize={20} />
                        {lines.map((line, i) => (
                            <Line
                                key={i}
                                points={line.points}
                                stroke="blue"
                                strokeWidth={5}
                                tension={0.5}
                                lineCap="square"
                                globalCompositeOperation={
                                    line.tool === 'eraser' ? 'destination-out' : 'source-over'
                                }
                            />
                        ))}
                    </Layer>
                </Stage>
                <select
                    value={tool}
                    onChange={(e) => {
                        setTool(e.target.value);
                    }}
                >
                    <option value="pen">Pen</option>
                    <option value="eraser">Eraser</option>
                </select>

            </div>
        </div>
    )
}