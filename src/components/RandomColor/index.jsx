import React, { useEffect, useState } from "react";
import "./index.css";

export const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");



  function randomGenerator(arr) {
    return Math.floor(Math.random() * arr);
  }
  
  function handleHex() {
    const hex = ["0","1","2","3","4", "5","6","7","8","9","A","B","C","D","E","F"];
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
      hexColor += hex[randomGenerator(hex.length)];
    }

    setColor(hexColor);
   
  }

  function handleRGB() {
    let r = randomGenerator(256);
    let g = randomGenerator(256);
    let b = randomGenerator(256);

    setColor(`rgb (${r},${g},${b})`);
    console.log(color);
  }

  useEffect(()=>{
    if(typeOfColor === 'rgb') handleRGB()
    else handleHex()
  },[typeOfColor])

  return (
    <div style={{ background: color, width: "100vw", height: "100vh" }}>
      
      
      <button onClick={()=>setTypeOfColor('hex')}>create hex color</button>
      <button onClick={()=>setTypeOfColor('rgb')}>create rgb color</button>
      <button onClick={typeOfColor === 'hex' ? handleHex:handleRGB}>Generate Random Color</button>
      <div style={{
        display:'flex',
        justifyContent: "center",
        alignItems: "center",
        color: '#fff',
        fontsize:'60px',
        marginTop: '50px'
    }}> 
    <h3>{typeOfColor === 'rgb' ? 'rgb color' : 'hex color'}</h3>
    <h1>{color}</h1></div>
    </div>
  );
};

export default RandomColor;
