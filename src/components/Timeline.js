import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineComponents = props.events.map ((timelineEvent, i) => {
    return ( 
      <li key={i}>
        <TimelineEvent person={timelineEvent.person} status={timelineEvent.status} timestamp={timelineEvent.timeStamp}/>
      </li>
    );
  });

  return(
    <ul className='timeline'>
      {timelineComponents}
    </ul>
  );
}

export default Timeline;