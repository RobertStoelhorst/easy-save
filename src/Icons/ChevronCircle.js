import React from 'react';

function ChevronCircle(props) {
  return (
    <svg
      className={props.className}
      height={props.height}
      width={props.width}
      margin-left={props.margin}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill={props.fill}
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
      ></path>
    </svg>
  );
}

export default ChevronCircle;
