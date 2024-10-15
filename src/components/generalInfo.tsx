
import React from 'react';
import { GeneralInfoType } from 'src/types';

interface GeneralInfoProps {
  generalInfo: GeneralInfoType;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ generalInfo }) => {
  return (
    <div>
      <h2>{generalInfo.title}</h2>
      <p>{generalInfo.email}</p>
    </div>
  );
};

export default GeneralInfo;
