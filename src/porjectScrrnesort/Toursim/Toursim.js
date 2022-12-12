import React from 'react';
import { FaFileArchive, FaGithub } from 'react-icons/fa';
import image1 from './Projectimag/Screenshot (108).png'
import image2 from './Projectimag/Screenshot (109).png'
import image3 from './Projectimag/Screenshot (110).png'

const Toursim = () => {
    return (
        <div className=' px-5 md:px-0 md:w-2/4  mx-auto'>
            <h1 data-aos="fade-up"
                data-aos-duration="2000" className='text-center text-3xl md:text-5xl font-serif mt-5'>This is the Tourism Web site</h1>

            <p data-aos="fade-up"
                data-aos-duration="2000" className='text-2xl font-mono mt-5 '>this is trvel web site this web site name Love to Travel
                there have to use authentication and vercel , firebase , dasiyUI , sever site node js mongDB,
                this web site help to tourism anyOne need to hepl visit this web site
                this a web site using system is there have to home sectin review section service section,
                you can help me with your opinion</p>

            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000" className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center text-center ml-10 md:ml-0 '>
                <p className='text-md bg-violet-600 flex justify-center items-center  p-2 w-40 mt-3 rounded-md text-center text-white cursor-pointer'><FaFileArchive className='mr-2' /><a href="https://travel-service-b2254.firebaseapp.com/">  Project visit</a></p>

                <p className='text-md bg-violet-600 p-2 w-40 mt-3 rounded-md text-center text-white cursor-pointer flex justify-center items-center'><FaGithub /><a className='ml-2' href="https://github.com/shawonislam1109/client-side-travel-service">GitHub Client</a></p>

                <p className='text-md bg-violet-600 p-2 w-40 mt-3 rounded-md text-center text-white cursor-pointer flex justify-center items-center'><FaGithub /><a className='ml-2' href="https://github.com/shawonislam1109/travel-service-server-side">GitHub server</a></p>

            </div>

            <p className='text-3xl md:text-5xl font-serif text-center mt-10'>Project ScreenShort</p>
            <div className='my-10'>
                <img data-aos="fade-right"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="2000" className='mt-5 rounded-lg' src={image1} alt="" />
                <img data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="2000" className='mt-5 rounded-lg' src={image2} alt="" />
                <img data-aos="fade-left"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="2000" className='mt-5 rounded-lg' src={image3} alt="" />
            </div>

        </div>
    );
};

export default Toursim;