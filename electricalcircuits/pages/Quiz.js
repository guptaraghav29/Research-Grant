import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from './Navigation';

export default function Quiz() {

    return (
        <div>
            <Head>
                <title>Circuits </title>
            </Head>
            <Navigation></Navigation>
            <h1> Quiz </h1>
        </div>
    )
}