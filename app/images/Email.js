import React from 'react';

function Email(props) {
  return (
  <svg fill={props.fill} width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 114">
    <title>
      {props.title}
    </title>
    <path d="M56.2,16.5H3.8v4.9v74.1h52.3h52.3V21.4v-4.9H56.2z M56.2,23.5h40.4L58.7,61.4c-0.9,0.7-1.7,1.1-2.5,1.1
	c-0.8,0-1.6-0.4-2.5-1.1L15.8,23.5H56.2z M10.8,28.4L38.4,56L10.8,83.5V28.4z M56.2,88.5H15.8L43.3,61l5.8,5.8
	c2.3,1.8,4.6,2.7,7,2.8c2.4,0,4.8-1,7-2.8L69,61l27.5,27.5H56.2z M101.5,83.5L74,56l27.5-27.6V83.5z"/>
  </svg>
  );
}

export default Email;
