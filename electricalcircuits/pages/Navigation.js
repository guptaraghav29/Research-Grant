import React from "react";
import Link from 'next/link'
// import { withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand navbar-light bg-white">
                <div class="container">
                    <div id="leftBar">
                        <Link href="/">
                            <a> <b> Online Interactives </b> </a>
                        </Link>
                    </div>
                    <div>
                        <ul class="navbar-nav ml-auto">
                            <li>
                                <Link href="/Lesson">
                                    <a> Lesson </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Interactive">
                                    <a> Circuits </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Statics">
                                    <a> Method of Joints </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Statics2">
                                    <a> Method of Sections </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/FreeSpace">
                                    <a> Free Space </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Quiz">
                                    <a> Quiz </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default (Navigation);