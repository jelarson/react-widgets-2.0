import React, { useState } from "react";

export default function StringReverse() {

  const [string, setString] = useState('')
  const [selectedString, setSelectedString] = useState('')

  function solution(str) {
    return str.split('').reverse().join('')
  }

  return (
    <div className='content-wrapper'>
      <div className='title'>
        <h1>Reverse a String</h1>
        <h4>Description:</h4>
        <p>Reverses the order of an input string.</p>
      </div>
      <form className='form'>
        <input
          className='form-input'
          type="text"
          placeholder="Enter text to reverse"
          onChange={e => {
            setString(e.target.value);
          }}
          name="string"
        />
        <button className='form-button' onClick={(e) => { e.preventDefault(); setSelectedString(string) }}>Submit</button>
      </form>
      <div className='output'>
        {solution(selectedString)}
      </div>
    </div>
  );
}

// description:
// Reverses the string value 
// passed into it.

// solution('world'); // returns 'dlrow'
