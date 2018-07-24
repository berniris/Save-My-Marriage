import React from 'react';
import '../App.css';


function Doctor(props) { 

  return (

  <div>
  <table>
  <p>{props.firstName} {props.lastName} {props.title}</p>
  <img src={props.img} alt="doctor"></img>
  </table>
</div>

    );
  }


export default Doctor;

