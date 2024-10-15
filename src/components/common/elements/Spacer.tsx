import React from 'react'


type HeadingProps = {
    height: string;
  };

const Spacer : React.FC<HeadingProps> = ({ height }) =>  {
  return (
    <div className={`${height} w-full p-0 m-0`}></div>
  )
}

export default Spacer