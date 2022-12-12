import React from 'react';
import { FaFileArchive, FaGithub } from 'react-icons/fa';
import image1 from './learning platform img/Screenshot (116).png'
import image2 from './learning platform img/Screenshot (117).png'
import image3 from './learning platform img/Screenshot (118).png'
import image4 from './learning platform img/Screenshot (119).png'

const LearningPlatform = () => {
    return (
        <div className=' px-5 md:px-0 md:w-2/4  mx-auto'>
            <h1 data-aos="fade-up"
                data-aos-duration="2000" className='text-center text-3xl md:text-5xl font-serif mt-5'>This is the Learning platform  web site</h1>

            <p data-aos="fade-up"
                data-aos-duration="2000" className='text-2xl font-mono mt-5 '>This project name is Learning Tree

                This web site use to React js , mongobd , Tailwind css framework , DaisyUi , React_router_Dom etc if you want to know this web site You can visit this web site link you see next line

                Website have to different, different many programing Crouse like
                app development, PHP , Python </p>


            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000"
                className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center text-center ml-10 md:ml-0 '>
                <p className='text-md bg-violet-600 flex justify-center items-center  p-2 w-40 mt-3 rounded-md text-center text-white cursor-pointer'><FaFileArchive className='mr-2' /><a href="https://learning-platform-4eb1d.firebaseapp.com/">  Project visit</a></p>

                <p className='text-md bg-violet-600 p-2 w-40 mt-3 rounded-md text-center text-white cursor-pointer flex justify-center items-center'><FaGithub /><a className='ml-2' href="https://github.com/shawonislam1109/learning-palteform-client-side">GitHub Client</a></p>

                <p className='text-md bg-violet-600 p-2 w-40 mt-3 rounded-md text-center text-white cursor-pointer flex justify-center items-center'><FaGithub /><a className='ml-2' href="https://github.com/shawonislam1109/learning-palteform-server-side">GitHub server</a></p>

            </div>

            <p className='text-3xl md:text-5xl font-serif text-center mt-10'>Project ScreenShort</p>
            <div
                className='my-10'>
                <img data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="2000" className='mt-5 rounded-lg' src={image1} alt="" />
                <img data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="2000" className='mt-5 rounded-lg' src={image2} alt="" />
                <img data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="2000" className='mt-5 rounded-lg' src={image3} alt="" />
                <img data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="2000" className='mt-5 rounded-lg' src={image4} alt="" />
            </div>

        </div>
    );
};

export default LearningPlatform;