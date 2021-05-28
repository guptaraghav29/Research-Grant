import Navigation from './Navigation';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import next from 'next';

export default function Lesson() {

    return (
        <div style={{ textAlign: 'left' }}>
            <Head>
                <title>Circuits </title>
            </Head>
            <Navigation></Navigation>
            <div style={{ paddingLeft: '2cm' }}>
                <h1> Electrical Circuits - The Basics </h1>
                <br></br>
                <h2> Periodic Table </h2>
                <br></br>
                <img src="images/PT.png" alt="Periodic Table" width="650" height="400"></img>
                <br></br>
                <h2> Atoms </h2>
                <br></br>
                <img src="images/atom.png" alt="Periodic Table" width="650" height="400"></img>
                <br></br>
                <img src="images/atom2.png" alt="Periodic Table" width="650" height="400"></img>
                <br></br>
                <h2> What is electric current? </h2>
                <br></br>
                <p> Electric current is the rate of flow of electrons in a conductor. The SI unit of electric current is the Ampere. </p>
                <br></br>
                <h2> List of most conductive elements: </h2>
                <br></br>
                <ol>
                    <li> Silver </li>
                    <li> Copper </li>
                    <li> Gold </li>
                    <li> Aluminum </li>
                    <li> Berryllium </li>
                    <li> Calcium </li>
                    <li> Mangnesium </li>
                    <li> Rhodium  </li>
                    <li> Sodium </li>
                    <li> Iridium </li>
                </ol>
                <br></br>
                <h2> How do electrons flow? </h2>
                <br></br>
                <img src="images/ElectronFlow.png" alt="Periodic Table" width="750" height="400"></img>
                <br></br>
                <h2> Units for Current (I) </h2>
                <br></br>
                <ul>
                    <li> Current is represented as (I) when written in an equation. </li>
                    <li> Its units are Amperes, amps, or A. </li>
                    <li> Amps tells us how many Coulumbs of charges are moving through the conductor (wires).</li>
                </ul>
                <br></br>
                <h2> Units for Voltage (V) </h2>
                <br></br>
                <ul>
                    <li> Voltage is "the push" that causes the current to flow. </li>
                    <li> Voltage is measured in Volts or V. </li>
                    <li> Voltage comes from a battery or sources generated out of a wall. </li>
                </ul>
                <br></br>
                <h2> Units for Resistance (R) </h2>
                <br></br>
                <ul>
                    <li> The resistance opposes the current flow in a circuit. </li>
                    <li> Resistance is measured in Ohms and shown as the Greek symbol Omega. </li>
                </ul>
                <br></br>
                <img src="images/ResistorColorCode.png" alt="Resistor Color Code" width="550" height="400"></img>
                <br></br>
                <h2> Ohm's Law </h2>
                <br></br>
                <p> The current (I) flowing through the conductor is directly proportitonal to the potential difference (V) across it's ends provided the physical conditions (temperature, strain, etc.) do not change.</p>
                <br></br>
                <img src="images/OhmsLaw.png" alt="Ohms Law" width="750" height="450"></img>
                <br></br>
                <img src="images/Circuit.png" alt="Ohms Law" width="750" height="450"></img>
                <br></br>
                <br></br>
                <iframe src="https://phet.colorado.edu/sims/html/ohms-law/latest/ohms-law_en.html" width="800" height="600" scrolling="no" allowfullscreen></iframe>
                <br></br>
                <br></br>
                <h2> For further reading, visit: </h2>
                <ul style={{fontSize:"21px"}}>
                    <li> <a href="https://openstax.org/books/college-physics/pages/20-2-ohms-law-resistance-and-simple-circuits"> Openstax Reading on Ohm's Law </a> </li>
                    <li> <a href="https://www.khanacademy.org/science/physics/circuits-topic"> Khan Academy Videos on Circuits </a> </li>
                </ul>
            </div>

        </div>
    )
}