import React, { useState } from "react";

export default function StringIncrement() {

  const [string, setString] = useState('')
  const [selectedString, setSelectedString] = useState('')

  function incrementString(strng) {
    let nums = strng.match(/\d+/g);
    if (strng === '') {
      return ''
    }
    if (strng.match(/[A-Za-z]/g) === null) {
      let result = String(Number(strng) + 1)
      if (result.length >= strng.length) {
        return result
      } else {
        let diffLen = strng.length - result.length
        return '0'.repeat(diffLen) + result
      }
    }
    let letters = strng.match(/[A-Za-z]/g).join('');
    if (nums === null) {
      return letters.concat('1')
    }
    let origLen = nums[0].length
    let newNum = Number(nums) + 1
    let newNumLen = String(newNum).length
    if (newNumLen >= origLen) {
      return letters.concat(newNum)
    } else {
      let diff = origLen - newNumLen
      let withZeroes = '0'.repeat(diff) + String(newNum)
      return letters.concat(withZeroes)
    }
  }

  return (
    <div className='content-wrapper'>
      <div className='title'>
        <h1>Increment String Numbers</h1>
        <h4>Description:</h4>
        <p>Takes a string that ends with numbers and increments the number by one. If the string doesn't have a number, it will append a '1' on to the end of the string.</p>
      </div>
      <form className='form'>
        <input
          className='form-input'
          type="text"
          placeholder="Enter text to increment"
          onChange={e => {
            setString(e.target.value);
          }}
          name="string"
        />
        <button className='form-button' onClick={(e) => { e.preventDefault(); setSelectedString(string) }}>Submit</button>
      </form>
      <div className='output'>
        {incrementString(selectedString)}
      </div>
    </div>
  );
}

// Description:
// Function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100