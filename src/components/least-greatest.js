import React, { useState } from "react";

export default function LeastGreatest() {

  const [nums, setNums] = useState('')
  const [selectedNums, setSelectedNums] = useState('')

  function highAndLow(numbers) {
    if (numbers === '') {
      return ''
    } else {
      let arr = []
      numbers.split(' ').forEach(num => {
        arr.push(Number(num))
      })
      return `Least: ${Math.min(...arr)} Greatest: ${Math.max(...arr)}`
    }
  }

  return (
    <div className='content-wrapper'>
      <div className='title'>
        <h1>Return Least and Greatest Digit</h1>
        <h4>Description:</h4>
        <p>Takes a string of space-separated numbers, and returns the highest and lowest number.</p>
      </div>
      <form className='form'>
        <input
          className='form-input'
          type="text"
          placeholder="Enter number array"
          onChange={e => {
            setNums(e.target.value);
          }}
          name="string"
        />
        <button className='form-button' onClick={(e) => { e.preventDefault(); setSelectedNums(nums) }}>Submit</button>
      </form>
      <div className='output'>
        {highAndLow(selectedNums)}
      </div>
    </div>
  );
}

// Description
// Takes a string of space separated numbers, and returns the 
// highest and lowest number.

// highAndLow("1 2 -3 4 5"); // return "5 -3"
