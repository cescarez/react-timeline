import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import PropTypes from 'prop-types';

const Timeline = (props) => {
  const timelineComponents = props.events.map ((timelineEvent, i) => {
    return ( 
      <li key={i}>
        <TimelineEvent person={timelineEvent.person} status={timelineEvent.status} timeStamp={timelineEvent.timeStamp}/>
      </li>
    );
  });

  return(
    <ul className='timeline'>
      {timelineComponents}
    </ul>
  );
}

Timeline.propTypes = {
  events: PropTypes.array.isRequired,
}

export default Timeline;
