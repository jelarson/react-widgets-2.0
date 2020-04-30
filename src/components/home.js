import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faArrowCircleRight,
  faArrowCircleLeft,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faCog,
    faArrowCircleRight,
    faArrowCircleLeft,
    faEnvelope
  );
};



export default function () {
  Icons();
  return (
    <div className='content-wrapper'>
      <div className='icons'>
        <FontAwesomeIcon icon='cog' spin />
        <FontAwesomeIcon icon='cog' pulse />
        <FontAwesomeIcon icon='cog' spin />
        <FontAwesomeIcon icon='cog' pulse />
      </div>
    </div>
  )
}