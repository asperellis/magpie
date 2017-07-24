import React from 'react';

// Icon
const Calendar = function(props) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox={'0 0 ' + props.width + ' ' + props.height} fill={props.fill} aria-labelledby={props.title}>
      <path d="M.94 4.02h9.77v.5H.94z"></path><path d="M.2 3.93h11v.5H.2z"></path><path d="M9.83 1.89V0H7.12v1.89H4.3V0H1.59v1.89H0v9.74h11.64V1.89H9.83zM7.62.5h1.71v2.74H7.62V.5zm-5.5 0h1.71v2.74H2.12V.5zm.58 10.62H.5v-1.9h2.2v1.9zm0-2.4H.5v-1.9h2.2v1.9zm0-2.4H.5V4.54h2.2v1.78zm2.75 4.79H3.2V9.22h2.25v1.9zm0-2.4H3.2V6.82h2.25v1.9zm0-2.4H3.2V4.54h2.25v1.78zm2.75 4.81H5.95v-1.9H8.2v1.9zm0-2.4H5.95v-1.9H8.2v1.9zm0-2.4H5.95V4.54H8.2v1.78zm2.94 4.79H8.7V9.22h2.44v1.9zm0-2.4H8.7V6.82h2.44v1.9zm0-2.4H8.7V4.54h2.44v1.78z"></path>
    </svg>
  );
};

export default Calendar;