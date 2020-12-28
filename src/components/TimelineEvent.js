import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <div className='timeline-event'>
      <p>{props.person}</p>
      <p>{props.status}</p>
      <p><Timestamp time={props.timestamp}/></p>
    </div>
  );
}

export default TimelineEvent;