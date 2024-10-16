import React from 'react'


type SubTitleProps = {
  text: string;
};


const SubTitle : React.FC<SubTitleProps> = ({ text
}) => {
  return (
    <div className="flex flex-row items-center p-0 m-0">
        <div className="flex w-[20px] md:w-[50px] bg-[#EB131B] h-[5px] mr-[15px] md:mr-[25px]"></div>
        <div className="flex w-[60px] md:w-[100px] bg-[#EB131B] h-[5px] mr-[30px] md:mr-[50px]"></div>
        <h3 className='text-[#000] font-poppins font-semibold text-[20px] md:text-[24px] 2xl:text-[30px]'>
          {text}
        </h3>
    </div>
  )
}

export default SubTitle