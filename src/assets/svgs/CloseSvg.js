import React from 'react';

const CloseSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    className="close_icon_svg"
    {...props}
  >
    <path
      fill="#000"
      d="M13.59.459L7.931 6.115 2.276.459.391 2.344 6.047 8 .39 13.656l1.885 1.885 5.656-5.656 5.657 5.656 1.886-1.885L9.819 8l5.656-5.656L13.589.459z"
    ></path>
  </svg>
);

export default CloseSvg;
