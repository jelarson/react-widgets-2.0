import React, { useState } from "react";

export default function Squared() {

  const [num, setNum] = useState('')
  const [selectedNum, setSelectedNum] = useState('')

  function squareDigits(num) {
    let numArr = []
    for (let digit of String(num)) {
      numArr.push(digit * digit)
    }
    return numArr.join('-')
  }

  return (
    <div className='content-wrapper'>
      <div className='title'>
        <h1>Square Every Digit</h1>
        <h4>Description:</h4>
        <p>Square every digit of a number.</p>
      </div>
      <form className='form'>
        <input
          className='form-input'
          type="text"
          placeholder="Enter digits to square"
          onChange={e => {
            setNum(e.target.value);
          }}
          name="string"
        />
        <button className='form-button' onClick={(e) => { e.preventDefault(); setSelectedNum(num) }}>Submit</button>
      </form>
      <div className='output'>
        {squareDigits(selectedNum)}
      </div>
    </div>
  );
}

// Description: 
// Square every digit of a number.

// For example, if we run 9119 through the function, 81-1-1-81 will come out,
// because 9^2 is 81 and 1^2 is 1.

