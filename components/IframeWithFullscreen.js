import React from 'react';

const IframeWithFullscreen = ({ src }) => {
  return (
    <iframe className="  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 " 
      src={src}
      allowFullScreen={true}
      width="100%"
      height="100%"
      frameBorder="0"
    ></iframe>
  );
};

export default IframeWithFullscreen;
