import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  return(
    <div className='timeline'>
      {props.events.map ((timelineEvent, i) => (
          <TimelineEvent person={timelineEvent.person} status={timelineEvent.status} timestamp={timelineEvent.timestamp}/>
      ))}
    </div>
  );
}

export default Timeline;