import Head from 'next/head'
import Navigation from './Navigation';
import { render } from 'react-dom';
import React, { useRef, Fragment } from 'react';
import { Stage, Layer, Line, Text } from 'react-konva';

// function downloadURI(uri, name) {
//     var link = document.createElement('a');
//     link.download = name;
//     link.href = uri;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }

export default function FreeSpace() {

    // const refStage = useRef(null);

    // const handleExport = () => {
    //     downloadURI(refStage.toDataURL, 'drawing.png');
    //     console.log(uri);
    // }

    const [tool, setTool] = React.useState('pen');
    const [lines, setLines] = React.useState([]);
    const isDrawing = useRef(false);

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


    return (
        <div>
            <Head>
                <title>Circuits </title>
            </Head>
            <Navigation></Navigation>
            <h1> Free Space </h1>
            <p></p>
            <Fragment>
                {/* <button onClick={handleExport()}>Save Image</button> */}

                <div>
                    <Stage
                        width={1420}
                        height={560}
                        onMouseDown={handleMouseDown}
                        onMousemove={handleMouseMove}
                        onMouseup={handleMouseUp}
                        style={{ border: 'solid 3px' }}
                        // ref={refStage}
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
            </Fragment>
        </div>

    )
}