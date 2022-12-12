import React from 'react';
import { FaFileArchive, FaGithub } from 'react-icons/fa';
import toursim from './Projectimg/tourist.jpg';
import learning from './Projectimg/onlineEducation.webp'
import market from './Projectimg/productMarkte.jpg'
import { Link } from 'react-router-dom';


const Project = () => {
    return (
        <div className='my-10 mx-5 md:mx-0 ' id='project'>
            <h1 data-aos="zoom-in" data-aos-duration="2000"
                className='text-3xl md:text-5xl font-mono we text-right'>My Project</h1>

            <div className='flex md:justify-end justify-start'>
                <div className='my-10 relative'>

                    <img data-aos="zoom-in-left" data-aos-duration="2000" className='w-52 h-56 md:w-80 md:h-96 rounded-xl' src={toursim} alt="" />
                    <div className='absolute top-10 md:top-24 p-3 left-32 md:left-52 w-52 h-48 bg-slate-100 rounded-md'>
                        <h1 className='text-md  font-serif  text-slate-800'> This is Tourism web site</h1>
                        <p className='text-md bg-violet-600 flex justify-center items-center  p-1 w-24 mt-3 rounded-md text-center text-white cursor-pointer'><FaFileArchive className='mr-2' /><a href="https://travel-service-b2254.firebaseapp.com/">  Project</a></p>
                        <p className='text-md bg-violet-600 p-1 w-24 mt-3 rounded-md text-center text-white cursor-pointer flex justify-center items-center'><FaGithub /><a className='ml-2' href="https://github.com/shawonislam1109/client-side-travel-service">GitHub</a></p>
                        <p className='text-md bg-violet-600 p-1 w-24 mt-3 flex justify-center items-center rounded-md text-center text-white cursor-pointer'><FaGithub /><Link to='/project/tour' className='ml-2'>Details</Link></p>
                    </div>

                </div>
            </div>
            <div className='flex justify-start'>
                <div className='my-10 relative'>

                    <img data-aos="zoom-in-right" data-aos-duration="2000" className='w-52 h-56 md:w-80 md:h-96 rounded-xl' src={learning} alt="" />
                    <div className='absolute top-10 md:top-24 p-3 left-32 md:left-52 w-52 h-48 bg-slate-100 rounded-md'>
                        <h1 className='text-md  font-serif  text-slate-800'> This is Learning  web site</h1>
                        <p className='text-md bg-violet-600 flex justify-center items-center  p-1 w-24 mt-3 rounded-md text-center text-white cursor-pointer'><FaFileArchive className='mr-2' /><a href="https://learning-platform-4eb1d.firebaseapp.com/">  Project</a></p>
                        <p className='text-md bg-violet-600 p-1 w-24 mt-3 flex justify-center items-center rounded-md text-center text-white cursor-pointer'><FaGithub /><a className='ml-2' href="https://github.com/shawonislam1109/learning-palteform-client-side">GitHub</a></p>

                        <p className='text-md bg-violet-600 p-1 w-24 mt-3 flex justify-center items-center rounded-md text-center text-white cursor-pointer'><FaGithub /><Link to='/project/learning' className='ml-2'>Details</Link></p>
                    </div>

                </div>
            </div>
            <div className='flex md:justify-end justify-start'>
                <div className='my-10 relative'>

                    <img data-aos="zoom-in-left" data-aos-duration="2000" className='w-52 h-56 md:w-80 md:h-96 rounded-xl' src={market} alt="" />
                    <div className='absolute top-10 md:top-24 p-3 left-32 md:left-52 w-52 h-42 bg-slate-100 rounded-md'>
                        <h1 className='text-md  font-serif  text-slate-800'> This is Resale Product web site</h1>
                        <p className='text-md bg-violet-600 flex justify-center items-center  p-1 w-24 mt-3 rounded-md text-center text-white cursor-pointer'><FaFileArchive className='mr-2' /><a href="https://resale-market-cb84e.firebaseapp.com/">  Project</a></p>
                        <p className='text-md bg-violet-600 p-1 flex justify-center items-center w-24 mt-3 rounded-md text-center text-white cursor-pointer'><FaGithub /><a className='ml-2' href="https://github.com/shawonislam1109/Reasle-Market-client">GitHub</a></p>
                        <p className='text-md bg-violet-600 p-1 w-24 mt-3 flex justify-center items-center rounded-md text-center text-white cursor-pointer'><FaGithub /><Link to='/project/resalemarket' className='ml-2'>Details</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;