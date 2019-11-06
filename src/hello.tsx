import React from 'react'

const catImage = require('./images/cat.png');

export default function Hello() {
  return <div>
    <h1>Hello React</h1>
    <img src={catImage}/>
  </div>
};
