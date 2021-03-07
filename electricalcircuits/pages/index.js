import Navigation from './Navigation';
import React from 'react';
import Lesson from './Lesson';
import Interactive from './Interactive';
import Quiz from './Quiz';
import { Router, Route, Switch } from "react-router-dom";
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Circuits </title>
      </Head>
      <Navigation>
        <Switch>
          <Route path="/" exact component={() => <Interactive />} />
          <Route path="/Lesson" exact component={() => <Lesson />} />
          <Route path="/Interactive" exact component={() => <Interactive />} />
          <Route path="/Quiz" exact component={() => <Quiz />} />
        </Switch>
      </Navigation>
      <h1 style={{ borderTopWidth: '10em;' }}> Welcome to Electrical Circuits </h1>
      <p></p>
      <img src="https://i.giphy.com/media/l2Je4zlfxF6z0IWZi/200.webp" width="650" height="400"></img>
    </div>
  );
}
