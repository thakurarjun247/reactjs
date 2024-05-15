import React from 'react';
import ReactDOM from 'react-dom/client';
//learing resource: google doc https://docs.google.com/document/d/14NAFzsZRL30E3SYTtU_zOiEsWLVWqaic42n20vGSvlI/edit
//These lines import the necessary modules from the 'react' 
//and 'react-dom' libraries. 
//React is imported to use JSX and create React elements,
// while ReactDOM is imported for rendering those elements to the DOM.

// create jsx element it gives a cleaner look and feel (recommended)
const elementSgn = <h1>SGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGNSGN SGN SGN</h1>;

// Modern approach to rendering using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elementSgn);

const readFromVariableOfJavascript=10;
//using jsx
const elementOL=<ol>
  <li>hi</li>
  <li>hello</li>
  <li>{readFromVariableOfJavascript}</li>
  </ol>

root.render(elementOL)



//old approach: element can also be passed with properties:
const oldstyleelement = React.createElement('div', { className: 'container' },
  React.createElement('h1', null, 'Hello, World! old style'),
  React.createElement('p', null, 'This is a paragraph.')
);

root.render(oldstyleelement)
