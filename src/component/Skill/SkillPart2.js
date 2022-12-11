import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import SkillModal from './SkillModal';

const SkillPart2 = ({ data }) => {
    return (
        <div data-aos="zoom-out-up" data-aos-duration="2000">
            <div className='flex justify-center py-2 items-center  rounded-xl '>
                <img className='w-20 h-20 hover:h-24 hover:w-24 duration-200 animate-bounce rounded-full mr-3' src={data.image} alt="" />
                <h1 className='flex justify-center items-center text-white text-xl font-serif ml-2'>{data.name}  <label htmlFor="Skill-modal"><FaArrowRight className='ml-2 cursor-pointer'></FaArrowRight></label> </h1>
            </div>
            <div>
                <SkillModal data={data} />
            </div>
        </div>
    );
};

export default SkillPart2;