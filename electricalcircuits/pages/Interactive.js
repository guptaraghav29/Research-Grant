import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from './Navigation';


// const graph = dynamic(() => import('./desmos'))
export default function Interactive() {
    return (
        <div>
            <Head>
                <title>Circuits </title>
            </Head>
            <Navigation></Navigation>
            <h1> Interactive </h1>

        </div>
    )
}