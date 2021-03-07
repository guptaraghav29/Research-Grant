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
                <p></p>
                <h2> Periodic Table </h2>
                <p></p>
                <img src="images/PT.png" alt="Periodic Table" width="650" height="400"></img>
                <p></p>
                <h2> Atoms </h2>
                <p></p>
                <img src="images/atom.png" alt="Periodic Table" width="650" height="400"></img>
                <p></p>
                <img src="images/atom2.png" alt="Periodic Table" width="650" height="400"></img>
                <p></p>
                <h2> What is electric current? </h2>
                <p></p>
                <p> Electric current is the rate of flow of electrons in a conductor. The SI unit of electric current is the Ampere. </p>
                <p></p>
                <h2> List of most conductive elements: </h2>
                <p></p>
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
                <p></p>
                <h2> How do electrons flow? </h2>
                <p></p>
                <img src="images/ElectronFlow.png" alt="Periodic Table" width="750" height="400"></img>
                <p></p>
                <h2> Units for Current (I) </h2>
                <p></p>
                <ul>
                    <li> Current is represented as (I) when written in an equation. </li>
                    <li> Its units are Amperes, amps, or A. </li>
                    <li> Amps tells us how many Coulumbs of charges are moving through the conductor (wires).</li>
                </ul>
                <p></p>
                <h2> Units for Voltage (V) </h2>
                <p></p>
                <ul>
                    <li> Voltage is "the push" that causes the current to flow. </li>
                    <li> Voltage is measured in Volts or V. </li>
                    <li> Voltage comes from a battery or sources generated out of a wall. </li>
                </ul>
                <p></p>
                <h2> Units for Resistance (R) </h2>
                <p></p>
                <ul>
                    <li> The resistance opposes the current flow in a circuit. </li>
                    <li> Resistance is measured in Ohms and shown as the Greek symbol Omega. </li>
                </ul>
                <p></p>
                <img src="images/ResistorColorCode.png" alt="Resistor Color Code" width="550" height="400"></img>
                <p></p>
                <h2> Ohm's Law </h2>
                <p></p>
                <p> The current (I) flowing through the conductor is directly proportitonal to the potential difference (V) across it's ends provided the physical conditions (temperature, strain, etc.) do not change.</p>
                <p></p>
                <img src="images/OhmsLaw.png" alt="Ohms Law" width="750" height="450"></img>
                <p></p>
                <img src="images/Circuit.png" alt="Ohms Law" width="750" height="450"></img>
                <p></p>
                <h2> Additional Resources </h2>
                <p></p>
                <ul>
                    <li> <a href="https://eng.libretexts.org/Bookshelves/Civil_Engineering/Book%3A_Structural_Analysis_(Udoeyo)/01%3A_Chapters">LibreTexts </a> </li>
                    <li> <a href="https://www.khanacademy.org/science/physics/circuits-topic"> Khan Academy </a> </li>
                </ul>
            </div>

        </div>
    )
}