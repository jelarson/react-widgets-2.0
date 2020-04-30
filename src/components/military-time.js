import React, { useState } from "react";

export default function MilitaryTime() {

  const [string, setString] = useState('')
  const [selectedString, setSelectedString] = useState('')

  function to12hourtime(time) {
    let timeNum = Number(time)

    if (timeNum >= 2400 || timeNum < 0) {
      return 'Not a valid time. Plese enter a number between 0000 and 2359'
    }
    if (Number(time.substring(time.length - 2)) >= 60) {
      return 'Minutes must be less than 60'
    }
    if (Number(time.substring(0, 2)) === 12) {
      return '12:' + time.slice(2, 4) + ' PM'
    }
    if (timeNum >= 1300) {
      return Number(time.slice(0, 2) - 12) + ':' + time.slice(2, 4) + ' PM'
    }
    if (time === '') {
      return ''
    }
    if (Number(time.substring(0, 2)) >= 10) {
      return time.slice(0, 2) + ':' + time.slice(2, 4) + ' AM'
    }
    else {
      return time.slice(1, 2) + ':' + time.slice(2, 4) + ' AM'
    }
  }

  return (
    <div className='content-wrapper'>
      <div className='title'>
        <h1>Convert Military Time</h1>
        <h4>Description:</h4>
        <p>Converting a 24-hour time like "0830" or "2030" to a 12-hour time (like "8:30 am" or "8:30 pm")</p>
      </div>
      <form className='form'>
        <input
          className='form-input'
          type="text"
          placeholder="Enter 4 digit military time"
          onChange={e => {
            setString(e.target.value);
          }}
          name="string"
        />
        <button className='form-button' onClick={(e) => { e.preventDefault(); setSelectedString(string) }}>Submit</button>
      </form>
      <div className='output'>
        {to12hourtime(selectedString)}
      </div>
    </div>
  );
}

// Description:
// Converting a 24-hour time like "0830" or "2030" to a
// 12-hour time (like "8:30 am" or "8:30 pm")
