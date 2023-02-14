import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const SkillPart2 = ({ data }) => {
    return (
        <div data-aos="zoom-out-up" data-aos-duration="2000">
            <div className='flex justify-center py-2 items-center  rounded-xl '>
                <img className='w-20 h-20 hover:h-24 hover:w-24 duration-200 rounded-full mr-3' src={data.image} alt="" />
                <h1 className='flex justify-center items-center text-white text-xl font-serif ml-2'>{data.name}  <p ><FaArrowRight className='ml-2 cursor-pointer'></FaArrowRight></p> </h1>
            </div>

        </div>
    );
};

export default SkillPart2;