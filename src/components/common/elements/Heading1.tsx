import React from 'react';

type HeadingProps = {
  text: string;
  companyName?: string; 
};

const Heading1: React.FC<HeadingProps> = ({ text, companyName }) => {
  const renderTextWithHighlights = (text: string, companyName?: string) => {
    if (!companyName) {
      return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    }

    const parts = text.split(companyName);

    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < parts.length - 1 && (
          <span style={{ color: '#EB131B' }}>{companyName}</span>
        )}
      </React.Fragment>
    ));
  };

  return <h3 className='text-black font-poppins text-[30px] md:text-[50px] font-semibold leading-tight p-0 m-0'>{renderTextWithHighlights(text, companyName)}</h3>;
};

export default Heading1;
