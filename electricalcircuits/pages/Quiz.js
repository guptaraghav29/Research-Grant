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
            <div style={{ padding: '1cm'}}>
                <iframe src="https://h5p.org/h5p/embed/1124826" width="1090" height="282" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>
                <script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
                <iframe src="https://h5p.org/h5p/embed/1124828" width="1090" height="286" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>
                <script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
                <iframe src="https://h5p.org/h5p/embed/1124829" width="1090" height="391" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>
                <script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
                <iframe src="https://h5p.org/h5p/embed/1124832" width="1090" height="265" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>
                <script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
            </div>

        </div>
    )
}