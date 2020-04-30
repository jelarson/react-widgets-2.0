import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import '../style/navbar.scss'


export default class NavBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='nav-wrapper'>
        <div className='nav-link-wrapper1'>
          <NavLink exact to='/'><button className='nav-link-wrapper'>Home</button></NavLink>
        </div>
        <div className='nav-link-wrapper1'>
          <NavLink to='/hashtag'><button className='nav-link-wrapper'>Hashtag Generator</button></NavLink>
        </div>
        <div className='nav-link-wrapper1'>
          <NavLink to='/least-greatest'><button className='nav-link-wrapper'>Least and Greatest</button></NavLink>
        </div>
        <div className='nav-link-wrapper1'>
          <NavLink to='/spongebob'><button className='nav-link-wrapper'>Spongebob Case</button></NavLink>
        </div>
        <div className='nav-link-wrapper1'>
          <NavLink to='/squared'><button className='nav-link-wrapper'>Square Every Digit</button></NavLink>
        </div>
        <div className='nav-link-wrapper1'>
          <NavLink to='/string-increment'><button className='nav-link-wrapper'>Increment Numbers in a String</button></NavLink>
        </div>
        <div className='nav-link-wrapper1'>
          <NavLink to='/string-reverse'><button className='nav-link-wrapper'>Reverse String</button></NavLink>
        </div>
        <div className='nav-link-wrapper1'>
          <NavLink to='/military-time'><button className='nav-link-wrapper'>Military Time Converter</button></NavLink>
        </div>
      </div >
    )
  }
}