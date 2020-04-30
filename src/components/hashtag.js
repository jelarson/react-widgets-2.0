import React, { useState } from "react";

export default function Hashtag() {

  const [string, setString] = useState('')
  const [selectedString, setSelectedString] = useState('')

  function generateHashtag(str) {
    if (str.trim() === '') {
      return false
    }
    if (str.replace(/[\s\t]+/g, ' ').split(' ').join('').trim().length < 140) {
      return '#' + str.replace(/[\s\t]+/g, ' ').split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('')
    } else {
      return false
    }
  }

  return (
    <div className='content-wrapper'>
      <div className='title'>
        <h1>Convert String to Hashtag</h1>
        <h4>Description:</h4>
        <p>Takes a string of words and returns a hashtag of the combined words with their respective first letters capitalized.</p>
      </div>
      <form className='form'>
        <input
          className='form-input'
          type="text"
          placeholder="Enter text to turn into hashtag"
          onChange={e => {
            setString(e.target.value);
          }}
          name="string"
        />
        <button className='form-button' onClick={(e) => { e.preventDefault(); setSelectedString(string) }}>Submit</button>
      </form>
      <div className='output'>
        {generateHashtag(selectedString)}
      </div>
    </div>
  );
}

// Description:
// Takes a string of words and returns a hashtag of the combined
// words with their respective first letters capitalized. 

// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.