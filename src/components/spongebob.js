import React, { useState } from "react";

export default function Spongebob() {

  const [string, setString] = useState('')
  const [selectedString, setSelectedString] = useState('')

  function spongebobCase(string) {
    let newArr = []
    for (let x in string) {
      if (x % 2 === 0) {
        newArr.push(string.charAt(x).toLowerCase())
      }
      if (x % 2 != 0) {
        newArr.push(string.charAt(x).toUpperCase())
      }
    }

    return (newArr.join(''))
  }

  return (
    <div className='content-wrapper'>
      <div className='title'>
        <h1>Convert String to Spongebob Case</h1>
        <h4>Description:</h4>
        <p>Takes a string and returns the same string, alternating between lowercase and uppercase lettering.</p>
      </div>
      <form className='form'>
        <input
          className='form-input'
          type="text"
          placeholder="Enter text to spongebob case"
          onChange={e => {
            setString(e.target.value);
          }}
          name="string"
        />
        <button className='form-button' onClick={(e) => { e.preventDefault(); setSelectedString(string) }}>Submit</button>
      </form>
      <div className='output'>
        {spongebobCase(selectedString)}
      </div>
    </div>
  );
}
