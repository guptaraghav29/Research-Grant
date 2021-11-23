import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Plot from 'react-plotly.js';

const buttonStyles = {
   display: flex;
   flexDirection: column;
   justifyContent: center;
   alignItems': center;
   padding: 0px;

   background: #2196F3;
   borderRadius: 8px;
};

const interface = {

};

const textField = {
   /* Auto Layout */
   display: flex;
   flexDirection: column;
   alignItems: flex-start;
   padding: 0px;

   flex: none;
   order: 1;
   flexGrow: 0;
   margin: 24px 0px;
};

export default function Interface() {
   // FIXME: Must dynamically display select output options
   // FIXME: Must dynamically get data to plot
   return (
      <div style={interface}>
         <form onSubmit={handleSubmit}>
         <select style={textField} id="module">

         </select>
         <select style={textField} id="question">

         </select>
         <button type="Submit" style={buttonStyles}>Analyze</button>
         </form>
         <Plot data={[]} layout={}/>
      </div>
   );
}